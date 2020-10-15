const rand = (l, h) => l + Math.floor((h - l) * Math.random());

const rand_price = (lm, hm, lv, hv) => ({
  minerals: rand(lm, hm),
  vespene: rand(lv, hv)
});

const rand_config = (lm, hm, lv = 0, hv = 0) => ({
  price: rand_price(lm, hm, lv, hv)
});

const unit_config = () => ({
  zerg: {
    zergling: rand_config(50, 100),
    roach: rand_config(100, 150, 30, 80),
    hydra: rand_config(100, 200, 100, 200)
  },
  protoss: {
    zealot: rand_config(90, 150),
    stalker: rand_config(100, 150, 50, 100),
    immortal: rand_config(200, 400, 150, 250)
  },
  terran: {
    marine: rand_config(50, 75),
    tank: rand_config(100, 150, 150, 200),
    ghost: rand_config(150, 250, 100, 200)
  }
});

const list_prices_from_config = config => Object.values(config).map(
  units_object => Object.entries(units_object).map(
    name_info_pair => {
      const name = name_info_pair[0];
      const p = name_info_pair[1].price;
      return `${name} costs ${p.minerals} minerals and ${p.vespene} vespene`
    }
  ).join(`\n`)
).join(`\n`);

const rand_from_array = xs => xs[rand(0, xs.length)];

const gen_test = () => {
  const num_players = rand(2, 10);
  const config = unit_config();
  const race_names = Object.keys(config);
  const player_races = Array.from(
    { length: num_players },
    () => rand_from_array(race_names)
  );

  const num_commands = rand(1, 200);

  const alive_units_per_player = Array.from({ length: num_players }, () => ({}));
  const player_resources = Array.from({ length: num_players }, () => ({
    minerals: 0,
    vespene: 0
  }));
  const gen_units_commands = () => {
    const pi = rand(0, num_players);
    const race = player_races[pi];
    const unit = rand_from_array(Object.keys(config[race]));
    const existing_amount = alive_units_per_player[pi][unit] || 0;
    const lose_units = existing_amount > 0 && rand(0, 3) > 0;
    const amount = lose_units ? rand(1, existing_amount + 1) : rand(1, 6);
    const action = lose_units ? `loses` : `builds`;
    const suffix = amount > 1 ? `s` : ``;
    alive_units_per_player[pi][unit] =
      (alive_units_per_player[pi][unit] || 0) +
      (
        lose_units
          ? -amount
          : (() => {
              let { minerals, vespene } = player_resources[pi];
              const { price } = config[player_races[pi]][unit];
              let a = amount;

              while ((minerals - price.minerals >= 0) && (vespene - price.vespene >= 0) && a > 0) {
                minerals -= price.minerals;
                vespene -= price.vespene;
                --a;
              }

              Object.assign(player_resources[pi], { minerals, vespene });
              return amount - a;
            })()
      );

    return `player ${pi} ${action} ${amount} ${unit}${suffix}`;
  };

  const gen_gather_res = () => {
    const pi = rand(0, num_players);
    const amount = rand(100, 250);
    const type = [`minerals`, `vespene`][rand(0, 2)];
    player_resources[pi][type] += amount;
    return `player ${pi} gathers ${amount} ${type}`;
  };

  const rand_command = () => rand_from_array([
    gen_gather_res,
    gen_units_commands
  ])();

  const price_list = list_prices_from_config(config);
  const initial_amounts = { vespene: rand(400, 1000), minerals: rand(600, 1200) };
  const initial_resources = Array.from(
    { length: num_players },
    (_, i) => `players ${i} gathers ${initial_amounts.minerals} minerals\nplayer ${i} gathers ${initial_amounts.vespene} vespene`
  ).join(`\n`);
  const commands = Array.from({ length: num_commands }, rand_command).join(`\n`);
  return `${initial_resources}\n${price_list}\n${commands}`;
};

const test = gen_test();
console.log(test);

const gen_all = n => {
  const fs = require(`fs`);
  while (--n) {
    const input = gen_test();
    fs.writeFileSync(`${n}.in.txt`, input, { encoding: `utf-8` });
  }
};

gen_all(6);

// sanity check
//console.log(
//  test.split(`\n`).reduce((mem, line) => {
//    const [, pi, action, amount, unit] = line.split(` `);
//    if (action !== `builds` && action !== `loses`) return mem;
//    const unit_name = unit.replace(/s$/, '');
//    mem[pi] = mem[pi] || {};
//    mem[pi][unit_name] = (mem[pi][unit_name] || 0) + (action === `loses` ? -amount : +amount);
//    return mem;
//  }, {})
//)

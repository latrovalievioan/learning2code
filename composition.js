const monsterCreator = (name) => {
  const monster = { name };
  return { ...monster, ...flyier(name), ...green() };
};

const flyier = (name) => {
  return {
    fly: () => console.log(`${name} is flying.`),
  };
};

const green = () => {
  return {
    color: 'green',
  };
};

const monster = monsterCreator('Stra6no 4udovi6te');

console.log(monster);

Write a program that counts how many units of a specific type each player builds. Players can also lose units. Players cannot lose units they do not have. The input will look like this:

```
player 2 builds 2 roachs
player 6 builds 4 ghosts
player 6 builds a ghost
player 0 builds 2 marines
player 8 builds 3 zerglings
player 0 builds 5 ghosts
player 0 loses 4 ghosts
player 6 builds 2 marines
player 1 builds 4 stalkers
player 2 builds 5 zerglings
player 2 builds 4 roachs
player 3 builds 4 roachs
player 4 builds a hydra
player 2 loses 3 roachs
player 6 builds 2 ghosts
player 4 builds 5 roachs
player 0 builds 2 marines
player 7 builds a zergling
player 7 loses a zergling
player 4 builds 3 zerglings
player 1 builds 2 stalkers
player 3 loses 4 roachs
```

Your output should look something like this (the format isn't strict, as long as you output correct information):

```
{
    "0": {
        "marine": 4,
        "ghost": 1
    },
    "1": {
        "stalker": 6
    },
    "2": {
        "roach": 3,
        "zergling": 5
    },
    "3": {
        "roach": 0
    },
    "4": {
        "hydra": 1,
        "roach": 5,
        "zergling": 3
    },
    "6": {
        "ghost": 7,
        "marine": 2
    },
    "7": {
        "zergling": 0
    },
    "8": {
        "zergling": 3
    }
}
```

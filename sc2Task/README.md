Write a program that counts how many units of a specific type each player builds. The input will look like this:

```
player 2 builds a ghost
player 0 builds a roach
player 4 builds 4 ghosts
player 4 builds 4 ghosts
player 1 builds 4 hellions
player 3 builds 3 immortals
player 3 builds 4 zealots
player 0 builds 5 roachs
player 3 builds 3 immortals
player 0 builds 4 roachs
player 3 builds 5 zealots
player 3 builds 4 stalkers
player 2 builds 3 ghosts
```

Your output should look something like this (the format isn't strict, as long as you output correct information):

```
{
    "player 2": {
        "ghost": 4
    },
    "player 0": {
        "roach": 10
    },
    "player 4": {
        "ghost": 8
    },
    "player 1": {
        "hellion": 4
    },
    "player 3": {
        "immortal": 6,
        "zealot": 9,
        "stalker": 4
    }
}
```

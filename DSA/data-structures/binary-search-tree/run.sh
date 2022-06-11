#!/bin/zsh
npx ts-node ./binarySearchTree.ts
dot -T svg dot.txt > index.html
open index.html

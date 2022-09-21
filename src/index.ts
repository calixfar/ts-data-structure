import { backtrackingLabyrinth } from './algorithms/backtracking/labyrinth'

const array = [
  [0,0,0,1,1],
  [1,0,0,0,0],
  [1,1,0,1,0],
  [1,0,1,0,1],
  [0,1,1,1,0]
  ]
  
  backtrackingLabyrinth(array)
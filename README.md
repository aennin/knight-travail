# knight-travail
This project implements a function `knightMoves(start, end)` that finds the shortest path a knight can take on a standard 8×8 chessboard from a starting square to a target square. The algorithm uses **Breadth-First Search (BFS)** to guarantee the shortest path.

## Features
- Calculates the **minimum number of moves** required.
- Returns the **full path of squares** visited.
- Prevents revisiting already explored squares with a `Set`.
- Handles edge cases (invalid moves or off-board positions).

## Example Usage
```bash
knightMoves([0, 0], [1, 2]);
// Output:
// You made it in 1 moves! Here's your path:
// [0,0]
// [1,2]
```

```bash
knightMoves([0, 0], [7, 7]);
// Output (one possible path):
// You made it in 6 moves! Here's your path:
// [0,0]
// [2,1]
// [4,2]
// [6,3]
// [7,5]
// [5,6]
// [7,7]
```

## How It Works
1. Define all 8 **possible knight moves**:
```bash
const directions = [
  [2,1], [1,2], [-1,2], [-2,1],
  [-2,-1], [-1,-2], [1,-2], [2,-1]
];
```
2. Uses **BFS with a queue** to explore moves level by level.
3. Tracks visited positions to avoid infinite loops.
4. Stops once the target square is reached, printing the path.

## Run Locally
1. Clone the repository or copy the files.
2. Save the implementation in `index.js`.
3. Run in Node:
```bash
node index.js
```

## Future Improvements
- Add support for custom board sizes.
- Return all shortest paths when multiple exist
- Add a visual representation of the knight's moves.
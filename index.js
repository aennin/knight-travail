function knightMoves(start, end) {
    const directions = [
        [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

    // BFS queue: each item is [position, path]
    let queue = [[start, [start]]];
    let visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        let [current, path] = queue.shift();
        let [x, y] = current;

        if (x === end[0] && y === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(p => console.log(p));
            return path;
        }

        for (let [dx, dy] of directions) {
            let nx = x + dx, ny = y + dy;
            if (isValid(nx, ny) && !visited.has([nx, ny].toString())) {
                visited.add([nx, ny].toString());
                queue.push([[nx, ny], [...path, [nx, ny]]]);
            }
        }
    }
}

console.log("Testing knoght moves:");
knightMoves([0,0], [3,3]);
console.log("\n"); 
knightMoves([0,0], [7,7]);
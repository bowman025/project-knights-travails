const knightMoves = (start, end) => {
    const moves = [
        [1, 2], [1, -2], [-1, 2], [-1, -2],
        [2, 1], [-2, 1], [2, -1], [-2, -1],
    ];
    const isValid = ([x, y]) => {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
    const queue = [[start, 0, `[${start}]`]];
    const visited = new Set([start.toString()]);
    while(queue.length > 0) {
        const [vertex, num, steps] = queue.shift();
        if (vertex[0] === end[0] && vertex[1] === end[1]) {
            return `You made it in ${num} moves! Here's your path:\n${steps}`;
        }
        for (const move of moves) {
            const current = [vertex[0] + move[0], vertex[1] + move[1]];
            if (isValid(current) && !visited.has(current.toString())) {
                visited.add(current.toString());
                queue.push([current, num + 1, steps + ` -> [${current}]`]);
            }
        }
    }
    return null;
}

console.log(knightMoves([3, 3], [4, 3]));
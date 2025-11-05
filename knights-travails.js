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
        const [[x, y], num, steps] = queue.shift();
        if (x === end[0] && y === end[1]) {
            return `You made it in ${num} moves! Here's your path:\n${steps}`;
        }
        for (const move of moves) {
            const current = [x + move[0], y + move[1]];
            if (isValid(current) && !visited.has(current.toString())) {
                visited.add(current.toString());
                queue.push([current, num + 1, steps + ` -> [${current}]`]);
            }
        }
    }
    return null;
}

console.log(knightMoves([0, 0], [7, 7]));
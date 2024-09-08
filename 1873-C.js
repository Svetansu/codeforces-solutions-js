let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readline() {
    return inputString[currentLine++];
}

// solution here

function main() {
    var t = parseInt(readline());

    for (var a0 = 0; a0 < t; a0++) {
        let grid = [];
        for (let i = 0; i < 10; i++) {
            let a = readline();
            grid.push(a);
        }
        let rs = 0, re = 9, cs = 0, ce = 9;
        let count = 0, score = 0, curS = 1;
        while (count < 100) {
            for (let i = cs; i <= ce; i++) {
                count++;
                if (grid[rs][i] == 'X') score += curS;
            }
            rs++;
            for (let i = rs; i <= re; i++) {
                count++;
                if (grid[i][ce] == 'X') score += curS;
            }
            ce--;
            for (let i = ce; i >= cs; i--) {
                count++;
                if (grid[re][i] == 'X') score += curS;
            }
            re--;
            for (let i = re; i >= rs; i--) {
                count++;
                if (grid[i][cs] == 'X') score += curS;
            }
            cs++;
            curS++;
        }
        console.log(score);
    }
}

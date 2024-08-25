process.stdin.resume();
process.stdin.setEncoding('utf-8');

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
        var n = parseInt(readline());
        let grid = [];
        for (let i = 0; i < n; i++) {
            let r = readline().split('').map(x => parseInt(x));
            grid.push(r);
        }
        let res = 0;
        for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
            for (let j = 0; j < Math.floor(n / 2); j++) {
                let curi = i, curj = j, sum = 0;
                let tempj = curj;
                sum += grid[curi][curj];
                curj = n - curi - 1;
                curi = tempj;
                tempj = curj;
                sum += grid[curi][curj];
                curj = n - curi - 1;
                curi = tempj;
                tempj = curj;
                sum += grid[curi][curj];
                curj = n - curi - 1;
                curi = tempj;
                tempj = curj;
                sum += grid[curi][curj];
                res += Math.min(sum, 4 - sum);
            }
        }
        console.log(res);
    }
}

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
        var nm = readline().split(' ').map(x => parseInt(x));
        var n = nm[0], m = nm[1];
        var v = readline().split(' ').map(x => parseInt(x));
        v.sort((a, b) => a - b);
        var d = new Array(m);
        d[0] = n - v[m - 1] + v[0] - 1;
        for (let i = 1; i < m; i++) {
            d[i] = v[i] - v[i-1] - 1;
        }
        let saved = 0;
        d.sort((a, b) => b - a);
        for (let i = 0; i < m; i++) {
            let infected = 4 * i;
            d[i] -= infected;
            if (d[i] == 1) {
                saved++;
            } else if (d[i] > 1) {
                saved += d[i] - 1;
            } else {
                break;
            }
        }
        console.log(n - saved);
    }
}

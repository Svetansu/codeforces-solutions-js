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
        var p = readline().split(' ').map(x => parseInt(x));
        let set = new Set(p);
        if (set.size == 2) {
            let cur = p[0], diff = 0;
            for (let i of p) {
                if (i == cur) {
                    diff++;
                } else {
                    diff--;
                }
            }
            console.log(Math.abs(diff) <= 1 ? 'YES' : 'NO');
        } else {
            console.log(set.size == 1 ? 'YES' : 'NO');
        }
    }
}

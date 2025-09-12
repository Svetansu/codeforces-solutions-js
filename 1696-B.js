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
        var a = readline().split(' ').map(x => parseInt(x));
        let res = 0, chain = false, count = 0;
        for (let i = 0; i < n; i++) {
            if (a[i] !== 0) {
                if (!chain) {
                    res++;
                    count++;
                    if (count > 1) break;
                    chain = true;
                }
            } else chain = false;
        }
        console.log(res);
    }
}

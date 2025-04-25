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
    for (let i = 0; i < t; i++) {
        var n = parseInt(readline());
        var a = readline().split(' ').map(x => parseInt(x));
        let m = -1;
        for (let a0 of a) if (a0 > m) m = a0;
        let b = [], c = [];
        for (var a0 of a) {
            if (a0 === m) c.push(a0);
            else b.push(a0);
        }
        if (c.length === a.length) console.log(-1);
        else {
            console.log(b.length + ' ' + c.length);
            console.log(b.join(' '));
            console.log(c.join(' '));
        }
    }
}

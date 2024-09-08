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
        const n = parseInt(readline());
        let a = readline().split(' ').map(x => parseInt(x));
        let e = 0;
        for (let i of a) {
            e += i;
        }
        console.log(0 - e);
    }
}

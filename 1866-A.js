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
    let n = parseInt(readline());
    let a = readline().split(' ').map(x => parseInt(x));
    let min = Infinity;
    for (let i of a) {
        const cur = Math.abs(i);
        min = Math.min(cur, min);
    }
    console.log(min);
}

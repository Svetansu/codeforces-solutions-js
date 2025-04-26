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
        let abc = readline().split(' ').map(x => parseInt(x));
        let a = abc[0], b = abc[1], c = abc[2];
        if (c % 2) a++;
        console.log(a > b ? "First" : "Second");
    }
}

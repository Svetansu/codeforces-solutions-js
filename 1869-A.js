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
        let n = parseInt(readline());
        let a = readline().split(' ').map(x => parseInt(x));
        console.log(n % 2 ? 4 : 2);
        const l = n - (n % 2 ? 1 : 0); 
        console.log(1 + ' ' + l);
        console.log(1 + ' ' + l);
        if (n % 2) {
            console.log(l + ' ' + n);
            console.log(l + ' ' + n);
        }
    }
}

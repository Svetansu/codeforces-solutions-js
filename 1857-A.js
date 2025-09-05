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
        let n = parseInt(readline());
        let a = readline().split(' ').map(x => parseInt(x));
        let sum = 0;
        for (let num of a) sum += num;
        console.log(sum % 2 ? 'NO' : 'YES');
    }
}

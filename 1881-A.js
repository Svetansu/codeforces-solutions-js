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
        let nm = readline().split(' ').map(x => parseInt(x));
        const n = nm[0], m = nm[1];
        let x = readline();
        let s = readline();
        let count = 0;
        while (count < 6) {
            if (x.includes(s)) break;
            count++;
            x += x;
        }
        console.log(count < 6 ? count : -1);
    }
}

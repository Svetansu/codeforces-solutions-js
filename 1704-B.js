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
        let [n, x] = readline().split(' ').map(x => parseInt(x));
        let a = readline().split(' ').map(x => parseInt(x));
        let min = a[0], max = a[0], d = 2 * x, count = 0;
        for (let i = 1; i < n; i++) {
            min = Math.min(min, a[i]);
            max = Math.max(max, a[i]);
            if (max - min > d) {
                count++;
                min = a[i];
                max = a[i];
            } 
        }
        console.log(count);
    }
}

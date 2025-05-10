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
        let s = readline().split('');
        let chain = 1, max = 1, p = s[0];
        for (let i = 1; i < n; i++) {
            const c = s[i];
            if (c === p) {
                chain++;
                max = Math.max(max, chain);
            } else {
                chain = 1;
                p = c;
            } 
        }
        console.log(max + 1);
    }
}

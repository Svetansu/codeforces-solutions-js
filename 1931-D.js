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
        let nxy = readline().split(' ').map(x => parseInt(x));
        let arr = readline().split(' ').map(x => parseInt(x));
        const [n, x, y] = nxy; 
        let modMap = new Map(), res = 0;
        for (let i = 0; i < n; i++) {
            const c = arr[i];
            const comp = (x - (c % x)) % x;
            const rem = c % y;
            const checkKey = `${comp}, ${rem}`;
            res += (modMap.get(checkKey) || 0);
            const key = `${c % x}, ${rem}`;
            modMap.set(key, (modMap.get(key) || 0) + 1);
        }
        console.log(res);
    }
}

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
    const MOD = 998244353;
    var t = parseInt(readline());
    for (var a0 = 0; a0 < t; a0++) {
        let s = readline();
        const n = s.length;
        let seg = 1, l = 1, o = 0;
        for (let i = 0; i < n - 1; i++) {
            if (s[i] !== s[i + 1]) {
                seg = ((seg % MOD) * (l % MOD)) % MOD;
                o += l - 1;
                l = 1;
            } else l++;
        }
        if (l > 1) {
            seg = ((seg % MOD) * (l % MOD)) % MOD;
            o += l - 1;
            l = 1;
        }

        if (o === 0) {
            console.log('0 1');
            continue;
        }

        for (let i = 1; i <= o; i++) seg = ((seg % MOD) * (i % MOD)) % MOD;
        console.log(o + ' ' + seg);
    }
}

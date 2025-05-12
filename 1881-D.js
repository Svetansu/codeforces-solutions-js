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

function primes(num, map) {
    let i = 2;
    while (i * i <= num) {
        while (num % i === 0) {
            map.set(i, (map.get(i) || 0) + 1);
            num /= i;
        }
        i++;
    }
    if (num > 1) map.set(num, (map.get(num) || 0) + 1);
}

// solution here

function main() {
    var t = parseInt(readline());

    for (var a0 = 0; a0 < t; a0++) {
        let n = parseInt(readline());
        let arr = readline().split(' ').map(x => parseInt(x));
        let map = new Map(), res = true;
        for (let num of arr) primes(num, map);
        for (let v of map.values()) {
            if (v % n !== 0) {
                res = false;
                break;
            }
        }
        console.log(res ? 'YES' : 'NO');
    }
}

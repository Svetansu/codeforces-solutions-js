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
        var n = parseInt(readline());
        var s = readline().split('');
        let cost = new Array(n).fill(0);
        for (let i = n; i >= 1; i--) {
            if (s[i-1] == '0') {
                for (let j = i; j <= n; j += i) {
                    if (s[j-1] == '0') {
                        cost[j-1] = i;
                    } else {
                        break;
                    }
                }
            }
        }
        let res = 0;
        for (var c of cost) res += c;
        console.log(res);
    }
}

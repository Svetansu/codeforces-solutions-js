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
        var nc = readline().split(' ');
        var n = parseInt(nc[0]), c = BigInt(nc[1]);
        var a = readline().split(' ').map(x => parseInt(x));
        var l = 0, r = Math.pow(10, 10);
        while (l <= r) {
            var mid = Math.floor((l + r)/2);
            var res = check(mid, a, c);
            if (res == 0) {
                l = mid;
                break;
            } else if (res == 1) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        console.log(l);
    }

    function check(mid, a, c) {
        var sum = BigInt(0);
        for (var i of a) {
            var area = BigInt(i + 2 * mid) * BigInt(i + 2 * mid);
            sum += area;
            if (sum > c) return -1;
        }
        if (sum == c) {
            return 0;
        } else {
            return 1;
        }
    }
}

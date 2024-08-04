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
        var a = readline().split(' ').map(x => BigInt(x));
        var k = BigInt(2);
        while (k) {
            var s = new Set();
            for (var i of a) {
                var rem = i % k;
                s.add(rem);
            }
            if (s.size == 2) break;
            k *= BigInt(2);
        }
        console.log(k.toString());
    }
}

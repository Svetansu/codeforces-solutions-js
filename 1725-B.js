
var nd = readline().split(' ').map(x => parseInt(x));
var n = nd[0], d = nd[1];
var team = readline().split(' ').map(x => parseInt(x));
team.sort((a,b) => b-a);
var ans = 0, playersUsed = 0;
for (var i = 0; i < n; i++) {
    var player = team[i];
    var needed = Math.floor(d / player) + 1;
    if (playersUsed + needed <= n) {
        playersUsed += needed;
        ans++;
    } else {
        break;
    }
}
print(ans);

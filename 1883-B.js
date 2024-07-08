
var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
  var ab = readline().split(' ');
  var n = parseInt(ab[0]), k = parseInt(ab[1]);
  var word = readline();
  var freq = {};
  for (var i = 0; i < n; i++) {
    if (freq[word[i]]) {
      freq[word[i]]++;
    } else {
      freq[word[i]] = 1;
    }
  }
  var odd = 0;
  for (var char in freq) {
    if (freq[char] % 2 !== 0) {
      odd++;
    }
  }
  if (k < odd-1) {
    print('NO');
  } else {
    print('YES');
  }
}
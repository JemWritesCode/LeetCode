//1/4/2025

var isAnagram = function(s, t){
    if (s.length != t.length) return false;
    const freq = new Array(26).fill(0);
    for (char in s){
        freq[s.charCodeAt(char)-97]++;
        freq[t.charCodeAt(char)-97]--;
    }
    return freq.every(count => count === 0);
}
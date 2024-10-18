/* Hash Map

Time Complexity: O(n * m * log(m)) (Analyze Complexity Confirmed)
n is number of strings in the input array strs
m is the average length of a string in strs
string.split('').sort().join('') takes O(m * log(m)) and then you have to do it 
for every element in the strs array.

Space Complexity: O (n * m) (Analyze Complexity Confirmed)
The hash map will store n keys of length m

*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function getKey(string){
    return string.split('').sort().join('')
 }
var groupAnagrams = function(strs) {
      let hashMap = new Map();

    for(let s of strs){
        const key = getKey(s);
        if(!hashMap[key])
            hashMap[key] =[];        
       hashMap[key].push(s);
    }
    return Object.values(hashMap);
};
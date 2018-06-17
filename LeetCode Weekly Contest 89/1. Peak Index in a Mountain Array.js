/**
 * @param {number[]} A
 * @return {number}
 */

//Array given is definitely a mountain, so just need to find the highest number's index.
var peakIndexInMountainArray = function(A) {
    var peak = 0;
    var peakIndex;
    for(var i = 0; i < A.length; i++){
        if(A[i] > peak){
            peak = A[i];
            peakIndex=i;
        }        
    }
     return peakIndex; // return highest number in array (i)
    
};

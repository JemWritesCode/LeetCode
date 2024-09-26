// TWO POINTERS
// the arary is already sorted. so min pointer starts at the left (low side) of array, min starts at high side of array.
// if sum is less than target move min pointer up. array is already sorting so this will increase the sum.
// if the sum is more than target move the max pointer left to decrease the sum. 
// it's a 1-indexed array instead of the usual 0-indexed so we need to add +1

// Time Complexity: O(n) (Analyze Complexity Confirmed)
// You have to go through each of the numbers in the int array

// Space Complexity: O(1) (Analyze Complexity Confirmed)
// We are just traversing the int array that is passed into the function, no extra memory is needed. 

public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        int min = 0, max = numbers.Length - 1;
        while ((numbers[min] + numbers[max]) != target)
            if((numbers[min]+ numbers [max]) > target) max--;
            else min++;
        return new int[]{min + 1, max +1};
    }
}
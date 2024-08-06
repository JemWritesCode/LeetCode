

////////////////////////////////////////////////////////////////////////////////////
// // Priority Queue (Heap)
// // Time Complexity: O(n *logk) (Leetcode Complexity Analyzer confirmed)
// // Space Complexity: O(n + k)

// public class Solution {
//     public int[] TopKFrequent(int[] nums, int k) {

//         // Make a dictionary to store the frequency of each unique element in nums
//         // MapKey = numValue && MapValue is a frequency counter.
//         Dictionary<int, int> freqMap = new();
//         for (int i = 0; i < nums.Length; i++){
//             if (freqMap.ContainsKey(nums[i]))
//                 freqMap[nums[i]]++;
//             else
//                 freqMap[nums[i]] = 1;
//         }

//     // put each unique number in the priority queue (C# implements this as min-heap)
//     // priority is determined by frequency (freqMap[key])
//     // we're only looking for top k so we can dequeue(remove smallest freq) the rest
//         PriorityQueue<int, int> pq = new();
//         foreach(var key in freqMap.Keys){
//             pq.Enqueue(key, freqMap[key]);
//             if (pq.Count > k)
//                 pq.Dequeue();
//         }

//         int[] result = new int[k];
//         int j = k;

//         // fill the result array from the priority queue
//         // need to start from end of priority queue to start with most frequent
//         while (pq.Count > 0)
//             result[--j] = pq.Dequeue();

//         return result;
//     }
// }
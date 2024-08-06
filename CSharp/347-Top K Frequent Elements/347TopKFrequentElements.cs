// Bucket Sort
// Use the index as the counter, and the value is a list of elements of that index frequency
// Time Complexity: O(n)
// Space Complexity: O(n)
public class Solution {
    public int[] TopKFrequent(int[] nums, int k){
        // Make a dictionary to store the frequency of each unique element in nums
        // MapKey = NumValue && MapValue = frequency counter
        Dictionary<int, int> freqMap = new Dictionary<int, int>();
        foreach (var num in nums){
            if (freqMap.ContainsKey(num))
                freqMap[num]++;
            else
                freqMap[num] = 1;
        }

        // A list of list to store elements with the same frequency
        // have to +1 because arrays start at 0 but we're using index to count freq
        // (do I have to though? I know that'd make the count accurate but the next section will just count from the end?)
        List<int>[] buckets = new List<int>[nums.Length + 1];
        foreach (var num in freqMap.Keys){
            int freq = freqMap[num];
            if (buckets[freq] == null)
                buckets[freq] = new List<int>();
            buckets[freq].Add(num);
        }

        // Start at the end of the buckets array (highest frequency number)
        // work backwards for k elements
        List<int> result = new List<int>();
        for (int i = buckets.Length - 1; i >= 0 && result.Count < k; i--){
            if(buckets[i] != null)
                result.AddRange(buckets[i]);
        }
        return result.ToArray();
    }
}

////////////////////////////////////////////////////////////////////////////////////
// // Priority Queue (Heap)
// // Time Complexity: O(n *logk) (Leetcode Complexity Analyzer confirmed)
// // Space Complexity: O(n + k)

// public class Solution {
//     public int[] TopKFrequent(int[] nums, int k) {

//         // Make a dictionary to store the frequency of each unique element in nums
//         // MapKey = numValue && MapValue is a frequency counter.
//         Dictionary<int, int> freqMap = new();
//         foreach (var num in nums){
//             if (freqMap.ContainsKey(num))
//                 freqMap[num]++;
//             else
//                 freqMap[num] = 1;
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
/* Priority Queue

Time Complexity: O(n log n) (Analyze Complexity Confirmed)
go through all the points in the point array once, enqueue and dequeue takes O(logn for each point)

Space Complexity: O(n) (Analyze Complexity Confirmed)
may need to store up to all n points.
*/
public class Solution {
    public int[][] KClosest(int[][] points, int k) {
        PriorityQueue<int[], double> pq = new PriorityQueue<int[], double>();
        double distance = 0.0;
        int i;
        for(i=0; i< points.Length; i++)    
        {
            distance = Math.Pow(points[i][0], 2) + Math.Pow(points[i][1], 2);
            pq.Enqueue(new int[]{points[i][0], points[i][1]}, distance);
        }
        int[][] result = new int[k][];
        for(i=0; i< k; i++)
        {
            result[i] = pq.Dequeue();
        }
        return result;
    }
}
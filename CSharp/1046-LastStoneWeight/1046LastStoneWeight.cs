// TIME COMPLEXITY: O(N Log N)
// enqueue and dequeue each stone once for O(n), and priority queue operations are O(logN) each
// SPACE COMPLEXITY: O(n)
// priority que stores up to all the stones at once
public class Solution {
    public int LastStoneWeight(int[] stones) {
        var q = new PriorityQueue<int,int>();
        foreach (var stone in stones)
            q.Enqueue(stone, -stone);
        while (q.Count > 1){
            var stone = q.Dequeue() - q.Dequeue();
            q.Enqueue(stone, -stone);
        }
        return q.Dequeue();
    }
}
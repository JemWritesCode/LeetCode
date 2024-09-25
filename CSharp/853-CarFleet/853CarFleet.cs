// SORT AND STACK
// Sort with two arrays will sort the first array but makes it so that the original correlations between the elements of the two arrays are preserved.
// you want to sort them by the position they're in first. this will be ascending.
//and then start from the end (cars closest to the finish line/target)
// Start at the end because cars will never pass each other.
// timings tell you how much time to get the rest of the way to target.
// if the newTiming is less than the top of stack you know that car will never catch up. so it'll be a diff fleet. 

// Time Complexity: O (n log n) (Analyze Complexity Confirmed)
// Because you have to sort the arrays.
// Space Complexity: O(n)(Analyze Complexity Confirmed)
// You have to make a stack to hold all the new timings, potentially one for each n number of cars.
public class Solution {
    public int CarFleet(int target, int[] position, int[] speed) {
        Stack<double> fleetTimings = new();
        Array.Sort(position, speed);
        for(int i = position.Length - 1; i >= 0; i--){
            double newTiming = (target - position[i]) / (double)speed[i];
            if (fleetTimings.Count == 0 || fleetTimings.Peek() < newTiming)
                fleetTimings.Push(newTiming);
        }
        return fleetTimings.Count;
    }
}
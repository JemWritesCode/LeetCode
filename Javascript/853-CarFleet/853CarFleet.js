/* Stack
* Time Complexity: O(n log n)
*   must go over every element in position and speed arrays to .map() them > O(n)
*   but then sorting is O(n log n), which becomes the dominating factor
* Space Complexity: O(n)
*   cars array must hold n cars

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = position.map((p, i) => [p, speed[i]]);
    cars.sort((a, b) => b[0] - a[0]);
    let fleets = 0;
    let lastTime = 0;
    for (const [p, s] of cars) {
        const time = (target - p) / s;
        if (time > lastTime) {
            fleets++;
            lastTime = time;
        }
    }
    return fleets;
};
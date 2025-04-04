You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]` represent the start and the end of the `i<sup>th</sup>` interval and `intervals` is sorted in ascending order by `start<sub>i</sub>`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `start<sub>i</sub>` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals` _after the insertion_.

**Note** that you don't need to modify `intervals` in-place. You can make a new array and return it.

**Example 1:**

```
<strong>Input:</strong> intervals = [[1,3],[6,9]], newInterval = [2,5]
<strong>Output:</strong> [[1,5],[6,9]]
```

**Example 2:**

```
<strong>Input:</strong> intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
<strong>Output:</strong> [[1,2],[3,10],[12,16]]
<strong>Explanation:</strong> Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

**Constraints:**

-   `0 <= intervals.length <= 10<sup>4</sup>`
-   `intervals[i].length == 2`
-   `0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>5</sup>`
-   `intervals` is sorted by `start<sub>i</sub>` in **ascending** order.
-   `newInterval.length == 2`
-   `0 <= start <= end <= 10<sup>5</sup>`
Given an integer array `nums` and an integer `k`, return _the_ `k<sup>th</sup>` _largest element in the array_.

Note that it is the `k<sup>th</sup>` largest element in the sorted order, not the `k<sup>th</sup>` distinct element.

Can you solve it without sorting?

**Example 1:**

```
<strong>Input:</strong> nums = [3,2,1,5,6,4], k = 2
<strong>Output:</strong> 5
```

**Example 2:**

```
<strong>Input:</strong> nums = [3,2,3,1,2,4,5,5,6], k = 4
<strong>Output:</strong> 4
```

**Constraints:**

-   `1 <= k <= nums.length <= 10<sup>5</sup>`
-   `-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>`
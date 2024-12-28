Given an integer array `nums`, find the

subarray

with the largest sum, and return _its sum_.

**Example 1:**

```
<strong>Input:</strong> nums = [-2,1,-3,4,-1,2,1,-5,4]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The subarray [4,-1,2,1] has the largest sum 6.
```

**Example 2:**

```
<strong>Input:</strong> nums = [1]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The subarray [1] has the largest sum 1.
```

**Example 3:**

```
<strong>Input:</strong> nums = [5,4,-1,7,8]
<strong>Output:</strong> 23
<strong>Explanation:</strong> The subarray [5,4,-1,7,8] has the largest sum 23.
```

**Constraints:**

-   `1 <= nums.length <= 10<sup>5</sup>`
-   `-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>`

**Follow up:** If you have figured out the `O(n)` solution, try coding another solution using the **divide and conquer** approach, which is more subtle.
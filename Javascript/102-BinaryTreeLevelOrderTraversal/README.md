Given the `root` of a binary tree, return _the level order traversal of its nodes' values_. (i.e., from left to right, level by level).

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)

```
<strong>Input:</strong> root = [3,9,20,null,null,15,7]
<strong>Output:</strong> [[3],[9,20],[15,7]]
```

**Example 2:**

```
<strong>Input:</strong> root = [1]
<strong>Output:</strong> [[1]]
```

**Example 3:**

```
<strong>Input:</strong> root = []
<strong>Output:</strong> []
```

**Constraints:**

-   The number of nodes in the tree is in the range `[0, 2000]`.
-   `-1000 <= Node.val <= 1000`
Given the `root` of a binary tree, return _the length of the **diameter** of the tree_.

The **diameter** of a binary tree is the **length** of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.

The **length** of a path between two nodes is represented by the number of edges between them.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/03/06/diamtree.jpg)

```
<strong>Input:</strong> root = [1,2,3,4,5]
<strong>Output:</strong> 3
<strong>Explanation:</strong> 3 is the length of the path [4,2,1,3] or [5,2,1,3].
```

**Example 2:**

```
<strong>Input:</strong> root = [1,2]
<strong>Output:</strong> 1
```

**Constraints:**

-   The number of nodes in the tree is in the range `[1, 10<sup>4</sup>]`.
-   `-100 <= Node.val <= 100`
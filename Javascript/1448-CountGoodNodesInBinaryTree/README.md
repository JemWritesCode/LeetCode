Given a binary tree `root`, a node _X_ in the tree is named **good** if in the path from root to _X_ there are no nodes with a value _greater than_ X.

Return the number of **good** nodes in the binary tree.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2020/04/02/test_sample_1.png)**

```
<strong>Input:</strong> root = [3,1,4,3,null,1,5]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Nodes in blue are <strong>good</strong>.
Root Node (3) is always a good node.
Node 4 -&gt; (3,4) is the maximum value in the path starting from the root.
Node 5 -&gt; (3,4,5) is the maximum value in the path
Node 3 -&gt; (3,1,3) is the maximum value in the path.
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2020/04/02/test_sample_2.png)**

```
<strong>Input:</strong> root = [3,3,null,4,2]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Node 2 -&gt; (3, 3, 2) is not good, because "3" is higher than it.
```

**Example 3:**

```
<strong>Input:</strong> root = [1]
<strong>Output:</strong> 1
<strong>Explanation:</strong> Root is considered as <strong>good</strong>.
```

**Constraints:**

-   The number of nodes in the binary tree is in the range `[1, 10^5]`.
-   Each node's value is between `[-10^4, 10^4]`.
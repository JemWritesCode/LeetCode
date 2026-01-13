// #region 1 -- Jan 12, 2026

class TrieNode {
  constructor(child = {}, end = false) {
    this.child = child;
    this.end = end;
  }
}

var Trie = function () {
  this.root = new TrieNode();
};

Trie.prototype.insert = function (word) {
  let current = this.root;
  for (const char of word) {
    if (!current.child[char]) {
      current.child[char] = new TrieNode();
    }
    current = current.child[char];
  }

  current.end = true;
};

Trie.prototype.search = function (word) {
  let current = this.root;
  for (const char of word) {
    if (current.child[char]) {
      current = current.child[char];
    } else {
      return false;
    }
  }
  return current.end;
};

Trie.prototype.startsWith = function (prefix) {
  let current = this.root;

  for (const char of prefix) {
    if (current.child[char]) {
      current = current.child[char];
    } else {
      return false;
    }
  }
  return true;
};

// #endregion

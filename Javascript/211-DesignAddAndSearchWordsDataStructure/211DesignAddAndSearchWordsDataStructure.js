function Node () {
    this.children = {};
    this.isWordEnding = false;
}

var WordDictionary = function() {
    this.root = new Node();
};

WordDictionary.prototype.addWord = function(word) {
    let currentNode = this.root;
    for (const char of word) {
        currentNode.children[char] = currentNode.children[char] || new Node();
        currentNode = currentNode.children[char];
    }
    currentNode.isWordEnding = true;
};

WordDictionary.prototype.search = function(word) {
    const searchHelper = (currentNode, i) => {
        if (i === word.length) return currentNode.isWordEnding;
        const char = word[i];
        if (char === '.') {
            for (const char of Object.keys(currentNode.children)) {
                const child = currentNode.children[char];
                if (searchHelper(child, i + 1)) return true;
            }
            return false
        } else {
            if (!(char in currentNode.children)) return false;
            return searchHelper(currentNode.children[char], i + 1)
        }
    }
    return searchHelper(this.root, 0)
};
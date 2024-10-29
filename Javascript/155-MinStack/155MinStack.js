/*
New things were optional chaining operator ?. and ?? Null Coalescing operator

Time complexity: everything is O(1) per the requirements

Space Complexity: O(n) to hold the stack.

*/

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var MinStack = function() {
    this.st = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let min_val = this.getMin();
    if(min_val === null || min_val > val)
        min_val = val;
    this.st.push([val, min_val]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.st.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.st.at(-1)?.[0] ?? null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.st.at(-1)?.[1] ?? null;
};


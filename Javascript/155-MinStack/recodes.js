// #region 1 -- Jan 2 2026

var MinStack = function () {
  this.st = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let minVal = this.getMin();
  if (minVal === null || minVal > val) minVal = val;
  this.st.push([val, minVal]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.st.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.st.at(-1)?.[0] ?? null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.st.at(-1)?.[1] ?? null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// #endregion

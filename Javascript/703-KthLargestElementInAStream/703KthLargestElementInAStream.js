class KthLargest {
    constructor(k, nums) {
        this.main = new MinPriorityQueue();
        this.size = k;
        for (let num of nums) 
            this.add(num);
    }
    add(val) {
        this.main.enqueue(val);
        if (this.main.size() > this.size) 
            this.main.dequeue();
        return this.main.front().element;
    }
}
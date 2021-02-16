
/**
 * Object for the Stack Data structure type
 * This uses Generic typing
 */
export class Stack<T> {

    /**
     * The array representing the data stored inside
     */
    private store: T[] = [];

    /**
     * Pushes value on top of the stack
     * @param val the value to place in the stack
     */
    push(val: T) {
        this.store.push(val);
    }

    /**
     * Removes and returns the item on the top of the stack
     */
    pop(): T {
        return this.store.pop();
    }

    /**
     * returns the item on the top of the stack without removing
     */
    peek(): T {
        return this.store[this.store.length - 1];
    }

    /**
     * returns the number of elements inside the stack
     */
    size(): number {
        return this.store.length;
    }

    /**
     * Removes all items within the stack
     */
    clear() {
        this.store = [];
    }
}
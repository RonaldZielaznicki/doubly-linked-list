/**
 * @template T
 */
export class DoublyLinkedNode<T> {
    /**
     * @param {T?} value
     * @param {DoublyLinkedNode<T>?} previous
     * @param {DoublyLinkedNode<T>?} next
     */
    constructor(value?: T | null, previous?: DoublyLinkedNode<T> | null, next?: DoublyLinkedNode<T> | null);
    /**
     * @type {DoublyLinkedNode<T>?}
     */
    previous: DoublyLinkedNode<T> | null;
    /**
     * @type {DoublyLinkedNode<T>?}
     */
    next: DoublyLinkedNode<T> | null;
    /**
     * @type {T?}
     */
    value: T | null;
    /**
     * Disposing of a node properly is important. If a node is deleted from a list,
     * a user should have some indication that a node is no longer valid
     * nor should a user be able to traverse into other inactive nodes or into the
     * active list.
     */
    dispose(): void;
}

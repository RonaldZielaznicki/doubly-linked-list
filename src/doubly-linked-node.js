/**
 * @template T
 */
export class DoublyLinkedNode {
  /**
   * @type {DoublyLinkedNode<T>?}
   */
  previous = null
  /**
   * @type {DoublyLinkedNode<T>?}
   */
  next = null
  /**
   * @type {T?}
   */
  value = null

  /**
   * @param {T?} value
   * @param {DoublyLinkedNode<T>?} previous
   * @param {DoublyLinkedNode<T>?} next
   */
  constructor(value = null, previous = null, next = null) {
    this.value = value
    this.previous = previous
    this.next = next
  }

  /**
   * Disposing of a node properly is important. If a node is deleted from a list,
   * a user should have some indication that a node is no longer valid
   * nor should a user be able to traverse into other inactive nodes or into the
   * active list.
   */
  dispose() {
    this.previous = null;
    this.next = null;
    this.value = null;
  }
}

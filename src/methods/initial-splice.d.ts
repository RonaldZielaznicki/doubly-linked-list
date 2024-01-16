/**
 * @param {DoublyLinkedList<T>} list
 * @param {DoublyLinkedNode<T>} start
 * @param {number} deleteCount
 * @param {Array<T>} values
 * @returns {Array<T>} deletedItems
 * @template T
 */
export function initialSplice<T>(list: DoublyLinkedList<T>, start: DoublyLinkedNode<T>, deleteCount: number, values: T[]): T[];
import { DoublyLinkedList } from "../doubly-linked-list.js";
import { DoublyLinkedNode } from '../doubly-linked-node.js';

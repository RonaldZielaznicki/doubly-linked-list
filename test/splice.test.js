import assert from 'node:assert/strict'
import test from 'node:test'
import LinkedList from 'doubly-linked-list'

test('LinkedList.prototype.splice()', async (t) => {
  let actual
  let index
  let input
  let linkedList

  t.beforeEach(() => {
    actual = null
    index = null
    input = null
    linkedList = null
  })

  await t.test('not initialized', async (t) => {
    await t.test('with no argument(s)', (t) => {
      linkedList = new LinkedList()
      linkedList.splice(null, 0)
    })

    await t.test('with one argument(s)', (t) => {
      input = ['a']
      linkedList = new LinkedList()
      linkedList.splice(linkedList.tail, 0, ...input)

      index = 0
      for (actual of linkedList) {
        assert.strictEqual(actual, input[index])
        index++
      }
    })

    await t.test('with multiple argument(s)', (t) => {
      input = ['a', 'b', 'c', 'd', 'e']
      linkedList = new LinkedList()
      linkedList.splice(linkedList.tail, 0, ...input)

      index = 0
      for (actual of linkedList) {
        assert.strictEqual(actual, input[index])
        index++
      }
    })
  })

  await t.test('initialized', async (t) => {
    await t.test('with no elements to insert', (t) => {
      linkedList = new LinkedList('a')
      linkedList.splice(linkedList.tail, 0)
    })

    await t.test('with one argument(s)', (t) => {
      input = ['a']
      linkedList = new LinkedList(...input)
      linkedList.splice(linkedList.tail, 0, ...input)

      index = 0
      for (actual of linkedList) {
        assert.strictEqual(actual, input[index % input.length])
        index++
      }
    })

    await t.test('with multiple argument(s)', (t) => {
      input = ['a', 'b', 'c', 'd', 'e']
      linkedList = new LinkedList(...input)
      linkedList.splice(linkedList.tail, 0, ...input)

      index = 0
      for (actual of linkedList) {
        assert.strictEqual(actual, input[index % input.length])
        index++
      }
    })
  })
})

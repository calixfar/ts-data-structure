import { INode } from '../interfaces'
import { Node } from './general-tree-node'

export class GeneralTree {
  root: INode

  constructor (node: INode) {
    this.root = node
  }
}

const node1 = new Node({ tag: 'div', id: 'node1' })
const node2 = new Node({ tag: 'div', id: 'node2' })
const node3 = new Node({ tag: 'button', id: 'node3' })
const node4 = new Node({ tag: 'form', id: 'node4' })
const node5 = new Node({ tag: 'a', id: 'node5' })
const node6 = new Node({ tag: 'input', id: 'node6' })

node1.push(node2)
node1.push(node3)
node2.push(node4)
node3.push(node5)
node4.push(node6)

const generalTree = new GeneralTree(node1)

console.log('return', generalTree.root.findByTag('a'))
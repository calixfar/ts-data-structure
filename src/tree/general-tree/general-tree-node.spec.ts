import { INodeMethods, Tag } from '../interfaces'
import { Node } from './general-tree-node'

describe('GeneralTreeNode', () => {
  it('should return the same node if the value to find makes match with any its own attributes', () => {
    const node = new Node({ tag: 'div' })

    expect(node.findByTag('div')).toEqual(node)
  })

  it('should return null if there is just one node and any attribute get matched with the valueto find', () => {
    const node = new Node({ tag: 'div' })

    expect(node.findByTag('form')).toBe(null)
  })

  it('should call find method with right parameters by the method called', () => {
    const node = new Node({ tag: 'div' })
    const mockedNode = jest.spyOn(node, 'find')
    const items = [
      { method: 'findByClass', parameters: ['node', 'class', true] }, 
      { method: 'findByTag', parameters: ['div', 'tag'] }, 
      { method: 'findById', parameters: ['node1', 'id'] }
    ]
    
    items.forEach((item) => {
      node[item.method as keyof Pick<INodeMethods, 'findById' | 'findByTag' | 'findByClass'>](item.parameters[0] as Tag)

      expect(mockedNode).toHaveBeenCalledWith(...item.parameters)
      expect(mockedNode).toHaveBeenCalledTimes(1)

      mockedNode.mockClear()
    })
  })
})
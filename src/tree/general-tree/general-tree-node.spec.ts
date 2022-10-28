import { INodeGenericMethods, INodeMethods, Tag } from '../interfaces'
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

  it('should return an array with the same node inside if any of findAll methods get called and if the value to find makes match with any its own attributes', () => {
    const node = new Node({ tag: 'div' })

    expect(node.findAllByTag('div')).toEqual([node])
  })

  it('should return an empty array if there is just one node and any attribute does not get matched with the value to find', () => {
    const node = new Node({ tag: 'div' })

    expect(node.findAllByTag('form')).toEqual([])
  })


  it('should call the right method with right parameters behind the scenes by the called method', () => {
    const node = new Node({ tag: 'div' })
    const items = [
      { method: 'findByClass', parameters: ['node', 'class', true], methodToCall: 'find' }, 
      { method: 'findByTag', parameters: ['div', 'tag'], methodToCall: 'find' }, 
      { method: 'findById', parameters: ['node1', 'id'], methodToCall: 'find' },
      { method: 'findAllByClass', parameters: ['node', 'class', true], methodToCall: 'findAll' },
      { method: 'findAllByTag', parameters: ['div', 'tag'], methodToCall: 'findAll' }
    ]
    
    items.forEach((item) => {
      const mockedNode = jest.spyOn(node, item.methodToCall as keyof INodeGenericMethods)
      node[item.method as keyof Pick<INodeMethods, 'findById' | 'findByTag' | 'findByClass'>](item.parameters[0] as Tag)

      expect(mockedNode).toHaveBeenCalledWith(...item.parameters)
      expect(mockedNode).toHaveBeenCalledTimes(1)

      mockedNode.mockClear()
    })
  })
})
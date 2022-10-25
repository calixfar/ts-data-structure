import { INode, INodeAttributes, Tag } from '../interfaces'

export class Node implements INode {
  tag: Tag
  id?: string
  class?: string
  children: INode[]
  
  constructor ({ id, tag, class: classAttribute }: INodeAttributes) {
    this.tag = tag
    this.children = []

    if (id) {
      this.id = id
    }

    if (classAttribute) {
      this.class = classAttribute
    }
  }

  push(node: INode) {
    this.children.push(node)
  }

  find(valueToMatch: string, attribute: keyof Required<INodeAttributes>, matchWithRegex: boolean = false) {
    const recursive = (): Node | null => {
      if (this[attribute] && matchWithRegex ? new RegExp(valueToMatch, 'ig').test((this[attribute] as string)) : this[attribute] === valueToMatch) {
        return this
      }
  
      if (!this.children.length) {
        return null
      }

      let foundNode = null
  
      for (const child of this.children) {
        foundNode = child.find(valueToMatch, attribute, matchWithRegex)

        if (foundNode) {
          break
        }
      }

      return foundNode
    }

    return recursive() || null
  }

  findByTag (tag: Tag) {
    return this.find(tag, 'tag')
  }

  findById (id: string) {
    return this.find(id, 'id')
  }

  findByClass (classAttribute: string) {
    return this.find(classAttribute, 'class', true)
  }
}
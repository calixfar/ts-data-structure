export type Tag = 'div' | 'p' | 'button' | 'input' | 'a' | 'form'

export interface INodeAttributes {
  id?: string
  class?: string
  tag: Tag
}

export type FindAllAllowedAttributes = keyof Pick<Required<INodeAttributes>, 'class' | 'tag'>

export interface INodeGenericMethods {
  find: (identifier: string, attribute: keyof Required<INodeAttributes>, matchWithRegex?: boolean) => INode | null
  findAll: (identifier: string, attribute: FindAllAllowedAttributes, matchWithRegex?: boolean) => INode[]
}

export interface INodeMethods extends INodeGenericMethods {
  push: (node: INode) => void
  findByTag: (tag: Tag) => INode | null
  findById: (identifier: string) => INode | null
  findByClass: (identifier: string) => INode | null
  findAllByClass: (identifier: string) => INode[]
  findAllByTag: (tag: Tag) => INode[]
}

export interface INode extends INodeAttributes, INodeMethods {
  children: INode[]
}
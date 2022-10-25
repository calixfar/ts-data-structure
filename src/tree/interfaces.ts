export type Tag = 'div' | 'p' | 'button' | 'input' | 'a' | 'form'

export interface INodeAttributes {
  id?: string
  class?: string
  tag: Tag
}

export interface INode extends INodeAttributes {
  children: INode[]
  push: (node: INode) => void
  find: (identifier: string, attribute: keyof Required<INodeAttributes>, matchWithRegex?: boolean) => INode | null
  findByTag: (tag: Tag) => INode | null
  findById: (identifier: string) => INode | null
  findByClass: (identifier: string) => INode | null
}
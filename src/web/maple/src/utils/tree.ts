interface ITreeNode {
  id: string;
  parentId? : string;
  children: Array<ITreeNode>; 
}


export class Tree {
  public static Composite(nodes: Array<ITreeNode>): Array<ITreeNode> {
    const roots = nodes.filter((node) => !node.parentId);
    for (const root of roots) {
      this.CompositeChildren(nodes, root);
    }
    return roots;
  }

  public static CompositeChildren(nodes: Array<ITreeNode>, parent: ITreeNode) {
    const children = nodes.filter(node => node.parentId === parent.id );
    if (children.length) {
      parent.children = children;
      children.forEach(child => this.CompositeChildren(nodes, child));
    }
  }
}
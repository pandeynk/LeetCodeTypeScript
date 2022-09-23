/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findLeaves(root: TreeNode | null): number[][] {
  const res: number[][] = [];

  const dfs: any = (node: TreeNode) => {
    if (!node) {
      return -1;
    }

    const distLeft = dfs(node.left);
    const distRight = dfs(node.right);
    const dist = Math.max(distLeft, distRight) + 1;

    if (res[dist]) {
      res[dist].push(node.val);
    } else {
      res[dist] = [node.val];
    }

    return dist;
  };

  dfs(root);

  return res;
}

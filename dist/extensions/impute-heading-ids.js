import { isHeading, isParent } from '@accuser/mdast-util-type-guards';
import GithubSlugger from 'github-slugger';
import { toString } from 'mdast-util-to-string';
const visit = (tree, guard, visitor) => {
    if (guard(tree)) {
        visitor(tree);
    }
    if (isParent(tree)) {
        for (const child of tree.children) {
            visit(child, guard, visitor);
        }
    }
};
export default (({ prefix } = {}) => ({
    transforms: [
        (root) => {
            const slugger = new GithubSlugger();
            visit(root, isHeading, (node) => {
                const text = toString(node.children);
                const slug = slugger.slug(text);
                const id = [prefix, slug].filter(Boolean).join('-');
                if (node.data) {
                    node.data.id = id;
                }
                else {
                    node.data = { id };
                }
            });
        }
    ]
}));

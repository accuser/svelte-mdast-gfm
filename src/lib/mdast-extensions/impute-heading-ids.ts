import { isHeading, isParent, type TypeGuard } from '@accuser/mdast-util-type-guards';
import GithubSlugger from 'github-slugger';
import type { Node } from 'mdast';
import type { Extension } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';

declare module 'mdast' {
	interface HeadingData {
		id: string;
	}
}

const visit = <T extends Node>(tree: Node, guard: TypeGuard<T>, visitor: (node: T) => void) => {
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
				} else {
					node.data = { id };
				}
			});
		}
	]
})) satisfies (options?: { prefix?: string }) => Extension;

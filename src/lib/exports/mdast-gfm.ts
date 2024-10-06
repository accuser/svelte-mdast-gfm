import Heading from '$lib/components/Heading.svelte';
import ListItem from '$lib/components/ListItem.svelte';
import imputeHeadingIds from '$lib/mdast-extensions/impute-heading-ids.js';
import type { Components } from '@accuser/svelte-unist';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { gfm } from 'micromark-extension-gfm';

declare module '@accuser/svelte-unist' {
	export interface ComponentMap {
		heading: typeof Heading;
		listItem: typeof ListItem;
	}
}

export const components: Components = {
	heading: Heading,
	listItem: ListItem
};

export const extensions: import('micromark-util-types').Extension[] = [gfm()];

export const mdastExtensions: (
	| import('mdast-util-from-markdown').Extension
	| import('mdast-util-from-markdown').Extension[]
)[] = [gfmFromMarkdown(), imputeHeadingIds()];

import { Heading } from './heading/index.js';
import { ListItem } from './list-item/index.js';

export const components = {
	heading: Heading,
	listItem: ListItem
} satisfies import('@accuser/svelte-unist').Components;

export * from './heading/index.js';
export * from './list-item/index.js';

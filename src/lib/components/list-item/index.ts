declare module '@accuser/svelte-unist' {
	interface ComponentMap {
		listItem: import('mdast').ListItem;
	}
}

export { default as ListItem } from './list-item.svelte';

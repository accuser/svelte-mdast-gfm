import Heading from '$lib/components/Heading.svelte';
import ListItem from '$lib/components/ListItem.svelte';
import type { Components } from '@accuser/svelte-unist';

export default {
	heading: Heading,
	listItem: ListItem
} satisfies Components<import('mdast').Heading | import('mdast').ListItem>;

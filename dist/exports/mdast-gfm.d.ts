import Heading from '../components/Heading.svelte';
import ListItem from '../components/ListItem.svelte';
import type { Components } from '@accuser/svelte-unist';
declare module '@accuser/svelte-unist' {
    interface ComponentMap {
        heading: typeof Heading;
        listItem: typeof ListItem;
    }
}
export declare const components: Components;
export declare const extensions: import('micromark-util-types').Extension[];
export declare const mdastExtensions: (import('mdast-util-from-markdown').Extension | import('mdast-util-from-markdown').Extension[])[];

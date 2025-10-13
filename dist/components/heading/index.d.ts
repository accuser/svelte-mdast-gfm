declare module '@accuser/svelte-unist' {
    interface ComponentMap {
        heading: import('mdast').Heading;
    }
}
export { default as Heading } from './heading.svelte';

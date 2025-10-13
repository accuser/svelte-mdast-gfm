<script lang="ts">
	import { Node } from '@accuser/svelte-unist';

	let { node }: { node: import('mdast').ListItem } = $props();

	let { checked, children, spread } = $derived(node);
</script>

<li>
	{#if typeof checked === 'boolean'}<input type="checkbox" {checked} disabled />{/if}
	{#each children as child}<Node node={child} />{/each}
</li>

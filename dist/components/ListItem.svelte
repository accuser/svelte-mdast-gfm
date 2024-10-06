<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import type { ListItem } from 'mdast';

	let { checked, children, spread }: ListItem = $props();
</script>

<li>
	{#if typeof checked === 'boolean'}<input type="checkbox" {checked} disabled />{/if}
	{#each children as node}<Node {...node} />{/each}
</li>

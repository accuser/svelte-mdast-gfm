<script lang="ts">
	import { Node } from '@accuser/svelte-unist';

	let { node }: { node: import('mdast').Heading } = $props();

	let { children, data, depth } = $derived(node);

	let id = $derived(data?.id);
	let tag = $derived(`h${depth}`);
</script>

<svelte:element this={tag} {id}
	>{#each children as child}<Node node={child} />{/each}</svelte:element
>

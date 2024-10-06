<script lang="ts">
	import { gfmComponents, gfmExtensions, gfmMdastExtensions } from '$lib/index.js';
	import { Mdast } from '@accuser/svelte-mdast';
	import { fromMarkdown } from 'mdast-util-from-markdown';

	let src = '# Hello, world!';

	const extensions = Object.values({ ...gfmExtensions });
	const mdastExtensions = Object.values({ ...gfmMdastExtensions });

	let ast = $derived.by(() => fromMarkdown(src, { extensions, mdastExtensions }));
</script>

<Mdast {ast} components={gfmComponents} />

---
title: Frontmatter
intro: Retrieve frontmatter from Markdown files.
---

The frontmatter is retrievable through the `getFrontmatter()` function, which itself is accessible through the `getMarkdownContext()` object.

## Example

```svelte ./+page.svelte
<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import type { PageData } from './$types.js';
	import Article from './Article.svelte';
	import Code from './Code.svelte';

	const { data }: { data: PageData } = $props();

	let src = $state(data.src);
</script>

<Markdown {src} components={{ code: Code, root: Article }} />

```

```svelte ./Artilce.svelte
<script lang="ts" module>
	export type Props = import('mdast').Root;
</script>

<script lang="ts">
	import Node from '$lib/components/Node.svelte';
	import { getMarkdownContext } from '$lib/index.js';

	const { getFrontmatter } = getMarkdownContext();

	const { children }: Props = $props();

	let frontmatter = $derived.by(() => getFrontmatter());
	let { intro, title } = $derived(frontmatter);
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	<h1>{title}</h1>
	<p class="lead">{intro}</p>
	<hr />
	<pre><code>{JSON.stringify(frontmatter, undefined, 4)}</code></pre>
	<hr />
	<main>
		{#each children as node}
			<Node {...node} />
		{/each}
	</main>
</article>
```

```svelte ./Code.svelte
<script lang="ts" module>
	export type Props = import('mdast').Code;
</script>

<script lang="ts">
	let { lang, meta, value }: Props = $props();
</script>

<figure>
	<figcaption><code>{meta ?? lang}</code></figcaption>
	<pre><code {lang} data-meta={meta}>{value}</code></pre>
</figure>
```
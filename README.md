# Svelte Unist

Transform [Mdast](https://github.com/syntax-tree/mdast) into Svelte components.

## Installing

Add the `@accuser/svelte-hast` package dependency to your [Svelte](https://svelte.dev) / [SvelteKit](https://kit.svelte.dev) project:

```sh
npm install --save-dev @accuser/svelte-mdast
```

## Usage

```svelte
<script lang="ts">
	import { Mdast } from '@accuser/Mdast.svelte';
	import { u } from 'unist-builder';

	const ast: import('mdast').Root = u('root', [
		u('heading', { depth: 1 as const }, [u('text', 'Hello, World!')]),
	]);
</script>

<Mdast {ast} />
```

## Test

```sh
npm test
```

## License

[MIT](LICENSE)

## Copyright

Copyrigth &copy; 2024 [Matthew Gibbons](https://github.com/accuser)
import type { Extensions } from '@accuser/svelte-mdast';
import { gfm } from 'micromark-extension-gfm';

declare module '@accuser/svelte-mdast' {
	export interface ExtensionMap {
		gfm: ReturnType<typeof gfm>;
	}
}

export default { gfm: gfm() } satisfies Extensions;

import imputeHeadingIds from '$lib/extensions/impute-heading-ids.js';
import type { MdastExtensions } from '@accuser/svelte-mdast';
import { gfmFromMarkdown } from 'mdast-util-gfm';

declare module '@accuser/svelte-mdast' {
	export interface MdastExtensionMap {
		gfmFromMarkdown: ReturnType<typeof gfmFromMarkdown>;
		imputeHeadingIds: ReturnType<typeof imputeHeadingIds>;
	}
}

export default {
	gfmFromMarkdown: gfmFromMarkdown(),
	imputeHeadingIds: imputeHeadingIds()
} satisfies MdastExtensions;

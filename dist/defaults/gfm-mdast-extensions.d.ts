import imputeHeadingIds from '../extensions/impute-heading-ids.js';
import { gfmFromMarkdown } from 'mdast-util-gfm';
declare module '@accuser/svelte-mdast' {
    interface MdastExtensionMap {
        gfmFromMarkdown: ReturnType<typeof gfmFromMarkdown>;
        imputeHeadingIds: ReturnType<typeof imputeHeadingIds>;
    }
}
declare const _default: {
    gfmFromMarkdown: Partial<import("mdast-util-from-markdown/lib").Config>[];
    imputeHeadingIds: {
        transforms: ((root: import("mdast").Root) => void)[];
    };
};
export default _default;

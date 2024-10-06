import { gfm } from 'micromark-extension-gfm';
declare module '@accuser/svelte-mdast' {
    interface ExtensionMap {
        gfm: ReturnType<typeof gfm>;
    }
}
declare const _default: {
    gfm: import("micromark-util-types").Extension;
};
export default _default;

declare module 'mdast' {
    interface HeadingData {
        id: string;
    }
}
declare const _default: ({ prefix }?: {
    prefix?: string;
} | undefined) => {
    transforms: ((root: import("mdast").Root) => void)[];
};
export default _default;

import Heading from '../components/Heading.svelte';
import ListItem from '../components/ListItem.svelte';
import imputeHeadingIds from '../mdast-extensions/impute-heading-ids.js';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { gfm } from 'micromark-extension-gfm';
export const components = {
    heading: Heading,
    listItem: ListItem
};
export const extensions = [gfm()];
export const mdastExtensions = [gfmFromMarkdown(), imputeHeadingIds()];

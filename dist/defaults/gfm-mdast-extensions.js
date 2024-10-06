import imputeHeadingIds from '../extensions/impute-heading-ids.js';
import { gfmFromMarkdown } from 'mdast-util-gfm';
export default {
    gfmFromMarkdown: gfmFromMarkdown(),
    imputeHeadingIds: imputeHeadingIds()
};

import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Heading from './Heading.svelte';
describe('Heading.svelte', async () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    for (const depth of [1, 2, 3, 4, 5, 6]) {
        const it = test.extend({
            props: {
                type: 'heading',
                children: [
                    {
                        type: 'text',
                        value: 'Hello, World!'
                    }
                ],
                data: {
                    id: 'hello-world'
                },
                depth
            }
        });
        it(`renders <h${depth}>`, async ({ props }) => {
            mount(Heading, { props, target: document.body });
            expect(document.body.querySelector(`h${depth}`)).toBeInTheDocument();
        });
        it(`renders <h${depth}> with \`id\` attibute`, async ({ props }) => {
            mount(Heading, { props, target: document.body });
            expect(document.body.querySelector(`h${depth}`)).toHaveAttribute('id', 'hello-world');
        });
        it(`renders <h${depth}> with content`, async ({ props }) => {
            mount(Heading, { props, target: document.body });
            expect(document.body.querySelector(`h${depth}`)).toHaveTextContent('Hello, World!');
        });
    }
});

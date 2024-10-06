import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import ListItem from './ListItem.svelte';
describe('Heading.svelte', async () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    describe('without `checked` prop', async () => {
        const it = test.extend({
            props: {
                type: 'listItem',
                children: [
                    {
                        type: 'paragraph',
                        children: [
                            {
                                type: 'text',
                                value: 'Hello, World!'
                            }
                        ]
                    }
                ]
            }
        });
        it('renders <li>', async ({ props }) => {
            mount(ListItem, { props, target: document.body });
            expect(document.body.querySelector(`li`)).toBeInTheDocument();
        });
        it('renders <li> without <input type="checkbox">', async ({ props }) => {
            mount(ListItem, { props, target: document.body });
            expect(document.body.querySelector(`li > input[type='checkbox']`)).not.toBeInTheDocument();
        });
        it('renders <li> with content', async ({ props }) => {
            mount(ListItem, { props, target: document.body });
            expect(document.body.querySelector(`li`)).toHaveTextContent('Hello, World!');
        });
    });
    describe('with `checked` prop', async () => {
        for (const checked of [false, true]) {
            const it = test.extend({
                props: {
                    type: 'listItem',
                    children: [
                        {
                            type: 'paragraph',
                            children: [{ type: 'text', value: 'Hello, World!' }]
                        }
                    ],
                    checked
                }
            });
            it('renders <li>', async ({ props }) => {
                mount(ListItem, { props, target: document.body });
                expect(document.body.querySelector(`li`)).toBeInTheDocument();
            });
            it('renders <li> with <input type="checkbox">', async ({ props }) => {
                mount(ListItem, { props, target: document.body });
                expect(document.body.querySelector(`li > input[type='checkbox']`)).toBeInTheDocument();
            });
            it('renders <li> with <input type="checkbox"> and `disabled` attribute`', async ({ props }) => {
                mount(ListItem, { props, target: document.body });
                expect(document.body.querySelector(`li > input[type='checkbox']`)).toHaveAttribute('disabled');
            });
            it('renders <li> with content', async ({ props }) => {
                mount(ListItem, { props, target: document.body });
                expect(document.body.querySelector(`li`)).toHaveTextContent('Hello, World!');
            });
        }
    });
});

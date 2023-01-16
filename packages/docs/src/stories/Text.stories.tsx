import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react'

export default {
    title: "Typography/Text",
    component: Text,

    args: {
        children: ('loremcvxcvxcvxcxcjvxjcv oxcmioxczoxc z o sana aosnodasdnosndoasndion n ndsaond'),
    },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong',
    }
};


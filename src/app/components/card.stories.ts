import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { CardComponent } from './card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
export default {
  component: CardComponent,
  title: 'Card',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
    componentWrapperDecorator(
        (story) => `<div style="margin: 3em; ">${story}</div>`
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'twitter',
      values: [
        { name: 'twitter', value: '#00aced' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
    }
} as Meta;

export const actionsData = {
  
};

const Template: Story = (args) => ({
  props: {
    ...args
  },
});

export const Report = Template.bind({});
Report.args = {
    card: {
        line1: 'Gartner® Report',
        line2: 'Pure Storage Is Named A Leader—Again',
        line3: 'In the 2022 Gartner® Magic Quadrant™ for Distributed File Systems and Object Storage.',
        button: 'Get the Report'
    },
};

export const LearnMore = Template.bind({});
LearnMore.args = {
    card: {
        line1: 'Pure Saves Energy',
        line2: 'Storage Optimized for Performance and Efficiency',
        line3: 'Save up to 80% on your data storage energy costs with Pure Storage.',
        button: 'Learn more'
    },
};

export const OnDemand = Template.bind({});
OnDemand.args = {
    card: {
        line1: 'On Demand',
        line2: 'Pure//Accelerate® techfest22',
        line3: 'Didn’t make the event or want to see it again? Catch up on keynotes, breakout sessions—on demand.',
        button: 'Watch Now'
    },
};
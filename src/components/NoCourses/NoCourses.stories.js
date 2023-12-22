import { withRouter } from 'storybook-addon-react-router-v6';
import NoCourses from './NoCourses';

export default {
  title: 'Workflow/NoCourses',
  component: NoCourses,
  decorators: [withRouter],
  tags: ['autodocs'],
};

export const Primary = {};

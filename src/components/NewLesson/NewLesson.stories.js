import { withRouter } from 'storybook-addon-react-router-v6';
import NewLessons from './NewLesson';

export default {
  title: 'Workflow/NewLessons',
  component: NewLessons,
  decorators: [withRouter],
  tags: ['autodocs'],
};

export const Primary = {};

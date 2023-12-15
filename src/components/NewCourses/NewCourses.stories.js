import { withRouter } from 'storybook-addon-react-router-v6';
import NewCourses from './NewCourses';

export default {
  title: 'Workflow/NewCourses',
  component: NewCourses,
  decorators: [withRouter],
  tags: ['autodocs'],
};

export const Primary = {};

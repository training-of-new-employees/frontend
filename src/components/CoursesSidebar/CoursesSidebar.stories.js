import { withRouter } from 'storybook-addon-react-router-v6';
import CoursesSidebar from './CoursesSidebar';

export default {
  title: 'Workflow/CoursesSidebar',
  component: CoursesSidebar,
  decorators: [withRouter],
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    isAdmin: false,
  },
};

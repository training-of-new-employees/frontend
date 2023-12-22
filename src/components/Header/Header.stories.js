import { withRouter } from 'storybook-addon-react-router-v6';
import Header from './Header';

export default {
  title: 'Workflow/Header',
  component: Header,
  decorators: [withRouter],
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    isAdmin: false,
  },
};

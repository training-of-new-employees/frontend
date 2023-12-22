import { withRouter } from 'storybook-addon-react-router-v6';
import Profile from './Profile';

export default {
  title: 'Workflow/Profile',
  component: Profile,
  decorators: [withRouter],
  tags: ['autodocs'],
};

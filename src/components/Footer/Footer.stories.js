import { withRouter } from 'storybook-addon-react-router-v6';
import Footer from './Footer';

export default {
  title: 'Workflow/Footer',
  component: Footer,
  decorators: [withRouter],
  tags: ['autodocs'],
};

export const Primary = {
  args: {},
};

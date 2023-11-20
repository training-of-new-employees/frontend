import { withRouter } from 'storybook-addon-react-router-v6';
import App from './App';

export default {
	title: 'Workflow/App',
	component: App,
	decorators: [withRouter],
	render: () => <App />,
	tags: ['autodocs'],
};

export const Primary = {
	args: {},
};

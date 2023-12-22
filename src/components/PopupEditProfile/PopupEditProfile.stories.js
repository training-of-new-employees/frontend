import PopupEditProfile from './PopupEditProfile';

export default {
  title: 'Workflow/PopupEditProfile',
  component: PopupEditProfile,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    isOpen: false,
    onClose: () => null,
  },
};

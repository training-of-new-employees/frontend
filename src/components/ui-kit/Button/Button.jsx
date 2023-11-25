import { string } from 'prop-types';

export default function Button({ buttonText }) {
  return <button type="button">{buttonText}</button>;
}

Button.propTypes = {
  buttonText: string.isRequired,
};

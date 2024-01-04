import { string } from 'prop-types';
import { ReactComponent } from '../../../../images/ui/Icon.svg';

export default function ButtonFilled({ buttonText }) {
  return (
    <button  type="button">
      <ReactComponent />
      {buttonText}
    </button>
  );
}

ButtonFilled.propTypes = {
  buttonText: string.isRequired,
};

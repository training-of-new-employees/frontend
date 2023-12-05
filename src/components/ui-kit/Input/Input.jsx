import { string } from 'prop-types';
import { EMAIL_REGEX } from '../../../utils/constants';
import inputStyles from './Input.module.scss'


export default function Input({name, placeholder}) {
  
  return (
    <>
    <input
      className={inputStyles.inputText}
      name={name}
      type={(name === 'Password') ? 'password' : 'text'}
      pattern={(name === 'email') ? EMAIL_REGEX : ''} 
      placeholder={placeholder}
      />
      <span className={inputStyles.inputError}>error;</span></>
    );

}

Input.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
};

import { NAME_REGEX } from '../../../utils/constants'
import inputNameStyles from './InputName.module.scss'


export default function InputName({ name, placeholder, onChange }) {

    return (
        <div className={inputNameStyles.inputContainer}>
            <label className={inputNameStyles.inputLable}  />
            <input className={inputNameStyles.inputText}
                type='text'
                name={name}
                pattern={NAME_REGEX}
                placeholder={placeholder}
                onChange={handleChangeValues} />
        </div>
    )
}
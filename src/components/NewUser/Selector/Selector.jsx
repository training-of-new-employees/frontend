/* eslint-disable react/forbid-prop-types */
import AsyncSelect from 'react-select/async';
import { useEffect, useState } from 'react';
import { func, object, objectOf } from 'prop-types';
import { fetchPositions } from '../../../services/positions/PositionsApi';
import './Selector.css';

const Select = ({ setNewUser, newUser }) => {
  const [professions, setProfessions] = useState([]);

  useEffect(() => {
    fetchPositions().then((res) => {
      const keyValues = res.map((position) => {
        const newObjProffesion = {
          companyId: position.company_id,
          value: position.name,
          label: position.name,
        };
        return newObjProffesion;
      });
      setProfessions(keyValues);
    });
  }, []);

  return (
    <AsyncSelect
      placeholder="Выберите подходящую должность"
      cacheOptions
      onChange={(value) =>
        setNewUser({
          ...newUser,
          company_id: value.companyId,
        })
      }
      defaultOptions={professions}
      classNamePrefix="react-select"
      className="react-select-container"
    />
  );
};
export default Select;
Select.propTypes = {
  setNewUser: func,
  newUser: object,
};

Select.defaultProps = {
  setNewUser: func,
  newUser: object,
};

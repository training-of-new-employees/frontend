import AsyncSelect from 'react-select/async';
import { fetchPositions } from '../../../services/positions/PositionsApi';
import './Selector.css';

export const professions = [
  { name: 'Admin', label: 'Admin' },
  { name: 'Engineer', label: 'Engineer' },
  { name: 'Doctor', label: 'Doctor' },
  { name: 'Seller', label: 'Seller' },
  { name: 'DJ', label: 'DJ' },
  { name: 'Florist', label: 'Florist' },
];
const filterColors = (inputValue) =>
  professions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export const Select = () => (
  <AsyncSelect
    placeholder="Выберите подходящую должность"
    cacheOptions
    defaultOptions
    loadOptions={promiseOptions}
    classNamePrefix="react-select"
    className="react-select-container"
  />
);
fetchPositions().then((res) => {
  const keyValues = res.map((object) => object.key);
  console.log(keyValues);
});
const keyValues = professions.map((object) => object.name);
console.log(keyValues);

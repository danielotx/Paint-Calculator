import PropTypes from 'prop-types';
import { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [windows, setWindows] = useState('');
  const [doors, setDoors] = useState('');
  const [areas, setAreas] = useState([]);
  const [isDisabled, setDisable] = useState(false);
  const [calculateButton, setCalcButton] = useState(true);
  const [apiData, setApiData] = useState();

  const contextValue = {
    width,
    setWidth,
    height,
    setHeight,
    windows,
    setWindows,
    doors,
    setDoors,
    areas,
    setAreas,
    isDisabled,
    setDisable,
    calculateButton,
    setCalcButton,
    apiData,
    setApiData,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Provider;

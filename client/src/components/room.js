import { useContext, useEffect } from 'react';
import Context from '../context/Context';
import sendAreas from '../service/fetchApi';
import Wall from './wall';
import './room.css';

function Room() {
  const { areas, 
    calculateButton, 
    setCalcButton,
    apiData,
    setApiData,
  } = useContext(Context);

  useEffect(() => {
    if (areas.length === 4) setCalcButton(false);
  }, [areas, apiData]);

  const fetchApi = async (areas) => {
    const data = await sendAreas(areas);   
    setApiData(data)
  };

  const resultBoard =  () => {
    if (apiData) {
      return (
        <div id="divResult">
          <span>Area: { apiData.area } m²</span>
          <span>Liters: { apiData.liters } L</span>
          <h4> Quantity Needed:  </h4>
          {  apiData.cans.map((item, index) => {
            return <span key={index}>{ Object.keys(item) }L : { Object.values(item) } can(s)</span>
          })}
        </div>
      )}
  };


  return (
    <>
      <Wall />
      <div id='calculate'>
        <button
          id='calculateBtn'
          disabled={calculateButton}
          onClick={() => fetchApi(areas)}
        >
          Calculate
        </button>
      </div> 
      { resultBoard() }
    </>
  );
}

export default Room;

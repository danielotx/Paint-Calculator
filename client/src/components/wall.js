import { useContext, useEffect } from 'react';
import Context from '../context/Context';
import Calculate from '../utils/calculate';
import './wall.css';

function Wall() {
  const {
    setWidth,
    width,
    setHeight,
    height,
    setWindows,
    windows,
    setDoors,
    doors,
    areas,
    setAreas,
    setDisable,
    isDisabled,
    setCalcButton,
    setApiData,
  } = useContext(Context);

  useEffect(() => {
    if (areas.length === 4) {
      setDisable(true);
    }
  }, [areas]);

  const submitArea = async () => {
    const result = Calculate(width, height, windows, doors);
    if (areas.length === 4) {
      setDisable(true);
    }
    if (result) setAreas([...areas, result]);
  };

  const wallNumber = () => {
    if (isDisabled) return <p>Done</p>;
    return <p id='wallNumber'>{`Wall: ${areas.length + 1}`}</p>;
  };

  const reset = () => {
    setAreas([]);
    setDisable(false);
    setCalcButton(true);
    setApiData();
    setWidth('');
    setHeight('');
    setWindows('');
    setDoors('');
  };

  return (
    <>
      <div className='size-entries'>
        {wallNumber()}
        <input
          type='number'
          placeholder='Width'
          onChange={({ target }) => setWidth(target.value)}
          value={width}
        />
        <input
          type='number'
          placeholder='Height'
          onChange={({ target }) => setHeight(target.value)}
          value={height}
        />
      </div>
      <div className='windows-doors'>
        <input
          type='number'
          placeholder='Window'
          onChange={({ target }) => setWindows(target.value)}
          value={windows}
        />
        <input
          type='number'
          placeholder='Door'
          onChange={({ target }) => setDoors(target.value)}
          value={doors}
        />
      </div>
      <div id='btn'>
        <button
          type='submit'
          onClick={() => submitArea()}
          disabled={isDisabled}
        >
          Next
        </button>
        <button type='button' onClick={() => reset()}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Wall;

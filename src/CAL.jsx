import React, { useState } from "react";


function CAL() {
  const [value, setValue] = useState('');

  const handleButtonClick = (buttonValue) => {
    setValue((prevValue) => prevValue + buttonValue);
  };

  const handleCalculate = () => {
    try {
      // Use the eval function to perform the calculation
      setValue(eval(value).toString());
    } catch (error) {
      // Handle any errors that may occur during the calculation
      setValue('Error');
    }
  };

  return (
    <>
      <div className='calculator'>
        {/* <form action=""></form> */}
        <input type="text" value={value} readOnly />

        <div>
          <input type='button' value='AC' onClick={() => setValue('')} />
          <input type='button' value='DE' onClick={() => setValue(value.slice(0, -1))} />
          <input type='button' value='.' onClick={() => handleButtonClick('.')} />
        </div>

        <div>
          <input type='button' value='7' onClick={() => handleButtonClick('7')} />
          <input type='button' value='8' onClick={() => handleButtonClick('8')} />
          <input type='button' value='9' onClick={() => handleButtonClick('9')} />
          <input type='button' value='*' onClick={() => handleButtonClick('*')} />
        </div>

        <div>
          <input type='button' value='4' onClick={() => handleButtonClick('4')} />
          <input type='button' value='5' onClick={() => handleButtonClick('5')} />
          <input type='button' value='6' onClick={() => handleButtonClick('6')} />
          <input type='button' value='+' onClick={() => handleButtonClick('+')} />
        </div>

        <div>
          <input type='button' value='1' onClick={() => handleButtonClick('1')} />
          <input type='button' value='2' onClick={() => handleButtonClick('2')} />
          <input type='button' value='3' onClick={() => handleButtonClick('3')} />
          <input type='button' value='-' onClick={() => handleButtonClick('-')} />
        </div>

        <div>
          <input type='button' value='0' onClick={() => handleButtonClick('0')} />
          <input type='button' value='=' onClick={handleCalculate} />
        </div>
      </div>
    </>
  );
}

export default CAL;

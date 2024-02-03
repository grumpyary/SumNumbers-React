import { Fragment, useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [result, setResult] = useState(0);

  function add() {
    console.log(numbers)

    setNumbers([...numbers, value]);
    setValue("");
  }

  function calculate() {
    let count = 0

    for (let index = 0; index < numbers.length; index++) {
      count = count + Number(numbers[index])
    }

    setResult(count)
  }

  function clean() {
      setNumbers([]);
      setValue("");
      setResult(0)

     }


  return (    
    
    <div className='container'>

        <span className='title'>YEAH SUM NUMBERS</span>

      <Fragment>
        <div className='buttons'>
      <input type="text" placeholder='Type here' className='input'
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}/>

      <button className='plus' onClick={add}>+</button>

      <button className='calc' onClick={calculate}>Calculate</button>
        </div>
      </Fragment>

      <Fragment>
      <div style={{ display: 'flex', gap: "4px" }} className='numbers'>
        {numbers.map((item, index, currentArray) => (

          <div key={index}>
            <span>{item}</span>
            {currentArray.length - 1 !== index && <span> + </span>}
          </div>
         
        ))}

        {result > 0 && <span>=</span>}
        {result > 0 && <span className='result'>{result}</span>}
      </div>
      </Fragment>

      <span className='clear'>
        <button onClick={clean}>Clear</button>
      </span>
    
    </div>
    
  );
}

export default App

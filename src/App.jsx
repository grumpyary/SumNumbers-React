import { useState } from 'react'
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
    <div>
      <input type="text"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}/>

      <button onClick={add}>+</button>

      <button onClick={calculate}>Calculate</button>
      <div style={{ display: 'flex', gap: "4px" }} >
        {numbers.map((item, index, currentArray) => {
          <div key={index}>
            <span>{item}</span>
            {currentArray.length - 1 !== index && <span> + </span>}
          </div>
        })}

        {result > 0 && <span>=</span>}
        {result > 0 && <span>{result}</span>}
      </div>

      <div>
        <button onClick={clean}>Clean</button>
      </div>
    </div>
  )
}

export default App

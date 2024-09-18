import RegisterForm from './Hooks2';

import { useState } from 'react';

function App() {
  const [inputText, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={() => setText('hello')}>
        Reset
      </button>


      <br></br>
      <br></br>
      <br></br>
      <br></br>



      <RegisterForm />
    </>
  );
}

export default App;
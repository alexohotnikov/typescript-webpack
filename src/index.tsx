import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface AppProps  {
  name: string,
  age: number
}

const App = ({name, age}) => {
  return(
    <p> Hello {name}. You age is {age}</p>
  )
}

ReactDOM.render(<App name="Aleks" age="10"/>, document.querySelector('#root'))
import * as React from 'react';
import './app.scss';

export interface AppProps {
  name?: string,
  age?: string
}

export class App extends React.Component<AppProps> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1> Hello, {this.props.name} </h1>
    )
  }
}
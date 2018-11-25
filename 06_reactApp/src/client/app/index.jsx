import React from 'react';
import {render} from 'react-dom';

import TextBuilder from './TextBuilder.jsx';
import LabelBuilder from './LabelBuilder.jsx';
import MyReactForm from './MyReactForm.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <p><h1> Hello React Project</h1></p>
		<LabelBuilder labelName='zadanie 6.a' />
		<TextBuilder input='Zadanie 6.b Lorem Ipsum.......' />
		<MyReactForm/>
      </div>
    );
  }
}


render(<App/>, document.getElementById('app'));
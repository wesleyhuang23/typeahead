import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Master from './../styles/master.scss';

class App extends React.Component{
    render(){
        return (
            <div className="app">
                <h1>Typeahead</h1>
                <input type="text" placeholder="search..."/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
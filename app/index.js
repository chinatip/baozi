import React from 'react';
import ReactDOM from 'react-dom';

import { getVocabs } from './parser';

import './index.scss';

class App extends React.Component {
    render(){
        const vocab = getVocabs();
        return(
            <div className="class">Baozii Project</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
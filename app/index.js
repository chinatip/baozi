import React from 'react';
import ReactDOM from 'react-dom';

import VocabList from './VocabList';

import './reset.scss';
import './index.scss';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <VocabList />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
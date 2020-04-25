import React from 'react';
import ReactDOM from 'react-dom';

import VocabList from './util/VocabList';

import './reset.scss';
import './index.scss';
import Menu from './common/Menu';

class App extends React.Component {
    render() {
        const pageState = 'default';
        const changePage = (page) => {
            pageState = page;
        };

        return (
            <div className="app">
                <Menu changePage={changePage} pageState />
                <VocabList />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
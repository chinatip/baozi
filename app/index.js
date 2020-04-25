import React from 'react';
import ReactDOM from 'react-dom';

import VocabList from './util/VocabList';

import './reset.scss';
import './index.scss';
import Menu from './common/Menu';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageState: 'Vocabulary',
        }
    }
    render() {
        const changePage = (page) => this.setState({ pageState: page });

        return (
            <div className="app">
                <Menu changePage={changePage} pageState={this.state.pageState} />
                <VocabList />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
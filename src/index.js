import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { HashRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App/>
    </Router>
    ,document.getElementById('root')
)
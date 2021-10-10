import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main isExt={false}/>, document.getElementById('root'));
registerServiceWorker();

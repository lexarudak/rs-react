import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/appRouter/appRouter';
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(BrowserRouter, null,
                React.createElement(AppRouter, null))));
    }
}
export default App;

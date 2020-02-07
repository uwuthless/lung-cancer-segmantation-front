import React from "react";
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import reducers from './reduxStuff/redurers'
import thunk from 'redux-thunk';
import history from './history'
import {
    Router as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import ListDicomComponent from "./components/ListDicomComponent";
import Header from "./components/Header";
import ViewDicom from "./components/ViewDicom";
import CreateDicom from "./components/CreateDicom";

const App = () => {
    return (
        <Provider store={createStore(reducers,applyMiddleware(thunk) )}>
        <Router history={history}>
            <Header/>
            <Route path = '/' exact component = {ListDicomComponent} />
            <Route path = '/dicom/create' component={CreateDicom} />
            <Route path='/dicom/view/:id' component={ViewDicom} />
        </Router>
        </Provider>
    );
};

export default App;

import * as React from "react";
import './app.scss'
import store from "../../store";
import {Provider} from "react-redux";
import footballServiceLoading from "../../services";
import PackedFootballListContainer from "../../containers/football-list-container";

store.subscribe(() => console.log(store.getState()))
footballServiceLoading();


const App = () => {
    return(
        <Provider store={store}>
            <PackedFootballListContainer/>
        </Provider>
    )
}

export default App;
import * as React from "react";
import './app.scss'
import FootballListContainer from "../../containers/football-list-container";
import store from "../../store";
import {Provider} from "react-redux";
import footballServiceLoading from "../../services";
import PackedFootballListContainer from "../../containers/football-list-container";

store.subscribe(() => console.log(store.getState()))
footballServiceLoading();


const App = () => {
    return(
        <Provider store={store}>
            <div id='structure'>
                <div id='opacity'/>
                <div id='content'>
                    <div id='template'>TypeScript Stats [Football]</div>
                    <PackedFootballListContainer/>
                </div>
            </div>
        </Provider>
    )
}

export default App;
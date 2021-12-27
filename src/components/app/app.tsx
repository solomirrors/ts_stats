import * as React from "react";
import './app.scss'
import FootballListContainer from "../../containers/football-list-container";
import store from "../../store";
import footballServiceLoading from "../../services";

store.subscribe(() => console.log(store.getState()))
footballServiceLoading();


const App = () => {
    return(
        <React.Fragment>
            <div id='structure'>
                <div id='opacity'/>
                <div id='content'>
                    <div id='template'>TypeScript Stats [Football]</div>
                    <FootballListContainer/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default App;
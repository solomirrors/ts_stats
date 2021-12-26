import * as React from "react";
import './app.scss'
import * as Papa from 'papaparse'
import parseFootball from '../../football.csv'
import FootballListContainer from "../../containers/football-list-container";

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
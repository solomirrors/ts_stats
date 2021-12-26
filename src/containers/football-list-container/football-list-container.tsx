import * as React from 'react'
import FootballList from "../../components/football-list";
import * as Papa from "papaparse";
import parseFootball from "../../football.csv";

Papa.parse(`${parseFootball}`, {
    download: true,
    complete: function(results) {
        console.log(results.data);
    }
});

export default class FootballListContainer extends React.Component{
    render(){
        return(
            <FootballList/>
        )
    }
}
import * as Papa from "papaparse";
import store from "../store";
import parseFootball from "../assets/files/football.csv";
import {footballDataSuccessed} from "../actions";

const footballParse = () => Papa.parse(`${parseFootball}`, {
    download: true,
    complete: function(results) {
        store.dispatch(footballDataSuccessed(results.data))
    }
});

export default footballParse;
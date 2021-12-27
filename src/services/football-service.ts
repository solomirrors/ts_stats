import store from "../store";
import parseFootball from "../assets/files/football.csv";
import footballDataAction from "../actions";
import csvUrlParser from "../utils/csv-parser";

const footballServiceLoading = async () => {
    return store.dispatch(footballDataAction(await csvUrlParser(`${parseFootball}`), 'FETCH_FOOTBALL_DATA_SUCCESS'))
}

export default footballServiceLoading;
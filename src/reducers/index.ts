import updateFootballData from "./football-data";

const reducers = (state: any, action: any) => {
    return {
        footballData: updateFootballData(state, action)
    }
}

export default reducers;
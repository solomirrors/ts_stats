const updateFootballData = (state: any, {payload, type}: {payload: any, type: any}) => {
    if (state === undefined){
        return {
            matches: [],
            loading: true,
            error: false
        }
    }

    switch(type){
        case 'FETCH_FOOTBALL_DATA_REQUEST':
            return {
                matches: [],
                loading: true,
                error: false
            }
        case 'FETCH_FOOTBALL_DATA_SUCCESS':
            return {
                matches: payload,
                loading: false,
                error: false
            }
        case 'FETCH_FOOTBALL_DATA_FAILURE':
            return {
                matches: [],
                loading: false,
                error: payload,
            }
        default:
            return state.footballData;
    }
}

export default updateFootballData;
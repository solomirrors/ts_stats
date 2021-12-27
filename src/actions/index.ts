const footballDataAction = (footballData: unknown = {}, action: string, error: string = '') => {
    switch (action){
        case 'FETCH_FOOTBALL_DATA_SUCCESS':
            return{
                type: 'FETCH_FOOTBALL_DATA_SUCCESS',
                payload: footballData
            }
        case 'FETCH_FOOTBALL_DATA_REQUEST':
            return{
                type: 'FETCH_FOOTBALL_DATA_REQUEST'
            }
        case 'FETCH_FOOTBALL_DATA_FAILURE':
            return {
                type: 'FETCH_FOOTBALL_DATA_FAILURE',
                payload: error
            }
        default: return footballData;
    }
}

export default footballDataAction;
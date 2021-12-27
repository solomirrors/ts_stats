const footballDataSuccessed = (footballData: unknown[]) => {
    return{
        type: 'FETCH_FOOTBALL_DATA_SUCCESS',
        payload: footballData
    }
}

const footballDataRequested = () => {
    return{
        type: 'FETCH_FOOTBALL_DATA_REQUEST'
    }
}

const footballDataFailured = (error: string) => {
    return {
        type: 'FETCH_FOOTBALL_DATA_FAILURE',
        payload: error
    }
}

export {footballDataSuccessed, footballDataRequested, footballDataFailured}
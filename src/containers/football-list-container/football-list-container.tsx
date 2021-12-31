import * as React from 'react'
import FootballList from "../../components/football-list";
import {connect} from "react-redux";

export interface FootballListContainerProps {
    matches: Array<any>
    loading: boolean
    error: boolean
}

export interface FootballListMapStateToProps {
    footballData: {
        matches: Array<any>
        loading: boolean
        error: boolean
    }
}

class FootballListContainer extends React.Component<FootballListContainerProps>{
    render(){
        const {matches, loading, error} = this.props;

        return(
            <FootballList matches={matches} loading={loading} error={error}/>
        )
    }
}

const mapStateToProps = ({footballData: { matches, loading, error}} : FootballListMapStateToProps) => {
    return{
        matches, loading, error
    }
}

const PackedFootballListContainer =
    connect(mapStateToProps)(FootballListContainer);
export default PackedFootballListContainer;
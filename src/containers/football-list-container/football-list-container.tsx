import * as React from 'react'
import FootballList from "../../components/football-list";
import {connect} from "react-redux";

export interface FootballListContainerProps {
    matches: string[][]
    loading: boolean
    error: boolean
}

export interface FootballListMapStateToProps {
    footballData: {
        matches: string[][]
        loading: boolean
        error: boolean
    }
}

class FootballListContainer extends React.Component<FootballListContainerProps>{
    render(){
        const {matches} = this.props;

        return(
            <FootballList matches={matches}/>
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
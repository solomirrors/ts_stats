import * as React from 'react'
import './football-list.scss'
import FootballListItem from "../football-list-item";

export interface FootballListProps{
    matches: Array<any>,
    loading: boolean,
    error: boolean,
}

const FootballList = ({matches, loading, error}: FootballListProps) => {
    return (
        <div>
            <table id='football-table'>
                <tr>
                    <th>Data</th>
                    <th>Team 1</th>
                    <th>Team 2</th>
                    <th>Goals scored</th>
                    <th>Name</th>
                    <th>Name</th>
                    <th>Name</th>
                </tr>
                {
                    matches.map((match, index) => {
                        return(
                            <FootballListItem
                                match={match}
                                index={index}
                            />
                        )
                    })
                }
            </table>
        </div>
    )
}

export default FootballList;
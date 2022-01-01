import * as React from 'react'
import './football-list.scss'
import FootballListItem from "../football-list-item";

export interface FootballListProps{
    matches: Array<[]>
}

const FootballList = ({matches}: FootballListProps) => {
    return (
        <table id='football-table'>
            <thead>
            <tr>
                <th>Index</th>
                <th>Data</th>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Goals scored</th>
                <th>Name</th>
                <th>Name</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
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
            </tbody>
        </table>
    )
}

export default FootballList;
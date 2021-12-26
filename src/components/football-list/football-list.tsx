import * as React from 'react'
import './football-list.scss'
import FootballListItem from "../football-list-item";

const FootballList = () => {
    return (
        <div>
            <table id='football-table'>
                <FootballListItem/>
            </table>
        </div>
    )
}

export default FootballList;
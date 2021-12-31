import * as React from 'react'

export interface FootballListItemProps{
    match: Array<any>,
    index: number
}

const FootballListItem = ({match, index} : FootballListItemProps) => {
    return (
        <React.Fragment>
            <tr key={index}>
                <th>{match[0]}</th>
                <th>{match[1]}</th>
                <th>{match[2]}</th>
                <th>{match[3]}</th>
                <th>{match[4]}</th>
                <th>{match[5]}</th>
                <th>{match[6]}</th>
            </tr>

        </React.Fragment>
    )
}

export default FootballListItem;
import React from 'react';
import { Row } from './Row';
import '../App.css';

export function Table(props) {

    return <table className="striped">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Mail</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((item, i) => {
                        return <Row key={i} user={item}></Row>
                    })}
                </tbody>
            </table>
}

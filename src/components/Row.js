import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../App.css';

export function Row(props) {  

    const urlDetails = "details/" + props.user.id;
   
    return  <tr>
                <td><img src={props.user.picture} alt='pic'></img></td>
                <td>{props.user.firstName} {props.user.lastName}</td>
                <td>{props.user.mail}</td>
                <td>{props.user.phone}</td>
                <td><Link to={urlDetails}><button className='btn'>See Details</button></Link></td>
            </tr>
}

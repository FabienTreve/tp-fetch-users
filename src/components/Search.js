import React, { useState } from 'react';
import '../App.css';

export function Search(props) {

const [search, setSearch] = useState('');

    /*filterTable = () => {

    }*/

    return <div>
                <label htmlFor="search"></label>
                <input type="search" 
                       id="search" 
                       name="search"
                       placeholder="Votre recherche"
                       onChange={e => setSearch(e.target.value)}>
                </input>
                <button className="btn">Filter</button>
            </div>
}

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import { Table } from './components/Table';
import { Search } from './components/Search';
import { Details } from './Details';
import './App.css';
import { userContext } from './contexts/userContext';

function App() {
  const [users, setUsers] = useState([{}]);

  const fetchUsers = async () => {
    try {
        const {data : { results }} = await axios.get('https://randomuser.me/api/?results=20');
  
        return results.map(res => ({
            id: res.login.uuid,
            picture: res.picture.thumbnail,
            pictureLarge: res.picture.large,
            firstName: res.name.first,
            lastName: res.name.last,
            mail: res.email,
            phone: res.phone,
            gender: res.gender,
            locationNb: res.location.street.number,
            locationName: res.location.street.name,
            locationCity: res.location.city,
            locationCountry: res.location.country
        }))
    }
    
    catch (e) {
        console.log(e);
    }
  }

  /*useEffect(() => {
    const data = localStorage.fetchUsers();
    if(data){
      setUsers(JSON.parse(data));
    }
  }, [])*/

  useEffect(() => {
    fetchUsers().then((res) => {setUsers(res)})
  }, [])

  return (
    
    <div className="App">
      <div className="container">
      <Router>
        <Switch>
            <Route path="/details/:userId">
                <userContext.Provider value={users}>
                  <Details users={users} />
                </userContext.Provider>
            </Route>
            <Route path="/">
              <Search users={users}></Search>
              <Table users={users}></Table>
            </Route>
        </Switch>
      </Router>
        
      </div>
    </div>
  );
}

export default App;

import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { userContext } from './contexts/userContext';
import { useParams } from 'react-router-dom';
import './App.css';

export function Details(props) {

    let { userId } = useParams();
    const UContext = useContext(userContext);
    const currentUser = UContext.find((u) => {
        localStorage.setItem('user', JSON.stringify(u));
        return u.id === userId;
    });
    let storedDatas = false;
    if(storedDatas){
        storedDatas = JSON.parse(storedDatas);
    }

    /** Pour des raisons de performance, il serait préférable d'appeler directement le user depuis l'API grâce à son ID
     * Cela a été fait comme cela pour aprendre à utiliser le système de Context de React.
     * 
     * Notes : Pour cette Api, l'ID et les infos utilisateurs associés sont constamment regénérés aléatoirement
     * TODO (pour gérer cela ): localStorage dans App.js
     * UPDATE : Fait ! Mais l'id n'est en fait pas généré aléatoirement, il est associé à une personne différente à chaque appel.
     * Donc TODO : Faire en sorte que le user soit le même en cas de rechargement de la page
     */

    try {
      return  <div>
                    <img src={storedDatas ? storedDatas.pictureLarge : currentUser.pictureLarge} alt='pic'></img>
                    <p>{storedDatas ? storedDatas.gender : currentUser.gender}</p>
                    <p>{storedDatas ? storedDatas.locationNb : currentUser.locationNb}</p>
                    <p>{storedDatas ? storedDatas.locationName : currentUser.locationName}</p>
                    <p>{storedDatas ? storedDatas.locationCity : currentUser.locationCity}</p>
                    <p>{storedDatas ? storedDatas.locationCountry : currentUser.locationCountry}</p>
                    <Link to='/'><button className='btn'>Back</button></Link>
            </div>
    }
    catch(e){
      return  <div>
                    <Link to='/'><button className='btn'>Back</button></Link>
              </div>
    };

}
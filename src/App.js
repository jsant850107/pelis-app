import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListaPelis from './componentes/ListaPelis';
import ListaPelisTit from './componentes/ListaPelisTit';
import BoxBusq from './componentes/BoxBusq';



const App = () => {
  const [pelis, setPelis] = useState([]);
  const [busqVal, setBusqVal] = useState('');

    const getPelisRequest = async (busqVal) => {
        const url = `https://www.omdbapi.com/?s=${busqVal}&apikey=38dd6257`;

        const resp = await fetch(url);

        const respJson = await resp.json();
        
        if(respJson.Search){
            setPelis(respJson.Search)
        }
    };

    useEffect(() => {
      getPelisRequest(busqVal)
    }, [busqVal])
    
    return (
        <div className='container-fluid pelis-app'>
            <div className='row d-flex align-items-center p-3 fixed-top mb-4 bg-danger'>
                <ListaPelisTit heading='Películas'/> 
                <BoxBusq busqVal={busqVal} setBusqVal={setBusqVal}/>
            </div> 
            <div className='container mt-5 pt-5'>
                <ListaPelis pelis= {pelis}/>
            </div>
        </div>
    ) 
}

export default App;

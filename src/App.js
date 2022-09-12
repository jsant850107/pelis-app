import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListaPelis from './componentes/ListaPelis';
import ListaPelisTit from './componentes/ListaPelisTit';



const App = () => {
  const [pelis, setPelis] = useState([]);
  const [buscVal, setBuscVal] = useState('');

    const getPelisRequest = async () => {
        const url = "https://www.omdbapi.com/?s=infinity&apikey=38dd6257";

        const resp = await fetch(url);

        const respJson = await resp.json();

        setPelis(respJson.Search)
    };

    useEffect(() => {
      getPelisRequest()
    }, [])
    
    return (
        <div className='container-fluid pelis-app'>
            <div className='row'>
                <ListaPelisTit heading='Películas'/> 
            </div> 
            <div className='row'>
                <ListaPelis pelis= {pelis}/>
            </div>
        </div>
    ) 
}

export default App;

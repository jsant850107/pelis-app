import React from "react";

const ListaPelis = (props) => {
    let i = 1;
    return(
        // <div className="container mt-5 ">
         <table border={1} className='table text-center table-hover'>
            <thead className="table-dark">
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Año</th>
                    <th>Poster</th>
                </tr>
            </thead>
            <tbody className="bg-light">
                {props.pelis.map((pelis, index) =>(
                    <tr key={pelis.imdbID}>
                        <th>{i++}</th>
                        <th>{pelis.Title}</th>
                        <th>{pelis.Type}</th>
                        <th>{pelis.Year}</th>
                        <th><img className="imagen" src={pelis.Poster} alt='Pelis.png' /></th>
                    </tr>
                )

                    
                )}
                
            </tbody>
        </table>
        // </div>
    );
}

export default ListaPelis;
import React from "react";

const BoxBusq = (props) => {
    return (
        <div className="col col-sm-4">
            <input 
                className="form-control" 
                value={props.value}
                onChange={(e)=> props.setBusqVal(e.target.value) }
                placeholder="Buscar..."></input>
        </div>
    );
}

export default BoxBusq;
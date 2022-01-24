import React from 'react';
import './App.css';


export const File = (props) => {
    console.log(props.name)
    return (
        <div>
        <h1 className='rgb'>{props.name}</h1>
        <h1 className='rgb'>{props.lastname}</h1>   
        </div>
    )
}

import React from 'react';
import styled from 'styled-components' ;
import {useAuthDataContext } from '../AuthDataProvider';
import {Link } from 'react-router-dom';
export default function Simulation() {

    return (
        <SimulationBox>
            <form>
            <input placeholder="Simulation Title"></input>
            <input placeholder="Simulation Params"></input><br/>
            <button> Send simulation</button>
            </form>
            <Link to="/dashboard">Login</Link>
        </SimulationBox>
    )
}

const SimulationBox = styled.div`
    width: 300px;
    border-radius:5px;
    background-color:#333;
    color:#fff;
    padding:20px;
    input{
        width:100%;
        box-sizing:border-box;
    }
    button{
        padding: 10px 0;
        color:#fff;
        width:100%;
        border-style:none;
        border-radius:3px;
        font-family: 'Lato', sans-serif;
        font-weight:700;
        background-color:#555;
        margin: 10px 0;
        cursor: pointer;
        
    }
`
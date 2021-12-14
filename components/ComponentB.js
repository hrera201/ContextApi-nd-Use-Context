import React,{useContext} from 'react';
import {FirstName,LastName} from '../App';


function ComponentB() {

const fname = useContext(FirstName);
const lname = useContext(LastName);



    return (
       <p>
       My Name is {fname} {lname}.
        </p>
    )
}

export default ComponentB;

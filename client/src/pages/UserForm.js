import { verifyDocumentType } from "@apollo/client/react/parser";
import React, { useState, useReducer } from "react";

export default function UserForm(props) {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        "name-finished": true,
        "email-finished": true,
        "password-finished": true,
        "name-verified": true,
        "email-verified": true,
        "password-verified": true,
    });
const verify= (name, data)=> { 
    if (name===data){
        if(data.length >= 6){
            return {
                [name = "-verified"] : true
            }
        }
        return {
            [name = "-verified"] : false
        }
    }
}
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

       const verifyResult = verify(name,value)

        console.log(value)
        setFormState({
            ...formState,
            ...verifyResult,
            [name]: value
        });
    }


}

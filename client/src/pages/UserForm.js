import React, {useState, useReducer} from 'react';

export default function UserForm(props){
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

  const verify = (name, data) =>{
    if(name === "name"){
      if(data.length < 6){
        return {[name + "-verified"]: false}; // something is wrong, data is not long enough
      }
    }
    else if(name === "email"){
      if(!(/.+@.+\..+/.test(data))){
        return {[name + "-verified"]: false}; // something is wrong, regex says it is not an email
      }
    }
    else if(name === "password"){
      if(!(/[a-zA-Z0-9!-]+/i.test(data))){
        return {[name + "-verified"]: false}; // something is wrong, regex says it is not using the right characters
      }
      if(data.length < 6){
        return {[name + "-verified"]: false}; // something is wrong, data is not long enough
      }
    }
    return {
      [name + "-verified"]: true
    }
  }
  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;

    const verifyResult = verify(name, value);
    console.log(verifyResult);

    setFormState({
      ...formState,
      ...verifyResult,
      [name]: value
    });
  }
  const submitHandler = (event) => {
    alert(JSON.stringify(formState));
  }
  return (
    <section>
    <form onSubmit={submitHandler}>
      {(!formState["name-verified"]) ?
        (<><span class="badge text-bg-danger">Name must be longer than 6 characters</span><br/></>)
        : (<></>)
      }
      
      Hi my name is &nbsp;
      <input 
          type="text"
          name="name"
          value={formState.name}
          onChange={onChangeHandler}
        />
      {/* {formState["name-finished"] ? (
        <>{formState.name}</>
      ) : (
        
        <input 
          type="text"
          name="name"
          value={formState.name}
          onChange={onChangeHandler}
        />
      )}
      
      .

      <input
        type="checkbox"
        name="name-finished"
        checked={formState["name-finished"]}
        onChange={() => onChangeHandler( {
            target: {
              name: "name-finished",
              value: !formState["name-finished"]
            }
        })
        }
      /> */}
      <br/>
      {(!formState["email-verified"]) ?
        (<><span class="badge text-bg-danger">Email must look like "name@company.com"</span><br/></>)
        : (<></>)
      }
      Email: &nbsp;
      <input 
          type="text"
          name="email"
          value={formState.email}
          onChange={onChangeHandler}
        />
        <br/>
        {(!formState["password-verified"]) ?
        (<><span class="badge text-bg-danger">Password must be longer than 5 characters and use letters, numbers or "!" or "-".</span><br/></>)
        : (<></>)
      }
      Password: &nbsp;
      <input 
          type="password"
          name="password"
          value={formState.password}
          onChange={onChangeHandler}
        />
      <button type="submit">Submit</button>
    </form>
    </section>
  );
}
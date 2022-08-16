
import React, {useState, useReducer} from 'react';
import { CREATE_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { useUser } from '../context/UserContext';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import reducer from '../context/reducers';
export default function RentalForm(){
  return(
<form>
  <label>
    Enter Your Cars Make<input type="text" name="car" />
  </label>
  <label>
    Enter Your Cars Model<input type="text" name="car" />
  </label>
  <label>
    Enter Your Cars Year<input type="text" name="car" />
  </label>
  <label>
    Enter Your Cars Color<input type="text" name="car" />
  </label>
  <label>
    Enter Your location<input type="text" name="car" />
  </label>
  <input type="submit" value="Submit" />
</form>
)}

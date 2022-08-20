
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
    Enter Your Cars Make<input type="text" name="BMW" />
  </label>
  <label>
    Enter Your Cars Model<input type="text" name="M4" />
  </label>
  <label>
    Enter Your Cars Year<input type="text" name="2022" />
  </label>
  <label>
    Enter Your Cars Color<input type="text" name="silverstone metallic" />
  </label>
  <label>
    Enter Your location<input type="text" name="1234 brandywine road, someplace, PA" />
  </label>
  <label>
    Enter a url link to photos of your car<input type="text" name="link" />
  </label>
  <input type="submit" value="Submit" />
</form>
)}
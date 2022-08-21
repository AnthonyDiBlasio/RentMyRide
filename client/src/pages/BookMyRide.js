
import React, { useState ,Component} from "react";
import Form from "react-bootstrap/Form";
import Auth from "../utils/auth";
import { CREATE_BOOKING } from "../utils/mutations";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";

export default function BookMyRide() {
  //pulling in UserContext data
      // define check-in and check-out state
      const [checkInDate, setCheckInDate] = useState(null);
      const [checkOutDate, setCheckOutDate] = useState(null);
    
      // define handler change function on check-in date
      const handleCheckInDate = (date) => {
        setCheckInDate(date);
        setCheckOutDate(null);
      };
    
      // define handler change function on check-out date
      const handleCheckOutDate = (date) => {
        setCheckOutDate(date);
      }
      return (
        <Card style={{ width: "50rem", padding: "16px" }}>
        <Form>
        <div>Owned by this user: </div>
       <Form.Group >
          <div>
            <label>Reserve dates:</label>
            <DatePicker
              selected={checkInDate}
              minDate={new Date()}
              onChange={handleCheckInDate}
            />
          </div>
          
          <div>
            <label>Return Date</label>
            <DatePicker
              selected={checkOutDate}
              minDate={checkInDate}
              onChange={handleCheckOutDate}
            />
          </div>
        </Form.Group>
        {checkInDate && checkOutDate && (
          <div className="container">
            <h2>
              You are renting a ride from {moment(checkInDate).format("LL")} to{" "}
              {moment(checkOutDate).format("LL")}.
            </h2>
            <h3>Your total bill is ....</h3>
            <h4>Late Fees are as follows:</h4>
          </div>
        )}
           <Row className="mb-3">
             <Form.Group as={Col}>
               <Form.Label>Name: First and Last</Form.Label>
               <Form.Control name="" />
             </Form.Group>
            </Row>
 
           <Row className="mb-3">
             <Form.Group as={Col}>
               <Form.Label>Message</Form.Label>
               <Form.Control name="city" />
             </Form.Group>
 
            </Row>
           <Button variant="primary" type="submit">
             Submit
           </Button>
         </Form>
        </Card>
    
    )};
  

    
  
  
  
    
     
        
      
  



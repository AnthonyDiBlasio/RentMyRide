import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Card from 'react-bootstrap/Card';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import img1 from '../images/car1.jpg';

const Profile = () => {
  // need to figure out why its not updating automatically for the cars rented
  // create state for user's info
  const { data: userData } = useQuery(QUERY_ME);

  const user = userData?.me || {};

  return (
    <div className="gradient-custom-2" >
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="9" xl="7">
          <MDBCard>
            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
              <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                <MDBCardImage src="https://i.redd.it/6hsqbvvua6q31.jpg"
                  alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                {/* <MDBBtn outline color="dark mt-3" style={{height: '36px', overflow: 'visible'}}>
                  Edit profile
                </MDBBtn> */}
              </div>
              <div className="ms-3" style={{ marginTop: '130px' }}>
                <MDBTypography tag="h5">
                  {user.name}
                </MDBTypography>
                <MDBCardText>
                No data for location @ the moment {user.location}
                </MDBCardText>
              </div>
            </div>
            <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="d-flex justify-content-end text-center py-1">
                <div>
                  <MDBCardText className="small text-muted mb-0">Email</MDBCardText>
                  <MDBCardText className="mb-1 h5">
                  <a href={user.email} target="_blank">{user.email}</a>
                  </MDBCardText>
                </div>
              </div>
            </div>
            <MDBCardBody className="p-4" style={{ color: "#823329" }}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBCardText className="lead fw-bold mb-0">My Cars:</MDBCardText>
                {/* <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText> */}
              </div>
              <div className="d-flex justify-content-center fw-bold font-monospace"
                style={{
                  background: '#efefef',
                  padding: '29px 30px',
                  border: '2px dashed',
                  margin: '20px 0',
                }}>
                COMING SOON
              </div>
              <MDBCardText className="lead fw-bold mb-4">Cars Rented:</MDBCardText>
              <div className="row g-3">
                { 
                  user?.carsRented?.filter(car => car.rentedCar != null).map(car => (
                    <div className="col-md-6">
                    <Card style={{ width: '18rem', padding:0 }} key={car._id}>
                      <Card.Img variant="top" src={car.rentedCar.image} title={car.rentedCar.carMake} alt={car.rentedCar.carMake} />
                      <Card.Body>
                        <Card.Title>{ car.rentedCar.carMake }</Card.Title>
                        <Card.Text>
                          <div>{ car.rentedCar.carModel }</div>
                          <div>{ car.rentedCar.carType }</div>
                          <div><b>{ car.rentedCar.carYear }</b></div> 
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    </div>
                  ))
                }
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
  );
};

export default Profile;

import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import img1 from '../images/car1.jpg';

const Profile = () => {
  
  // create state for user's info
  const { data: userData } = useQuery(QUERY_ME);

  const user = userData?.me || '';

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
            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="d-flex justify-content-end text-center py-1">
                <div>
                  <MDBCardText className="small text-muted mb-0">Email</MDBCardText>
                  <MDBCardText className="mb-1 h5">
                  <a href={user.email} target="_blank">{user.email}</a>
                  </MDBCardText>
                </div>
                {/* <div className="px-3">
                  <MDBCardText className="mb-1 h5">1026</MDBCardText>
                  <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                </div>
                <div>
                  <MDBCardText className="mb-1 h5">478</MDBCardText>
                  <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                </div> */}
              </div>
            </div>
            <MDBCardBody className="text-black p-4">
              {/* <div className="mb-5">
                <p className="lead fw-normal mb-1">About</p>
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText className="font-italic mb-1">Web Developer</MDBCardText>
                  <MDBCardText className="font-italic mb-1">Lives in New York</MDBCardText>
                  <MDBCardText className="font-italic mb-0">Photographer</MDBCardText>
                </div>
              </div> */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBCardText className="lead fw-normal mb-0">My Cars:</MDBCardText>
                {/* <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText> */}
              </div>
              <MDBRow className="mb-3" >
                <MDBCol className="mb-2">
                  <MDBCardImage src={img1}
                    alt="image 1" className="w-100 rounded-3" />
                </MDBCol>
                <MDBCol className="mb-2">
                  <MDBCardImage src={img1}
                    alt="image 1" className="w-100 rounded-3" />
                </MDBCol>
              </MDBRow>
              <MDBCardText className="lead fw-normal mb-4">Cars Rented:</MDBCardText>
              <MDBRow className="g-2">
                <MDBCol className="mb-2">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                    alt="image 1" className="w-100 rounded-3" />
                </MDBCol>
                <MDBCol className="mb-2">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                    alt="image 1" className="w-100 rounded-3" />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
  );
};

export default Profile;

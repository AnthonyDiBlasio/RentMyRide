import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import img1 from '../images/car1.jpg';

const Profile = () => {
  const { loading, data } = useQuery(QUERY_USERS, {
    fetchPolicy: "no-cache"
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // copy
    const formValues = {...formState};
    // modify
    formValues[name] = value;
    // set state
    setFormState(formValues);
  }

  const user = data?.user || '';

  return (
    // <div className="card bg-white card-rounded w-50">
    //   <div className="card-header bg-dark text-center">
    //     <h1>Users List!</h1>
    //   </div>
    //   <div className="card-body m-5">
    //     <h2>Welcome</h2>
    //     {loading ? (
    //       <div>Loading...</div>
    //     ) : (
    //       <ul className="square">
    //         {userList.map((user) => {
    //           return (
    //             <li key={user._id}>
    //             <span>{user.name}</span><br />
    //             <span>{user.email}</span>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     )}
    //   </div>
    //   <div>
    //     <form>
    //       <label>Name</label>
    //       <input 
    //         type="text" 
    //         name="name" 
    //         placeholder='Name of person' 
    //         onChange={handleInputChange}
    //         value={formState.name}
    //       />
    //       <label>Email</label>
    //       <input 
    //         type="text"
    //         name="email" 
    //         placeholder='Email of person' 
    //         onChange={handleInputChange}
    //         value={formState.email}
    //       />
    //       <label>Password</label>
    //       <input 
    //         type="password" 
    //         name="password" 
    //         placeholder='Password' 
    //         onChange={handleInputChange}
    //         value={formState.password}
    //       />
    //     </form>
    //   </div>

    // </div>

    <div className="gradient-custom-2" >
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="9" xl="7">
          <MDBCard>
            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
              <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                <MDBBtn outline color="dark mt-3" style={{height: '36px', overflow: 'visible'}}>
                  Edit profile
                </MDBBtn>
              </div>
              <div className="ms-3" style={{ marginTop: '130px' }}>
                <MDBTypography tag="h5">{user.name}</MDBTypography>
                {/* <MDBCardText>New York</MDBCardText> */}
              </div>
            </div>
            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
              {/* <div className="d-flex justify-content-end text-center py-1">
                <div>
                  <MDBCardText className="mb-1 h5">253</MDBCardText>
                  <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                </div>
                <div className="px-3">
                  <MDBCardText className="mb-1 h5">1026</MDBCardText>
                  <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                </div>
                <div>
                  <MDBCardText className="mb-1 h5">478</MDBCardText>
                  <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                </div>
              </div> */}
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
              <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
                <MDBCardText className="lead fw-normal mb-0">Cars Rented:</MDBCardText>
                <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
              </div>
              <MDBRow>
                <MDBCol className="mb-2">
                  <MDBCardImage src={img1}
                    alt="image 1" className="w-100 rounded-3" />
                </MDBCol>
                <MDBCol className="mb-2">
                  <MDBCardImage src={img1}
                    alt="image 1" className="w-100 rounded-3" />
                </MDBCol>
              </MDBRow>
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

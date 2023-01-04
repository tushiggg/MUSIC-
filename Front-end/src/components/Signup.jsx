import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "../styles/Signup.module.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { auth } from "../config/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = async (e) => {
      e.preventDefault();

      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    };
  return (
    <>
      <div className={styles.cont}>
        <MDBContainer
          fluid
          className="d-flex align-items-center justify-content-center bg-image"
        >
          <div className="mask gradient-custom-3"></div>
          <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
            <MDBCardBody className="px-5">
              <h2
                className="text-uppercase text-center mb-5"
                style={{ color: "black" }}
              >
                Create an account
              </h2>
              <MDBInput
                wrapperClass="mb-4"
                label="Your Email"
                size="lg"
                id="form2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                size="lg"
                id="form3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg" onClick={onSubmit}>
                Register
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    </>
  );
};

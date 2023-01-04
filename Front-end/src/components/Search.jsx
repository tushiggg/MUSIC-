import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Search.module.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export const Search = (props) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
  };

  return (
    <>
      <div className={styles.cont}
      >
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <div></div>
      </div>
    </>
  );
};

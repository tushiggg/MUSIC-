import styles from "../styles/Topheader.module.css";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

export const Topheader = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  function onSubmit() {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("signed out");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
        const uid = user.uid;
        console.log("uid:", uid);
      } else {
        console.log("no user signed in");
      }
      console.log(user.email);
    });
  }, []);

  return (
    <>
      <div className={styles.cont}>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

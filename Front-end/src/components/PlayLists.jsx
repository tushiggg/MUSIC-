import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/PlayLists.module.css";

export const PlayLists = () => {
  const params = useParams();
  const [song, setSong] = useState(null);

  const id = params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/playlist/${id}`, {})
      .then((res) => {
        setSong(res.data);
      })
      .catch((err) => {});
  }, [id]);

  console.log(song);
  return (
    <>
      <div className={styles.cont}>
      </div>
    </>
  );
};

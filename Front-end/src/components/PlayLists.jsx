import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/PlayLists.module.css";

export const PlayLists = () => {
  const params = useParams();
  const [songs, setSongs] = useState(null);

  const id = params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/playlist/${id}`, {})
      .then((res) => {
        console.log(res.data);
        setSongs(res.data.songs);
      })
      .catch((err) => {});
  }, [id]);

  console.log(songs);

  return (
    <>
      <div className={styles.cont}>
        {songs ? (
          songs.map((e, i) => {
            return <div>hi</div>;
          })
        ) : (
          <>
            <div>no playlists</div>
          </>
        )}
      </div>
    </>
  );
};

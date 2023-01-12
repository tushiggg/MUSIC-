import styles from "../styles/Songs.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const Songs = (props) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/song", {})
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);

  console.log(data);
  return (
    <>
      <div className={styles.cont}>
        {
         data ? (data.map((e,i) => { 
          return ( 
            <>
            <div> 
                {e.name} 
                {" "}
                {e.artist}
            </div>
            </>
          )            
         })) : (<></>) 
        }
      </div>
    </>
  );
};

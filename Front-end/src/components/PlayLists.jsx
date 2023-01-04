import { useParams } from "react-router-dom";
import styles from "../styles/PlayLists.module.css"

export const PlayLists = () => {
  const params = useParams();

  console.log(params.id);
  return (
    <>
      <div className={styles.cont}></div>
    </>
  );
};

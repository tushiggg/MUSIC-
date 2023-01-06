import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import { GrSpotify } from "react-icons/gr";
import { AiFillPlusSquare } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import axios from "axios";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export const Header = (props) => {
  const [playList, setPlayList] = useState(null);

  const createPlaylist = () => {
    axios
      .post("http://localhost:8080/playlist", {})
      .then(() => {})
      .catch(() => {});
    window.location.reload();
  };
  const deletePlaylist = (id) => {
    console.log("zal");
    axios
      .delete(`http://localhost:8080/playlist/${id}`, {})
      .then(() => {})
      .catch(() => {});
    window.location.reload();
  };
  useEffect(() => {
    console.log("hi");
    axios
      .get("http://localhost:8080/playlist", {})
      .then((res) => {
        setPlayList(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <Nav className={styles.mainCont}>
        <div style={{ paddingTop: "24px" }}>
          <div className={styles.cont}>
            <Link>
              <div className={styles.logo}>
                <GrSpotify
                  style={{ fill: "white", width: "40px", height: "40px" }}
                ></GrSpotify>
              </div>
            </Link>
            <div className={styles.navBar}>
              <Link to="/home" className={styles.menuCont}>
                <svg
                  fill="white"
                  role="img"
                  height="24"
                  width="24"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path>
                </svg>
                <div className={styles.txt}>Home</div>
              </Link>
              <Link to="/search" className={styles.menuCont}>
                <svg
                  fill="white"
                  role="img"
                  height="24"
                  width="24"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                </svg>
                <div className={styles.txt}>Search</div>
              </Link>
              <Link to="/playlists" className={styles.menuCont}>
                <svg
                  fill="white"
                  role="img"
                  height="24"
                  width="24"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path>
                </svg>
                <div className={styles.txt}>Your Library</div>
              </Link>
            </div>
          </div>
          <div className={styles.playListCont}>
            <button className={styles.liked} onClick={createPlaylist}>
              <div className={styles.playListIcon}>
                <AiFillPlusSquare
                  style={{ width: "24px", height: "24px" }}
                ></AiFillPlusSquare>
              </div>
              <div className={styles.txt}>Create Playlist</div>
            </button>
            <Link to="/tracks" className={styles.create}>
              <div className={styles.playListIcon}>
                <FcLike style={{ width: "24px", height: "24px" }}></FcLike>
              </div>
              <div className={styles.txt}>Liked Songs</div>
            </Link>
            <hr></hr>
            <div className={styles.sSg}>
              <div style={{ width: "100%" }}>
                {playList ? (
                  playList.map((e, i) => {
                    return (
                      <div className={styles.pLT}>
                        <Link to={`/playlist/${e._id}`}>
                          <div key={i + e._id} className={styles.Tlt}>
                            {e.name}
                          </div>
                        </Link>
                        <Dropdown>
                          <Dropdown.Toggle variant="flat"></Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item
                              onClick={() => deletePlaylist(e._id)}
                            >
                              Delete
                            </Dropdown.Item>
                            <Dropdown.Item>Rename</Dropdown.Item>
                            <Dropdown.Item>Edit Info</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};

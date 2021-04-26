import "./styles.css";
import "./chitte.css";
import avat from "./images/avatar1.png";
import logo from "./images/Logo2.png";
import { useState } from "react";

export default function App() {
  const [displayOption, setDisplayOption] = useState({ display: "none" });
  const [displayModal, setDisplayModal] = useState({ display: "none" });
  const [toastClass, setToastClass] = useState("snackbar");

  function handleDisplay(id) {
    id.style.display = "block";
  }
  const removeDisplay = (...args) => {
    args.map((id) => (document.getElementById(id).style.display = "none"));
  };
  const showModal = (action) => {
    setDisplayModal({ display: action });
  };
  const handleRating = (...args) => {
    args.map(
      (id) => (document.getElementById(id).className = "marked content-pink")
    );
  };
  return (
    <div className="App bg-darkgrey">
      <div className="layout">
        <div className="heading content-pink">
          <div className="headingDisplay">
            <img src={logo} alt="logo" width="70px" height="50px" />
            <h1>Chitte</h1>
          </div>
        </div>
        <div className="sidebar">
          <nav
            onClick={() => {
              removeDisplay(
                "avatar",
                "badge",
                "cards",
                "button",
                "lists",
                "modal",
                "rating",
                "tab",
                "toast"
              );
              handleDisplay(document.getElementById("alertmsg"));
            }}
            className="box"
          >
            Alert
          </nav>
          <nav
            onClick={() => {
              removeDisplay(
                "alertmsg",
                "badge",
                "button",
                "cards",
                "lists",
                "modal",
                "rating",
                "tab",
                "toast"
              );
              handleDisplay(document.getElementById("avatar"));
            }}
            className="box"
          >
            Avatar
          </nav>
          <nav
            onClick={() => {
              removeDisplay(
                "alertmsg",
                "avatar",
                "button",
                "cards",
                "lists",
                "modal",
                "rating",
                "tab",
                "toast"
              );
              handleDisplay(document.getElementById("badge"));
            }}
            className="box"
          >
            Badge
          </nav>
          <nav
            onClick={() => {
              removeDisplay(
                "alertmsg",
                "avatar",
                "badge",
                "cards",
                "lists",
                "modal",
                "rating",
                "tab",
                "toast"
              );
              handleDisplay(document.getElementById("button"));
            }}
            className="box"
          >
            Button
          </nav>
          <nav
            onClick={() => {
              removeDisplay(
                "alertmsg",
                "avatar",
                "button",
                "badge",
                "lists",
                "modal",
                "rating",
                "tab",
                "toast"
              );
              handleDisplay(document.getElementById("cards"));
            }}
            className="box"
          >
            Card
          </nav>
          <nav
            onClick={() => {
              removeDisplay(
                "alertmsg",
                "avatar",
                "button",
                "badge",
                "cards",
                "modal",
                "rating",
                "tab",
                "toast"
              );
              handleDisplay(document.getElementById("lists"));
            }}
            className="box"
          >
            Lists
          </nav>
          <nav
            onClick={() => {
              removeDisplay(
                "alertmsg",
                "avatar",
                "button",
                "badge",
                "cards",
                "lists",
                "rating",
                "tab",
                "toast"
              );
              handleDisplay(document.getElementById("modal"));
            }}
            className="box"
          >
            Modal
          </nav>
          <nav
            onClick={() => {
              removeDisplay(
                "alertmsg",
                "avatar",
                "button",
                "badge",
                "cards",
                "modal",
                "lists",
                "toast",
                "tab"
              );
              handleDisplay(document.getElementById("rating"));
            }}
            className="box"
          >
            Rating
          </nav>
          <nav
            onClick={() => {
              removeDisplay(
                "alertmsg",
                "avatar",
                "button",
                "badge",
                "cards",
                "modal",
                "rating",
                "lists",
                "toast"
              );
              handleDisplay(document.getElementById("tab"));
            }}
            className="box"
          >
            Tab
          </nav>
          <nav
            onClick={() => {
              removeDisplay(
                "alertmsg",
                "avatar",
                "button",
                "badge",
                "cards",
                "modal",
                "rating",
                "lists",
                "tab"
              );
              handleDisplay(document.getElementById("toast"));
            }}
            className="box"
          >
            Toast
          </nav>
        </div>
        <div className="content content-box">
          {/* /* ---------Alert------------- */}
          <div id="alertmsg" style={displayOption}>
            <h2>Alert</h2>
            <p>
              Alerts are used to communicate a state that affects a system,
              feature or page.
            </p>
            <h3>Preview</h3>
            <div>
              <div className="alert alert-error">
                <i className="fa fa-times-circle"></i>
                <span>This is an error</span>
              </div>
              <div className="alert alert-success">
                <i className="fa fa-check-circle"></i>
                <span>Success message</span>
              </div>
              <div className="alert alert-info">
                <i className="fa fa-info-circle"></i>
                <span>Info details</span>
              </div>
              <div className="alert alert-warning">
                <i className="fa fa-exclamation-triangle"></i>
                <span>Warning message</span>
              </div>
            </div>
          </div>
          {/* /* ---------Avatar------------- */}
          <div id="avatar" style={displayOption}>
            <h2>Avatar</h2>
            <p>
              The Avatar component is used to represent a user, and displays the
              profile picture or initials
            </p>
            <h3>Preview:</h3>
            <h3>Squared Avatar</h3>
            <div>
              <img className="avatar avatar-small" src={avat} alt="avatar" />
              <img className="avatar avatar-medium" src={avat} alt="avatar" />
              <img className="avatar avatar-big" src={avat} alt="avatar" />
            </div>
            <h3>Round Avatar</h3>
            <div>
              <img
                className="avatar round avatar-small"
                src={avat}
                alt="avatar"
              />
              <img
                className="avatar round avatar-medium"
                src={avat}
                alt="avatar"
              />
              <img
                className="avatar round avatar-big"
                src={avat}
                alt="avatar"
              />
            </div>
          </div>
          {/* --------------Badge----------- */}
          <div id="badge" style={displayOption}>
            <h2>Badge</h2>
            <p>
              Badges are used to highlight an item's status for quick
              recognition.
            </p>
            <h3>Preview:</h3>
            <div className="displayFlex">
              <span className="badge">Default</span>
              <span className=" badge bg-lightpink">Solid</span>
              <span className=" badge outline border-pink">Outline</span>
            </div>
            <h3>Badge on Avatar</h3>
            <div className="avatar-badge">
              <img
                className="avatar round avatar-big"
                src={avat}
                alt="avatar"
              />
              <span className="online"></span>
            </div>
            <div className="avatar-badge">
              <img
                className="avatar round avatar-big"
                src={avat}
                alt="avatar"
              />
              <span className="busy"></span>
            </div>
            <div className="avatar-badge">
              <img
                className="avatar round avatar-big"
                src={avat}
                alt="avatar"
              />
              <span className="away"></span>
            </div>
          </div>
          {/* --------------Button----------- */}
          <div id="button" style={displayOption}>
            <h2>Button</h2>
            <p>The Button component is used to trigger an action or event</p>
            <h3>Preview:</h3>
            <div className="displayFlex">
              <button className="primary-button bg-lightpink content-black">
                Primary Button
              </button>
              <button className="secondary-button border-pink content-pink">
                Secondary Button
              </button>
            </div>
          </div>
          {/* --------------Cards----------- */}
          <div id="cards" style={displayOption}>
            <h2>Cards</h2>
            <p>
              The Box component serves as a wrapper component for most of the
              CSS utility
            </p>
            <h3>Preview:</h3>
            <div className="card border-pink">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              delectus facere, veritatis quia animi aut perspiciatis inventore,
              incidunt vitae, consectetur vel ipsum facilis pariatur voluptatem
              rem eligendi doloribus voluptate repudiandae.
            </div>
            <div className="card shadow">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              delectus facere, veritatis quia animi aut perspiciatis inventore,
              incidunt vitae, consectetur vel ipsum facilis pariatur voluptatem
              rem eligendi doloribus voluptate repudiandae.
            </div>
          </div>
          {/* ----------Lists --------------------*/}
          <div id="lists" style={displayOption}>
            <h2>Lists</h2>
            <p>Lists are continuous, vertical indexes of text or images.</p>
            <h3>Preview:</h3>
            <h3>Stack Lists</h3>
            <ul className="list bg-lightpink">
              <li className="stack-item ">Apple</li>
              <li className="stack-item">Mango</li>
              <li className="stack-item">Grapes</li>
              <li className="stack-item">Blueberry</li>
            </ul>
          </div>
          {/* --------------Modal----------- */}
          <div id="modal" style={displayOption}>
            <h2>Modal</h2>
            <p>Lists are continuous, vertical indexes of text or images.</p>
            <h3>Preview:</h3>
            <button
              onClick={() => showModal("block")}
              className="primary-button bg-lightpink content-black"
            >
              Show Modal
            </button>
            <div className="modal" style={displayModal}>
              <div className="modal-box">
                <div className="modalHeader">
                  <header className="bg-pink">Header</header>
                  <button
                    onClick={() => showModal("none")}
                    className="primary-button bg-pink closebtn"
                  >
                    X
                  </button>
                </div>
                <p className="content-black">Write your Text</p>
                <footer className="bg-pink">Footer</footer>
              </div>
            </div>
          </div>
          {/* --------------Tabs----------- */}
          <div id="tab" style={displayOption}>
            <h2>Tabs</h2>
            <p>
              Tabs make it easy to explore and switch between different views.
            </p>
            <h3>Preview:</h3>
            <nav className="navigation bg-lightpink">
              <a className="tab content-black" href="#home">
                Home
              </a>
              <a className="tab content-black" href="#about">
                About
              </a>
              <a className="tab content-black " href="#contact">
                Contact
              </a>
            </nav>
          </div>
          {/* ---------------Toast--------------------- */}
          <div id="toast" style={displayOption}>
            <h2>Toast</h2>
            <p>
              The toast is used to show alerts on top of an overlay. The toast
              will close itself after a timeout — the default is 5 seconds.
            </p>
            <h3>Preview:</h3>
            <button
              className="primary-button bg-pink"
              onClick={() => {
                setToastClass("snackbar show bg-black");
                setTimeout(function () {
                  setToastClass("snackbar");
                }, 5000);
              }}
            >
              Show Snackbar
            </button>
            <div id="snackbar" className={toastClass}>
              Some text message..
            </div>
          </div>
          {/* ------------------Ratings--------------------- */}
          <div id="rating" style={displayOption}>
            <h2>Ratings</h2>
            <p>Star ratings from one to five</p>
            <h3>Preview:</h3>
            <div>
              <span
                id="star1"
                onClick={() => {
                  handleRating("star1", "star2");
                }}
                className="unmarked"
              >
                &#9733;
              </span>
              <span
                id="star2"
                onClick={() => {
                  handleRating("star1", "star2");
                }}
                className="unmarked"
              >
                &#9733;
              </span>
              <span
                id="star3"
                onClick={() => {
                  handleRating("star1", "star2", "star3");
                }}
                className="unmarked"
              >
                &#9733;
              </span>
              <span
                id="star4"
                onClick={() => {
                  handleRating("star1", "star2", "star3", "star4");
                }}
                className="unmarked"
              >
                &#9733;
              </span>
              <span
                id="star5"
                onClick={() => {
                  handleRating("star1", "star2", "star3", "star4", "star5");
                }}
                className="unmarked"
              >
                &#9733;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

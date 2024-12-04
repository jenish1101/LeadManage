import React, { useEffect, useState } from "react";
import "./TableMessages.css";
import axios from "axios";

import { CiUser } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

import Icons from "./Icons/Icons";

const TableMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/messages")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the messages!", error);
      });
  }, []);

  // Length Of Messages
  const New = messages.filter((message) => message.status === "New").length;
  const Processing = messages.filter(
    (message) => message.status === "Processing"
  ).length;
  const Close_by = messages.filter(
    (message) => message.status === "Close-by"
  ).length;
  const Confirm = messages.filter(
    (message) => message.status === "Confirm"
  ).length;
  const Cancle = messages.filter(
    (message) => message.status === "Cancle"
  ).length;

  // Define the set of colors
  const colors = ["red", "green", "blue"];

  // Function to get a random color
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  
  return (
    <div className="container">
      <div className="tableMessages">
        <div className="grid-container">
          
          <div className="msg-1 table_msg">
            <div className="top-msg">
              <h1>New</h1>
              <div>
                <button>{New}</button>
              </div>
            </div>

            <div className="msg-data">
              {messages.map((message, index) =>
                message.status === "New" ? (
                  <div className="grid-item" key={index}>
                    <div className="middle-msg">
                      <div className="middle-first">
                        <button
                          className="middle-first-btn"
                          style={{ backgroundColor: getRandomColor() }}
                        >
                          <p>{message.crm} </p>
                        </button>
                      </div>
                      <div className="middle-second">
                        <div className="ms-first">
                          <h3 className="ms-data">
                            <CiUser style={{ color: "blue" }} />
                            {message.contact.name}
                          </h3>
                        </div>
                        <div className="ms-second">
                          <h3 className="ms-data">
                            <IoCallOutline style={{ color: "green" }} />
                            {message.contact.phone}
                          </h3>
                        </div>
                      </div>
                      <div className="ms-third">
                        <p className="third-data">
                          <span>CD:</span> {message.details.cd}
                        </p>
                        <p className="third-data">
                          <span>BY:</span> {message.details.by}
                        </p>
                        <p className="third-data">
                          <span>TO:</span> {message.details.to}
                        </p>
                        <p className="third-data">
                          <span>NFD:</span> {message.details.nfd}
                        </p>
                      </div>
                    </div>
                    <Icons />
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>

          <div className="msg-2 table_msg">
            {/* <div className="grid-item">Box-2</div>  */}
            <div className="top-msg" style={{ backgroundColor: "#e4e420" }}>
              <h1>Processing</h1>
              <div>
                <button>{Processing}</button>
              </div>
            </div>

            <div className="msg-data">
              {messages.map((message, index) =>
                message.status === "Processing" ? (
                  <div className="grid-item" key={index}>
                    <div className="middle-msg">
                      <div className="middle-first">
                        <button className="middle-first-btn" style={{ backgroundColor: getRandomColor() }}  >
                          <p>{message.crm}</p>
                        </button>
                      </div>
                      <div className="middle-second">
                        <div className="ms-first">
                          <h3 className="ms-data">
                            <CiUser style={{ color: "blue" }} />
                            {message.contact.name}
                          </h3>
                        </div>
                        <div className="ms-second">
                          <h3 className="ms-data">
                            <IoCallOutline style={{ color: "green" }} />
                            {message.contact.phone}
                          </h3>
                        </div>
                      </div>
                      <div className="ms-third">
                        <p className="third-data">
                          <span>CD:</span> {message.details.cd}
                        </p>
                        <p className="third-data">
                          <span>BY:</span> {message.details.by}
                        </p>
                        <p className="third-data">
                          <span>TO:</span> {message.details.to}
                        </p>
                        <p className="third-data">
                          <span>NFD:</span> {message.details.nfd}
                        </p>
                      </div>
                    </div>
                    <Icons />
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
 
          <div className="msg-3 table_msg">
            {/* <div className="grid-item">Box-3</div> */}
            <div className="top-msg" style={{ background: "#a851bd" }}>
              <h1>Close-by</h1>
              <div>
                <button>{Close_by}</button>
              </div>
            </div>

            <div className="msg-data">
              {messages.map((message, index) =>
                message.status === "Close-by" ? (
                  <div className="grid-item" key={index}>
                    <div className="middle-msg">
                      <div className="middle-first">
                        <button className="middle-first-btn" style={{ backgroundColor: getRandomColor() }} >
                          <p>{message.crm}</p>
                        </button>
                      </div>
                      <div className="middle-second">
                        <div className="ms-first">
                          <h3 className="ms-data">
                            <CiUser style={{ color: "blue" }} />
                            {message.contact.name}
                          </h3>
                        </div>
                        <div className="ms-second">
                          <h3 className="ms-data">
                            <IoCallOutline style={{ color: "green" }} />
                            {message.contact.phone}
                          </h3>
                        </div>
                      </div>
                      <div className="ms-third">
                        <p className="third-data">
                          <span>CD:</span> {message.details.cd}
                        </p>
                        <p className="third-data">
                          <span>BY:</span> {message.details.by}
                        </p>
                        <p className="third-data">
                          <span>TO:</span> {message.details.to}
                        </p>
                        <p className="third-data">
                          <span>NFD:</span> {message.details.nfd}
                        </p>
                      </div>
                    </div>
                    <Icons />
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>

          <div className="msg-4 table_msg">
            {/* <div className="grid-item">Box-4</div> */}
            <div className="top-msg" style={{ background: "#78a778" }}>
              <h1>Confirm</h1>
              <div>
                <button>{Confirm}</button>
              </div>
            </div>

            <div className="msg-data">
              {messages.map((message, index) =>
                message.status === "Confirm" ? (
                  <div className="grid-item" key={index}>
                    <div className="middle-msg">
                      <div className="middle-first">
                        <button className="middle-first-btn" style={{ backgroundColor: getRandomColor() }} >
                          <p>{message.crm}</p>
                        </button>
                      </div>
                      <div className="middle-second">
                        <div className="ms-first">
                          <h3 className="ms-data">
                            <CiUser style={{ color: "blue" }} />
                            {message.contact.name}
                          </h3>
                        </div>
                        <div className="ms-second">
                          <h3 className="ms-data">
                            <IoCallOutline style={{ color: "green" }} />
                            {message.contact.phone}
                          </h3>
                        </div>
                      </div>
                      <div className="ms-third">
                        <p className="third-data">
                          <span>CD:</span> {message.details.cd}
                        </p>
                        <p className="third-data">
                          <span>BY:</span> {message.details.by}
                        </p>
                        <p className="third-data">
                          <span>TO:</span> {message.details.to}
                        </p>
                        <p className="third-data">
                          <span>NFD:</span> {message.details.nfd}
                        </p>
                      </div>
                    </div>
                    <Icons />
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>

          <div className="msg-5 table_msg">
            {/* <div className="grid-item">Box-5</div> */}
            <div className="top-msg" style={{ background: "pink" }}>
              <h1>Cancle</h1>
              <div>
                <button>{Cancle}</button>
              </div>
            </div>

            <div className="msg-data">
              {messages.map((message, index) =>
                message.status === "Cancle" ? (
                  <div className="grid-item" key={index}>
                    <div className="middle-msg">
                      <div className="middle-first">
                        <button className="middle-first-btn"   style={{ backgroundColor: getRandomColor() }} >
                          <p>{message.crm}</p>
                        </button>
                      </div>
                      <div className="middle-second">
                        <div className="ms-first">
                          <h3 className="ms-data">
                            <CiUser style={{ color: "blue" }} />
                            {message.contact.name}
                          </h3>
                        </div>
                        <div className="ms-second">
                          <h3 className="ms-data">
                            <IoCallOutline style={{ color: "green" }} />
                            {message.contact.phone}
                          </h3>
                        </div>
                      </div>
                      <div className="ms-third">
                        <p className="third-data">
                          <span>CD:</span> {message.details.cd}
                        </p>
                        <p className="third-data">
                          <span>BY:</span> {message.details.by}
                        </p>
                        <p className="third-data">
                          <span>TO:</span> {message.details.to}
                        </p>
                        <p className="third-data">
                          <span>NFD:</span> {message.details.nfd}
                        </p>
                      </div>
                    </div>
                    <Icons />
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableMessages;

// Using Json File

import React, { useState } from "react";
import { MdOutlineNightsStay } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

// Modals 
import LeadModal from "./Modals/LeadModal";
import TaskModal from "./Modals/TaskModal";
import NoteModal from "./Modals/NoteModal";
import ReminderModal from "./Modals/ReminderModal";

const RightNavbar = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showNoteModal, setshowNoteModal] = useState(false);
  const [showReminderModal, setshowReminderModal] = useState(false);

  // Lead Modal 
  const handleLeadShow = () => setShowLeadModal(true);
  const handleLeadClose = () => setShowLeadModal(false); 

  // Task Modal 
  const handleTaskShow = () => setShowTaskModal(true);
  const handleTaskClose = () => setShowTaskModal(false);

  // Load Modal 
  const handleNoteShow = () => setshowNoteModal(true);
  const handleNoteClose = () => setshowNoteModal(false);

  // Reminder Modal 
  const handleReminderShow = () => setshowReminderModal(true);
  const handleReminderClose = () => setshowReminderModal(false);

  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-white p-2 rounded-lg">
        <nav style={{ width: "100%" }} className="main-navbar flex flex-wrap items-center justify-between">
          <div className="nav-button flex flex-wrap md:flex-row w-full md:w-auto" id="left">
            <div id="nav-1" className="w-full md:w-auto">
              <Button
                variant="primary"
                className="my-1 w-full md:w-auto flex align-middle mx-1.5 px-3 py-2 text-xs font-medium text-center"
                onClick={handleLeadShow}
              >
                + Lead
              </Button>
            </div>
            <div id="nav-2" className="w-full md:w-auto">
              <Button
                variant="primary"
                className="my-1 w-full md:w-auto flex align-middle mx-1.5 px-3 py-2 text-xs font-medium text-center"
                onClick={handleTaskShow}
              >
                + Task
              </Button>
            </div>
            {/* Add other buttons as needed */}
            <div id="nav-3" className="w-full md:w-auto">
              <Button
                variant="primary"
                className="my-1 w-full md:w-auto flex align-middle mx-1.5 px-3 py-2 text-xs font-medium text-center"
                onClick={handleNoteShow}
              >
                + Note
              </Button>
            </div>

            <div id="nav-4" className="w-full md:w-auto">
              <Button
                variant="primary"
                className="my-1 w-full md:w-auto flex align-middle mx-1.5 px-3 py-2 text-xs font-medium text-center"
                onClick={handleReminderShow}
              >
                + Reminder
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div id="right" className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 md:mt-0 w-full md:w-auto">
            <div id="icons" className="flex space-x-2">
              <MdOutlineNightsStay />
              <FaRegBell />
            </div>
            <div id="user" className="flex items-center space-x-2">
              <div id="user-name" className="text-center md:text-right">
                <h1 className="text-lg">TrulineSolution India</h1>
                <h6 className="text-sm">Store</h6>
              </div>
              <div id="user-logo">
                <FaUserCircle />
              </div>
            </div>
          </div>
          
        </nav>
      </div>

      {/* Modals */}
      <LeadModal showModal={showLeadModal} handleClose={handleLeadClose} />
      <TaskModal showModal={showTaskModal} handleClose={handleTaskClose} />
      <NoteModal showModal={showNoteModal} handleClose={handleNoteClose} />
      <ReminderModal showModal={showReminderModal} handleClose={handleReminderClose} />
    </>
  );
};

export default RightNavbar;

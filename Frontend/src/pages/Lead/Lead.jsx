import React, { useState } from "react";

import Sidebar from "../../components/sidebar/Sidebar";

import RightNavbar from "./RightNavbar/RightNavbar";
import RightTableView from "./RightTableView/RightTableView";
import RightLeadForm from "./RightLeadForm/RightLeadForm";

// import "./Lead.css"

const Lead = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);

  const handleBack = () => {
    setShowLeadForm(false);
  };


  return (
    <>
      {/* Sidebar */}
      <Sidebar />

      {/* Right Navbar */}
      <div>
        <div className="p-4 bg-gray-100 sm:ml-64" id="main-table">
          <div className="p-4" id="main-table">
            {/* Right Navbar */}
            <RightNavbar />

            <hr style={{ margin: "10px 0px" }} />

            {/* Conditional Rendering */}
            {showLeadForm ? (
              <RightLeadForm onBack={handleBack} />
            ) : (
              <RightTableView setShowLeadForm={setShowLeadForm} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lead;

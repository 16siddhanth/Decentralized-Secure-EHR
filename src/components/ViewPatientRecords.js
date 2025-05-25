import React from "react";
import NavBar_Logout from "./NavBar_Logout";

function ViewPatientRecords() {
  return (
    <div>
      <NavBar_Logout />
      <div className="bg-gradient-to-b from-black to-gray-800 text-white p-10 font-mono">
        <p className="text-center text-2xl">
         Patient records to be diaplayed here.
        </p>
      </div>
    </div>
  );
}

export default ViewPatientRecords;

// Admin.jsx
import React from "react";
import "./admin.css";
import Sidebar from "../../component/sidebar/sidebar";
import Addproduct from "../../component/addproduct/addproduct"; // Import Addproduct component
import Listproduct from "../../component/listproduct/listproduct"; // Import Listproduct component
import Removeproduct from "../../component/removeproduct/removeproduct"; // Import Removeproduct component
import { Routes, Route } from "react-router-dom";

const Admin = () => {
    return (
        <div className="admin">
            <Sidebar />
            <Routes>
                <Route path="/addproduct" element={<Addproduct />} /> {/* Use correct path */}
                <Route path="/listproduct" element={<Listproduct />} /> {/* Use correct path */}
                <Route path="/removeproducts" element={<Removeproduct />} /> {/* Use correct path */}
            </Routes>
        </div>
    );
};

export default Admin;

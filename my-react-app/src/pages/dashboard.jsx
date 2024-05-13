import { Button } from "antd";
import { Card, Avatar, Flex, Typography } from "antd";
import NavbarComponent from "../component/navbar/navbar";
import { UserOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react"; // Import useRef and useState hooks
import { useAuth } from "../contexts/AuthContext.jsx";
import Footer from "../component/footer/footer.jsx";
import "./dashboard.css";

const Dashboard = () => {
  const { userData, logout } = useAuth();
  const [newName, setNewName] = useState(""); // State to hold the new name
  const inputRef = useRef(null); // Ref for the input element

  const handleLogout = async () => {
    await logout();
  };

  const handleNameUpdate = async () => {
    try {
      const token = localStorage.getItem("user_data");
      const userData = JSON.parse(localStorage.getItem("user_data") ?? "");

      const response = await fetch(`http://localhost:4000/${userData._id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.userToken}`,
        },
        body: JSON.stringify({ newName }),
      });
      if (response.ok) {
        // Update the local userData with the new name
        userData.name = newName;
        setNewName(""); // Clear the input field
      } else {
        throw new Error("Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div>
      <NavbarComponent />
      <Card className="profile-card">
        {userData ? (
          <Flex vertical gap="small" align="center">
            <Avatar size={150} icon={<UserOutlined />} className="avatar" />
            <Typography.Title level={2} strong className="username">
              {userData.name}
            </Typography.Title>
            <Typography.Text type="secondary" strong>
              {" "}
              Email: {userData.email}
            </Typography.Text>
            <Typography.Text type="secondary"> Role: {userData.role}</Typography.Text>
          </Flex>
        ) : (
          <div>Loading...</div>
        )}
        <Flex align="center">
          {/* Flex container to align items */}
          <Button onClick={handleNameUpdate} style={{ marginTop: "20px", backgroundColor: "pink", borderColor: "pink", color: "white" }}>
            Update Name
          </Button>
          {/* Button to update name */}
          <input
            type="text"
            ref={inputRef}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="New Name"
            style={{ marginRight: "10px", marginTop: "20px" }}
          />
          {/* Input box for new name */}
        </Flex>
      </Card>
      <Footer />
    </div>
  );
};

export default Dashboard;

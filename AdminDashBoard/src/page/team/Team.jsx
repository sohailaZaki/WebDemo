import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import axios from 'axios';
import "./Team.css"
const Team = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/users');
      const userDataWithIds = response.data.map((user, index) => ({ ...user, id: index + 1 }));
      setUserData(userDataWithIds);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  // field ==> Reqird
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
      headerClassName: "custom-header",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
      headerClassName: "custom-header",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
      headerClassName: "custom-header",
    },
    {
      field: "age",
      headerName: "Age",
      align: "center",
      headerAlign: "center",
      headerClassName: "custom-header",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
      headerClassName: "custom-header",
    },
    {
      field: "access",
      headerName: "Access",

      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "85px",
              borderRadius: "30px",

              display: "flex",
              justifyContent: "space-evenly",
              my: 1,
              backgroundColor:
                access === "Admin"
                  ? "#880e4f"
                 
                    : "#f48fb1",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}


            {access === "User" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
      headerClassName: "custom-header",
    },
  ];

  return (
    <Box >
      <Typography color="Black" sx={{
        fontSize: 50,
        fontStyle:'italic',
      }}>Users</Typography>
      <Typography color="bLack" sx={{
        fontSize: 20, my: 2
      }} >Users in The System </Typography>

      <Box sx={{ height: " 89%", width: 1370 ,mx: "auto" }}>
        <DataGrid
          rows={userData}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
    
};

export default Team;
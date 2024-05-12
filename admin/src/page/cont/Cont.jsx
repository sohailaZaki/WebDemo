import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns } from "./data";
import'./cont.css'
import axios from "axios";
const Cont = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

 
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/contacts'); // Replace '/api/contacts' with your actual API endpoint
      const contactsWithIds = response.data.map((contact, index) => ({ ...contact, id: index + 1 }));
      setContacts(contactsWithIds);
    } catch (error) {
      console.error('Error fetching contact data:', error);
    }
  };

  return (
    <Box>

      <Typography color="Black" sx={{
        fontSize: 50,
        fontStyle:'italic',
      }}>CONTACTS</Typography>
      <Typography color="bLack" sx={{
        fontSize: 20, my: 2
      }} >List of Contacts of Users</Typography>

      <Box sx={{ height: "89%", width: 1370, mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
            
          }}
          rows={contacts}
          // @ts-ignore
          columns={columns}
          getRowId={(row) => row.id}
          style={{ color: 'black' }}
        />
      </Box>
    </Box>
  );
};
export default Cont;

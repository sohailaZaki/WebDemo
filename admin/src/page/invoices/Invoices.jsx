import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box, Typography } from "@mui/material";
import { columns } from "./data";
import axios from "axios";


const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await axios.get("/api/invoices"); // Replace '/api/invoices' with your actual API endpoint
      const invoicesWithIds = response.data.map((invoice, index) => ({ ...invoice, id: index + 1 }));
      setInvoices(invoicesWithIds);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    }
  };
  return (
    <Box>

    <Typography color="Black" sx={{
      fontSize: 50,
      fontStyle:'italic',
    }}>ORDERS</Typography>
    <Typography color="bLack" sx={{
      fontSize: 20, my: 2
    }} >List of Invoices for Future Reference</Typography>

    <Box sx={{ height: "89%", width: 1370 , mx: "auto" }}>
      <DataGrid
        checkboxSelection
        rows={invoices}
        // @ts-ignore
        columns={columns}
        style={{ color: 'black' }}
      />
    </Box>
  </Box>
  
  


  );
};

export default Invoices;

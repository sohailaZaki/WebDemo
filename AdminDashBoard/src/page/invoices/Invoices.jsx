import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box, Typography } from "@mui/material";
import { columns } from "./data";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {

    fetchOrders();
  }, []);
  const fetchOrders = () => {
    try {
        fetch("http://localhost:4000/orders/check", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to submit review');
            }
        })
        .then(data => {
           setInvoices(data);

        })
        .catch(error => {
            console.error("Error submitting review:", error);
        });
    } catch (error) {
        console.error("Error submitting review:", error);
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

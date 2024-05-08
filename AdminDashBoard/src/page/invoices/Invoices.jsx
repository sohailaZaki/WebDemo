import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";


const Invoices = () => {
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
        rows={rows}
        // @ts-ignore
        columns={columns}
        style={{ color: 'black' }}
      />
    </Box>
  </Box>
  
  


  );
};

export default Invoices;

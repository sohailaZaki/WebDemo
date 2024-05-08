import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";
import'./cont.css'
const Cont = () => {
  return (
    <Box>

      <Typography color="Black" sx={{
        fontSize: 50,
        fontStyle:'italic',
      }}>CONTACTS</Typography>
      <Typography color="bLack" sx={{
        fontSize: 20, my: 2
      }} >List of Contacts for Future Reference</Typography>

      <Box sx={{ height: "89%", width: 1500, mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
            
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
          style={{ color: 'black' }}
        />
      </Box>
    </Box>
  );
};
export default Cont;

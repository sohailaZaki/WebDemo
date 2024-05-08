import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Pie from "./pie";

const PieChart = () => {
  const theme = useTheme();
  return (
    <Box>
     <Typography color="Black" sx={{
        fontSize: 50,
        fontStyle:'italic',
      }}>Pie Chart</Typography>
      <Typography color="bLack" sx={{
        fontSize: 20, my: 2
      }} >Analysis of Sales around a year</Typography>

      <Pie />
    </Box>
  );
};

export default PieChart;

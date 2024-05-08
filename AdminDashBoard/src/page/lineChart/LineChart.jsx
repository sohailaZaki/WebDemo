import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import Line from "./Line";


const LineChart = () => {
  const theme = useTheme();
  return (
    <Box width={1000}>
     <Typography color="Black" sx={{
        fontSize: 50,
        fontStyle:'italic',
      }}>Line Chart</Typography>
      <Typography color="bLack" sx={{
        fontSize: 20, my: 2
      }} >Analysis of Sales in the last five years</Typography>

      <Line />
    </Box>
  );
};

export default LineChart;

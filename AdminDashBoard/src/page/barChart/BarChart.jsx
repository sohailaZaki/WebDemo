import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, Typography, useTheme } from "@mui/material";
import Bar from "./bar";

const BarChart = () => {
  const theme = useTheme();
  return (
    <Box>
    <Typography color="Black" sx={{
        fontSize: 50,
        fontStyle:'italic',
      }}>Bar Chart</Typography>
      <Typography color="bLack" sx={{
        fontSize: 20, my: 2
      }} >Sales around the year for each category</Typography>

      <Bar />
    </Box>
  );
};

export default BarChart;

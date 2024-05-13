import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../page/pieChart/pie";
import React from "react";
import Bar from "../../page/barChart/bar";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack gap={1.5}  direction={"row"} mt={1.4}>
      <Paper sx={{flexGrow: 1,minWidth: "400px", width: "50%",  }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Sales
        </Typography>

        <Pie isDashbord={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          Sales around year of each category
        </Typography>
        
      </Paper>

      <Paper sx={{minWidth: "400px", width: "50%", flexGrow:1 }}>
      <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>


<Bar isDashbord={true} />


      </Paper>

      
    </Stack>
  );
};

export default Row3;

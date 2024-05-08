import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme } from "@mui/material";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto",padding: "0 16px"  }}>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Typography color="Black" sx={{
          fontSize: 50,
          fontStyle: 'italic',
        }}>DASHBOARD</Typography>

        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize", bgcolor: "#f48fb1" }}
            variant="contained"

          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
};

export default Dashboard;

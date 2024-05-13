import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../../page/lineChart/Line";
import React, { useEffect, useState } from "react";
import { DownloadOutlined } from "@mui/icons-material";
import axios from "axios";


const Row2 = () => {

  const theme = useTheme();
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
     // Fetch orders data from the API or backend server
    const response = await axios.get("/api/orders");

    // Filter orders placed within the last 3 months
    const currentDate = new Date();
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(currentDate.getMonth() - 3);

    const recentOrders = response.data.filter(order => {
      const orderDate = new Date(order.orderDate);
      return orderDate >= threeMonthsAgo && orderDate <= currentDate;
    });

    // Set the filtered recent orders data
    setRecentOrders(recentOrders);
    } catch (error) {
      console.error("Error fetching recent orders data:", error);
    }
  };
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.2} mt={1.3}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
              fontWeight={"bold"}
            >
              Sales according the last five years
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 ,'&:focus': {
                outline: 'none', // Remove the focus ring
              },}}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <Line isDahboard={true} />
      </Paper>

      <Box
        sx={{
          overflow: "auto",
          borderRadius: "4px",
          minWidth: "280px",
          maxHeight: 355,
          flexGrow: 1,
        }}
      >
  
        {recentOrders.map((item) => {
          return (
            <Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor="#f48fb1"
                color="white"
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;

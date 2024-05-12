import { Paper, Stack, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "./card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import {data2S,orderStatusDataS} from './data.js'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from "axios";
const Row1 = () => {

  const theme = useTheme();
  const [orderStatusData, setOrderStatusData] = useState([]);
  const [data2, setData2] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalSales, setTotalSales] = useState(0);

 useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from the API or backend server
      const ordersResponse = await axios.get("/api/orders");
      const categoriesResponse = await axios.get("/api/categories");

      // Calculate the percentage of orders that are delivered and processing
      const totalOrders = ordersResponse.data.length;
      const deliveredOrders = ordersResponse.data.filter(order => order.status === 'Delivered').length;
      const processingOrders = ordersResponse.data.filter(order => order.status === 'Processing').length;
      const deliveryPercentage = (deliveredOrders / totalOrders) * 100;
      const processingPercentage = (processingOrders / totalOrders) * 100;
      // Format data for card 1
      const orderStatusData = [
        {
          id: "delivered",
          label: "Delivered",
          value: deliveryPercentage,
          color: "hsl(111, 90%, 90%)",
        },
        {
          id: "processing",
          label: "Processing",
          value: processingPercentage,
          color: "hsl(22, 90%, 90%)",
        },
      ];

      // Set the formatted data for card 1
      setOrderStatusData(orderStatusData);
      // Calculate the total sales for each category
      const categorySales = {};
      ordersResponse.data.forEach(order => {
        order.products.forEach(product => {
          if (!categorySales[product.category]) {
            categorySales[product.category] = 0;
          }
          categorySales[product.category] += product.price * product.quantity;
        });
      });

      // Format data for card 2
      const formattedData = Object.keys(categorySales).map(category => ({
        id: category,
        label: category,
        value: categorySales[category],
      }));

      // Calculate the total number of orders
      setTotalOrders(ordersResponse.data.length);
      // Set the formatted data for card 2
      setData2(formattedData);
      // Calculate the total prices of orders where paid is true
      const totalSales = ordersResponse.data.reduce((acc, order) => {
        if (order.paid) {
          return acc + order.totalAmount;
        }
        return acc;
      }, 0);

      // Set the total sales for card 2
      setTotalSales(totalSales);
  } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icon={<ShoppingCartIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"555"}//number of orsers
        subTitle={"Orders Status"}
        increase={"+14%"}
        data={orderStatusDataS} scheme={"nivo"} />

      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"$56780"} //tatol money
        subTitle={"Sales obtained"}
        increase={"+21%"}
        data={data2S}
        scheme={"category10"}
      />

      

    </Stack>
  );
};

export default Row1;

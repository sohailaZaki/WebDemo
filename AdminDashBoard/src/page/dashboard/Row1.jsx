import { Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Card from "./card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import {  data2, data3, orderStatusData } from "./data";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Row1 = () => {
  const theme = useTheme();
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
        title={"12,361"}//number of orsers
        subTitle={"Orders Status"}
        increase={"+14%"}
        data={orderStatusData} scheme={"nivo"}      />

      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"431,225"} //tatol money
        subTitle={"Sales obtained"}
        increase={"+21%"}
        data={data2}
        scheme={"category10"} 
      />

      <Card
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"32,441"}//number of new client last 3 months
        subTitle={"New Clients"}
        increase={"+5%"}
        data={data3}
        scheme={"accent"} 
      />
   
    </Stack>
  );
};

export default Row1;

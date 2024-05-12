import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";

import { Box, useTheme } from "@mui/material";
import axios from "axios";

// const data = [
//   {
//     id: "makeup",
//     label: "Make-up",
//     value: 272,
//     color: "hsl(107, 70%, 50%)",
//   },
//   {
//     id: "skincare",
//     label: "Skincare",
//     value: 543,
//     color: "hsl(64, 70%, 50%)",
//   },
//   {
//     id: "perfumes",
//     label: "Perfumes",
//     value: 401,
//     color: "black",
//   },
 
// ];

const Pie = ({ isDashbord = false }) => {
  
  const theme = useTheme();
  const [pieChartData, setPieChartData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      // Fetch data from API
      const response = await axios.get("/api/data");
  
      // Extract orders, products, and categories from the response
      const { orders, products, categories } = response.data;
  
      // Filter orders for the desired year
      const ordersThisYear = orders.filter(order => new Date(order.orderDate).getFullYear() === 2024);
  
      // Join orders with products and categories
      const ordersWithProductDetails = ordersThisYear.map(order => {
        const product = products.find(p => p.productId === order.productId);
        const category = categories.find(c => c.categoryId === product.categoryId);
        return { ...order, productName: product.name, categoryName: category.name };
      });
  
      // Calculate total sales per category
      const categorySales = {};
      ordersWithProductDetails.forEach(order => {
        if (!categorySales[order.categoryName]) {
          categorySales[order.categoryName] = 0;
        }
        categorySales[order.categoryName] += order.totalAmount;
      });
  
      // Calculate total sales
      const totalSales = Object.values(categorySales).reduce((acc, cur) => acc + cur, 0);
  
      // Calculate percentage of sales for each category
      const categorySalesPercentage = {};
      for (const categoryName in categorySales) {
        categorySalesPercentage[categoryName] = (categorySales[categoryName] / totalSales) * 100;
      }
  
      // Format data for the pie chart
      const formattedData = Object.keys(categorySalesPercentage).map(categoryName => ({
        id: categoryName,
        label: categoryName,
        value: categorySalesPercentage[categoryName],
      }));
  
    
      // Set the formatted data to the state
      setPieChartData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return(
  <Box sx={{ height: isDashbord ? "200px" : "75vh",width:isDashbord ? "580px":1100 }}>
      <ResponsivePie
        data={pieChartData}
    
        margin={
          isDashbord
            ? { top: 10, right: 0, bottom: 10, left: 0 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        innerRadius={isDashbord ? 0.8 : 0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={['#ef9a9a', '#e57373', '#ffcdd2']}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        enableArcLabels={isDashbord ? false : true}
        enableArcLinkLabels={isDashbord ? false : true}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={
          isDashbord
            ? []
            : [
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: theme.palette.text.primary,
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                },
              ]
        }
      />
    </Box>
  );
};

export default Pie;

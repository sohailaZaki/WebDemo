import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, Typography, useTheme } from "@mui/material";
import axios from "axios";

// const data = [
//   {
//     "month": "Jan",
//     "make-up": 84,
//     "skin-care": 32,
   
//   },
//   {
//     "month": "Feb",
//     "make-up": 52,
//     "skin-care": 140,
   
//   },
//   {
//     "month": "Mar",
//     "make-up": 188,
//     "skin-care": 130,
   
//   },
//   {
//     "month": "Apr",
//     "make-up": 144,
//     "skin-care": 168,
   
//   },
//   {
//     "month": "May",
//     "make-up": 8,
//     "skin-care": 68,
   
//   },
//   {
//     "month": "Jun",
//     "make-up": 153,
//     "skin-care": 191,
   
//   },
//   {
//     "month": "Jul",
//     "make-up": 169,
//     "skin-care": 180,
//     // "perfumes": 133
//   },
//   {
//     "month": "Nov",
//     "make-up": 169,
//     "skin-care": 180,
//     // "perfumes": 233
//   }
// ];

const Bar = ({ isDashbord = false }) => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch orders data from the backend
      const response = await axios.get("/api/orders"); // Adjust the endpoint accordingly
      const orders = response.data;

      // Map orders to sales data by category and month
      const categorySales = {};
      orders.forEach((order) => {
        const orderDate = new Date(order.orderDate);
        const month = orderDate.getMonth(); // Get month index (0-11)
        const year = orderDate.getFullYear();
        const category = order.category; // Assuming you have a "category" property in the order object

        // Initialize the category sales object if it doesn't exist
        if (!categorySales[category]) {
          categorySales[category] = Array(12).fill(0); // Initialize each month with 0 sales
        }

        // Accumulate the total price of the order in the corresponding month
        categorySales[category][month] += order.totalAmount; // Assuming totalAmount represents the sales
      });

      // Format data for the bar chart
      const formattedData = Object.keys(categorySales).map((category) => ({
        category,
        ...categorySales[category].map((sales, index) => ({
          month: index + 1, // Add 1 to convert month index to month number (1-12)
          sales,
        })),
      }));

      // Set the formatted data to state
      setSalesData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <Box sx={{height: isDashbord ? "295px" : "75vh",width:isDashbord ?600: 900}}>
      <ResponsiveBar
        data={salesData}
        keys={['make-up', 'skin-care']}
        indexBy="month"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={['#fce4ec', '#f8bbd0', '#f48fb1']}
       
      
        borderColor="#e57373"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'month',
          legendPosition: 'middle',
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'sales',
          legendPosition: 'middle',
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6,
            ],
          ],
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) => e.id + ": " + e.formattedValue + " in month: " + e.indexValue}
      />
    </Box>
  );
};

export default Bar;
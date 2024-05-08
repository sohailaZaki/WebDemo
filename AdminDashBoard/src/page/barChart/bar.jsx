import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, Typography, useTheme } from "@mui/material";

const data = [
  {
    "month": "Jan",
    "make-up": 84,
    "skin-care": 32,
    "perfumes": 196
  },
  {
    "month": "Feb",
    "make-up": 52,
    "skin-care": 140,
    "perfumes": 28
  },
  {
    "month": "Mar",
    "make-up": 188,
    "skin-care": 130,
    "perfumes": 170
  },
  {
    "month": "Apr",
    "make-up": 144,
    "skin-care": 168,
    "perfumes": 56
  },
  {
    "month": "May",
    "make-up": 8,
    "skin-care": 68,
    "perfumes": 4
  },
  {
    "month": "Jun",
    "make-up": 153,
    "skin-care": 191,
    "perfumes": 52
  },
  {
    "month": "Jul",
    "make-up": 169,
    "skin-care": 180,
    "perfumes": 133
  },
  {
    "month": "Nov",
    "make-up": 169,
    "skin-care": 180,
    "perfumes": 233
  }
];

const Bar = ({ isDashbord = false }) => {

  return (
    <Box sx={{height: isDashbord ? "295px" : "75vh",width:isDashbord ?600: 900}}>
      <ResponsiveBar
        data={data}
        keys={['make-up', 'skin-care', 'perfumes']}
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
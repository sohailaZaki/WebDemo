import React from "react";
import { Box } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "total sales",
    data: [
      { x: "2019", y: 120 + 100 + 80 }, // Total sales for 2019
      { x: "2020", y: 150 + 130 + 110 }, // Total sales for 2020
      { x: "2021", y: 180 + 160 + 140 }, // Total sales for 2021
      { x: "2022", y: 200 + 180 + 160 }, // Total sales for 2022
      { x: "2023", y: 220 + 200 + 180 }, // Total sales for 2023
    ],
  },
  {
    id: "makeup",
    data: [
      { x: "2019", y: 120 },
      { x: "2020", y: 150 },
      { x: "2021", y: 180 },
      { x: "2022", y: 200 },
      { x: "2023", y: 220 },
    ],
  },
  {
    id: "skincare",
    data: [
      { x: "2019", y: 100 },
      { x: "2020", y: 130 },
      { x: "2021", y: 160 },
      { x: "2022", y: 180 },
      { x: "2023", y: 200 },
    ],
  },
  {
    id: "perfume",
    data: [
      { x: "2019", y: 80 },
      { x: "2020", y: 110 },
      { x: "2021", y: 140 },
      { x: "2022", y: 160 },
      { x: "2023", y: 180 },
    ],
  },
];

const Line = ({isDahboard = false}) => {
  const colors = ["#d81b60","#f48fb1", "#f06292", "#f8bbd0"]; // Set pink color here

  return (
    <Box sx={{  height: isDahboard?  "280px"  :  "75vh" }}>
      <ResponsiveLine
        data={data}
        colors={colors}
        curve="linear"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: 0, max: "auto" }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard? null : "Year",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend:isDahboard? null : "Sales",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointBorderWidth={2}
        pointBorderColor={{ from: "color", modifiers: [] }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;

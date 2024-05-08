import React from "react";
import { ResponsivePie } from "@nivo/pie";

import { Box, useTheme } from "@mui/material";

const data = [
  {
    id: "makeup",
    label: "Make-up",
    value: 272,
    color: "hsl(107, 70%, 50%)",
  },
  {
    id: "skincare",
    label: "Skincare",
    value: 543,
    color: "hsl(64, 70%, 50%)",
  },
  {
    id: "perfumes",
    label: "Perfumes",
    value: 401,
    color: "black",
  },
 
];

const Pie = ({ isDashbord = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashbord ? "200px" : "75vh",width:isDashbord ? "580px":1100 }}>
      <ResponsivePie
        data={data}
    
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

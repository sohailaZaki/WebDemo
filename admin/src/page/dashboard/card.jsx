import React from "react";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const Card = ({ icon, title, subTitle, increase, data, scheme }) => {

 
  return (
    <Paper
      sx={{
        flexGrow: 1,
        minWidth: "333px",
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack gap={1}>
        {icon}
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {subTitle}
        </Typography>
      </Stack>

      <Stack alignItems={"center"}>
        <Box height={"70px"} width={"87px"}>
          <ResponsivePie
            data={data}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
            innerRadius={0.7}
           
            colors={{ scheme: scheme }}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
        
          />
        </Box>
        <Typography variant="body2">{increase}</Typography>
      </Stack>
    </Paper>
  );
};

export default Card;

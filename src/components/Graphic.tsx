"use client";

import { BarChart } from "@mui/x-charts/BarChart";

export const Graphic = () => {
  return (
    <BarChart
      xAxis={[
        {
          id: "barHomeWorks",
          data: ["Java", "Mobile", "Devops", "IOT", ".NET", "BDA", "QA"],
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: [1, 2, 3, 4, 5, 6, 7],
        },
      ]}
      height={300}
    />
  );
};

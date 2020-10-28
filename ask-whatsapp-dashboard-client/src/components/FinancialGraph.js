import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  LabelList,
} from "recharts";
function FinancialGraph(props) {
  return (
    <div>
      <BarChart width={730} height={380} data={props.data} barGap={10}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis
          type="number"
          domain={[0, props.searchoption === "Amount" ? 70000000 : 70]}
          tick={{ fontSize: 12 }}
          tickCount={8}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="Additional Strategy" fill="#8884d8">
          <LabelList
            dataKey="Additional Strategy"
            style={{ fontSize: "10px" }}
            position="top"
          />
        </Bar>
        <Bar dataKey="Additional Strategy with STP" fill="#f78205">
          <LabelList
            dataKey="Additional Strategy with STP"
            position="top"
            style={{ fontSize: "10px" }}
          />
        </Bar>
        <Bar dataKey="Top Up" fill="#919189">
          <LabelList
            dataKey="Top Up"
            position="top"
            style={{ fontSize: "10px" }}
          />
        </Bar>
        <Bar dataKey="Top Up with STP" fill="#ebdb34">
          <LabelList
            dataKey="Top Up with STP"
            position="top"
            style={{ fontSize: "10px" }}
          />
        </Bar>
      </BarChart>
    </div>
  );
}

export default FinancialGraph;

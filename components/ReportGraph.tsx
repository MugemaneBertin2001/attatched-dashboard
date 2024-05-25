import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, MoreVert, Sort } from "@mui/icons-material";
import SalesChart from "./SalesChart";


const ReportGraph = () => {
  return (
    <div className="bg-white relative shadow-2xl p-2 rounded-lg">
      <div className="flex justify-between items-center">
        <h5 className="text-[#080E1E] font-bold">Sales Report</h5>
        <div>
          <Tabs
            defaultValue="Value comparisson"
            className="w-[300px] hidden sm:flex"
          >
            <TabsList>
              <TabsTrigger value="Value comparisson">1 Hour</TabsTrigger>

              <TabsTrigger value="Configure Analytics">24 Hours</TabsTrigger>
              <TabsTrigger value="FIlter analytics">7 Days</TabsTrigger>
              <TabsTrigger value="FIlter analytics">1 Month</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div>
          <Download fontSize="small" />
          <Sort fontSize="small" />
          <MoreVert fontSize="small" />
        </div>
      </div>
      <div>
        <div className=" absolute left-2 top-[30%] bottom-1/2">
          <p className="text-slate-400 text-[14px]">Avg per month</p>
          <h3 className="text-[#080E1E] font-bold">$38,000</h3>
        </div>

        <SalesChart />

        <Tabs
          defaultValue="Value comparisson"
          className="w-[300px] flex sm:hidden"
        >
          <TabsList>
            <TabsTrigger value="Value comparisson">1 Hour</TabsTrigger>

            <TabsTrigger value="Configure Analytics">24 Hours</TabsTrigger>
            <TabsTrigger value="FIlter analytics">7 Days</TabsTrigger>
            <TabsTrigger value="FIlter analytics">1 Month</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default ReportGraph;
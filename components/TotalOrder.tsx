import { Star } from "@mui/icons-material";
import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";

const TotalOrder = () => {
  return (
    <div className="p-2 bg-[#DBE9F6] flex items-center justify-between rounded-lg">
      <div className="bg-white p-2 rounded-md">
        <Star fontSize="small" />
      </div>
      <div>
        <h5>Total Orders</h5>
        <p className="text-slate-400">sept 01 2023</p>
      </div>
      <AvatarGroup total={3}>
        <Avatar>A</Avatar>
        <Avatar>B</Avatar>
        <Avatar>C</Avatar>
        <Avatar>D</Avatar>
      </AvatarGroup>
    </div>
  );
};

export default TotalOrder;
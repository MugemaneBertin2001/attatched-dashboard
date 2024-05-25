import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, Rating } from "@mui/material";
import { Download, MoreVert, Sort } from "@mui/icons-material";

const orders = [
  {
    id: 2,
    customer: { avatar: "B", name: "Luna" },
    orderNumber: "34336",
    cash: "$150",
    date: "24 May",
    rating: 5,
    color: "green",
    status: "completed",
  },
  {
    id: 4,
    customer: { avatar: "Y", name: "Solomon" },
    orderNumber: "34338",
    cash: "$450",
    date: "26 May",
    rating: 4,
    color: "orange",
    status: "processing",
  },

  {
    id: 3,
    customer: { avatar: "G", name: "Stella" },
    orderNumber: "34337",
    cash: "$350",
    date: "25 May",
    rating: 3,
    color: "red",
    status: "cancelled",
  },

  {
    id: 1,
    customer: { avatar: "R", name: "Soleil" },
    orderNumber: "34335",
    cash: "$250",
    date: "23 May",
    rating: 4,
    color: "blue",
    status: "pending",
  },
];

interface IOrder {
  id: number;
  customer: any;
  orderNumber: string;
  cash: string;
  date: string;
  rating: 4;
  color: string;
  status: string;
}

const HandleColor = ({ order }: { order: IOrder }) => {
  return (
    <>
      {order.status === "pending" ? (
        <>
          <p className="bg-blue-500 w-2 h-2 rounded-full"></p>
          <p className="text-blue-500">{order.status}</p>
        </>
      ) : order.status === "completed" ? (
        <>
          <p className="bg-green-500 w-2 h-2 rounded-full"></p>
          <p className="text-green-500">{order.status}</p>
        </>
      ) : order.status === "processing" ? (
        <>
          <p className="bg-orange-500 w-2 h-2 rounded-full"></p>
          <p className="text-orange-500">{order.status}</p>
        </>
      ) : (
        <>
          <p className="bg-red-500 w-2 h-2 rounded-full"></p>
          <p className="text-red-500">{order.status}</p>
        </>
      )}
    </>
  );
};

const Orders = () => {
  return (
    <div className=" mt-6 bg-white shadow-2xl p-2 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h5>Orders List</h5>
        <div>
          {/* < */}
          {/* <catching */}
          <Download fontSize="small" />
          <Sort fontSize="small" />
          <MoreVert fontSize="small" />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">No</TableHead>
            <TableHead className="text-right">Customer</TableHead>
            <TableHead>Order</TableHead>
            <TableHead className="text-right">Cash</TableHead>
            <TableHead className="text-right">Date</TableHead>
            <TableHead className="text-right">Rating</TableHead>
            <TableHead className="text-right ">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="flex items-center gap-1">
                <Avatar className="">{order.customer.avatar}</Avatar>
                <p>{order.customer.name}</p>
              </TableCell>
              <TableCell className="text-blue-400">
                {order.orderNumber}
              </TableCell>
              <TableCell className="text-right">{order.cash}</TableCell>
              <TableCell className=" text-[12px]">
                {order.date}
              </TableCell>
              <TableCell className="text-right">
                <Rating value={order.rating} size="small" />
              </TableCell>
              <TableCell className={"text-right flex items-center gap-1"}>
                {
                  //@ts-ignore
                  <HandleColor order={order} />
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Orders;
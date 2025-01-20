import { DashboardLayout } from "@/components/DashboardLayout";
import { AssignDeliveryDialog } from "@/components/AssignDeliveryDialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

const Delivery = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const deliveries = [
    {
      id: "DEL001",
      orderId: "ORD001",
      customer: "Ahmed Khan",
      address: "123 Main St, Karachi",
      status: "In Transit",
      courier: "TCS",
      trackingNo: "TCS123456",
    },
    {
      id: "DEL002",
      orderId: "ORD002",
      customer: "Muhammad Ali",
      address: "456 Park Road, Lahore",
      status: "Delivered",
      courier: "Leopards",
      trackingNo: "LEO789012",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Deliveries</h2>
          <AssignDeliveryDialog />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search deliveries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Delivery ID</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Courier</TableHead>
                <TableHead>Tracking No.</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliveries.map((delivery) => (
                <TableRow key={delivery.id}>
                  <TableCell>{delivery.id}</TableCell>
                  <TableCell>{delivery.orderId}</TableCell>
                  <TableCell>{delivery.customer}</TableCell>
                  <TableCell>{delivery.address}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        delivery.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {delivery.status}
                    </span>
                  </TableCell>
                  <TableCell>{delivery.courier}</TableCell>
                  <TableCell>{delivery.trackingNo}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Track
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Delivery;
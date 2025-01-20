import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsCard } from "@/components/StatsCard";
import { Package2, ShoppingCart, TrendingUp, Truck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4500 },
  { name: "May", sales: 6000 },
  { name: "Jun", sales: 5500 },
];

const lowStockItems = [
  { name: "Regular Boxes", quantity: 5, threshold: 10 },
  { name: "Premium Boxes", quantity: 15, threshold: 20 },
  { name: "Marketing Flyers", quantity: 20, threshold: 30 },
];

const Index = () => {
  const { toast } = useToast();

  const handleReorder = (itemName: string) => {
    toast({
      title: "Reorder Initiated",
      description: `A reorder request has been created for ${itemName}.`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Inventory"
            value="1,234"
            icon={<Package2 className="h-4 w-4 text-primary" />}
            description="+20.1% from last month"
          />
          <StatsCard
            title="Orders"
            value="23"
            icon={<ShoppingCart className="h-4 w-4 text-secondary" />}
            description="12 pending delivery"
          />
          <StatsCard
            title="Deliveries"
            value="18"
            icon={<Truck className="h-4 w-4 text-primary" />}
            description="5 in transit"
          />
          <StatsCard
            title="Revenue"
            value="PKR 45,231"
            icon={<TrendingUp className="h-4 w-4 text-secondary" />}
            description="+15% vs last week"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>Monthly sales performance</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#0F766E"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Low Stock Alert</CardTitle>
              <CardDescription>Items requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lowStockItems.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <p className="text-sm text-muted-foreground">
                        {item.quantity} left
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleReorder(item.name)}
                    >
                      Reorder
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
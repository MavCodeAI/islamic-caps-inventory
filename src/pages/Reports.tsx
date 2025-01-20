import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Download, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
];

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Reports
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Revenue"
            value="PKR 150,000"
            icon={<TrendingUp className="h-4 w-4 text-primary" />}
            description="+20.1% from last month"
          />
          <StatsCard
            title="Average Order Value"
            value="PKR 2,500"
            icon={<BarChart3 className="h-4 w-4 text-secondary" />}
            description="+5% from last month"
          />
          <StatsCard
            title="Orders This Month"
            value="45"
            icon={<BarChart3 className="h-4 w-4 text-primary" />}
            description="+12% from last month"
          />
          <StatsCard
            title="Active Customers"
            value="120"
            icon={<BarChart3 className="h-4 w-4 text-secondary" />}
            description="+8% from last month"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#0F766E" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Premium Prayer Cap (Black)</span>
                  <span className="text-sm text-muted-foreground">45 units</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Regular Prayer Cap (White)</span>
                  <span className="text-sm text-muted-foreground">38 units</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Premium Prayer Cap (Navy)</span>
                  <span className="text-sm text-muted-foreground">32 units</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
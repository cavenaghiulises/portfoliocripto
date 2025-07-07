
import { useState, useEffect, useRef } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { cn } from "@/lib/utils";

interface AllocationChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  className?: string;
}

const AllocationChart = ({ data, className }: AllocationChartProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
          <p className="text-sm font-medium text-black">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  // Sort data by value (highest first)
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  return (
    <div
      ref={chartRef}
      className={cn(
        "relative flex flex-col items-center",
        isVisible ? "opacity-100" : "opacity-0",
        "transition-opacity duration-1000",
        className
      )}
    >
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={sortedData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              innerRadius={60}
              fill="#8884d8"
              dataKey="value"
              animationBegin={0}
              animationDuration={1200}
              strokeWidth={2}
              stroke="#fff"
            >
              {sortedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-md">
        {sortedData.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-sm font-medium ml-auto">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllocationChart;

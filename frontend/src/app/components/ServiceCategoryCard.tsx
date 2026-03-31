import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router";

interface ServiceCategoryCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  workerCount: number;
}

export function ServiceCategoryCard({
  title,
  icon: Icon,
  description,
  workerCount,
}: ServiceCategoryCardProps) {
  return (
    <Link to={`/customer/search?category=${title}`}>
      <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon size={32} className="text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          <p className="text-sm text-blue-600 font-medium">
            {workerCount}+ verified workers
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

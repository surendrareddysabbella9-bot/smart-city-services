import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, MapPin, Briefcase, Shield } from "lucide-react";
import { Link } from "react-router";

interface WorkerCardProps {
  id: string;
  name: string;
  category: string;
  location: string;
  experience: string;
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  imageUrl?: string;
  hourlyRate?: string;
}

export function WorkerCard({
  id,
  name,
  category,
  location,
  experience,
  rating,
  reviewCount,
  isVerified,
  imageUrl,
  hourlyRate,
}: WorkerCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          {/* Worker Image */}
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-2xl font-semibold text-gray-500">
                {name.charAt(0)}
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            {/* Name and Verification Badge */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-lg">{name}</h3>
              {isVerified && (
                <Badge className="bg-green-100 text-green-800 border-green-200 flex items-center gap-1 flex-shrink-0">
                  <Shield size={12} />
                  Verified
                </Badge>
              )}
            </div>

            {/* Category */}
            <p className="text-blue-600 font-medium">{category}</p>

            {/* Location */}
            <div className="flex items-center text-sm text-gray-600 mt-2">
              <MapPin size={14} className="mr-1" />
              {location}
            </div>

            {/* Experience */}
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <Briefcase size={14} className="mr-1" />
              {experience}
            </div>

            {/* Rating */}
            <div className="flex items-center mt-2">
              <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                <Star size={14} className="text-yellow-500 fill-yellow-500 mr-1" />
                <span className="font-semibold">{rating.toFixed(1)}</span>
              </div>
              <span className="text-sm text-gray-500 ml-2">
                ({reviewCount} reviews)
              </span>
            </div>

            {/* Hourly Rate */}
            {hourlyRate && (
              <p className="text-sm font-medium mt-2">
                <span className="text-gray-600">Rate:</span>{" "}
                <span className="text-gray-900">{hourlyRate}</span>
              </p>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0 flex gap-2">
        <Link to={`/customer/worker/${id}`} className="flex-1">
          <Button variant="outline" className="w-full">
            View Profile
          </Button>
        </Link>
        <Link to={`/customer/book/${id}`} className="flex-1">
          <Button className="w-full">Book Now</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

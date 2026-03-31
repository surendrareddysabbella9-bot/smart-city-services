import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { WorkerCard } from "../../components/WorkerCard";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

export function SearchWorkers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Mock data - replace with API call to your backend
  const workers = [
    {
      id: "1",
      name: "Rajesh Kumar",
      category: "Electrician",
      location: "Mumbai, Maharashtra",
      experience: "8 years experience",
      rating: 4.8,
      reviewCount: 156,
      isVerified: true,
      hourlyRate: "₹500/hour",
    },
    {
      id: "2",
      name: "Amit Sharma",
      category: "Plumber",
      location: "Delhi",
      experience: "5 years experience",
      rating: 4.6,
      reviewCount: 89,
      isVerified: true,
      hourlyRate: "₹400/hour",
    },
    {
      id: "3",
      name: "Suresh Patel",
      category: "Construction",
      location: "Pune, Maharashtra",
      experience: "12 years experience",
      rating: 4.9,
      reviewCount: 234,
      isVerified: true,
      hourlyRate: "₹600/hour",
    },
    {
      id: "4",
      name: "Vijay Singh",
      category: "Painter",
      location: "Bangalore, Karnataka",
      experience: "6 years experience",
      rating: 4.7,
      reviewCount: 112,
      isVerified: true,
      hourlyRate: "₹450/hour",
    },
    {
      id: "5",
      name: "Ramesh Verma",
      category: "Carpenter",
      location: "Mumbai, Maharashtra",
      experience: "10 years experience",
      rating: 4.8,
      reviewCount: 178,
      isVerified: true,
      hourlyRate: "₹550/hour",
    },
    {
      id: "6",
      name: "Prakash Joshi",
      category: "Mechanic",
      location: "Chennai, Tamil Nadu",
      experience: "7 years experience",
      rating: 4.5,
      reviewCount: 95,
      isVerified: true,
      hourlyRate: "₹500/hour",
    },
  ];

  const categories = [
    "All Categories",
    "Electrician",
    "Plumber",
    "Construction",
    "Painter",
    "Carpenter",
    "Mechanic",
  ];

  const locations = [
    "All Locations",
    "Mumbai",
    "Delhi",
    "Pune",
    "Bangalore",
    "Chennai",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-1">
        {/* Search Header */}
        <div className="bg-white border-b py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Find Verified Workers</h1>

            {/* Search and Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Search by name, skills, or keywords..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category.toLowerCase().replace(" ", "-")}
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem
                      key={location}
                      value={location.toLowerCase().replace(" ", "-")}
                    >
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Filter size={16} className="text-gray-600" />
              <span className="text-sm text-gray-600">
                Showing {workers.length} verified workers
              </span>
            </div>
          </div>
        </div>

        {/* Workers Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workers.map((worker) => (
              <WorkerCard key={worker.id} {...worker} />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Load More Workers
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

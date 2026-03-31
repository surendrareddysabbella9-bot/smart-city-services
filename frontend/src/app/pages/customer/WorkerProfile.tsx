import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { RatingDisplay } from "../../components/RatingDisplay";
import { useParams, Link } from "react-router";
import {
  MapPin,
  Briefcase,
  Shield,
  Star,
  Phone,
  Mail,
  Calendar,
  Award,
} from "lucide-react";

export function WorkerProfile() {
  const { id } = useParams();

  // Mock data - replace with API call to your backend
  const worker = {
    id: id,
    name: "Rajesh Kumar",
    category: "Electrician",
    location: "Mumbai, Maharashtra",
    experience: "8 years",
    rating: 4.8,
    reviewCount: 156,
    isVerified: true,
    hourlyRate: "₹500/hour",
    phone: "+91 98765 43210",
    email: "rajesh.kumar@example.com",
    joinedDate: "January 2020",
    completedJobs: 342,
    skills: [
      "Electrical Wiring",
      "Circuit Installation",
      "Fault Diagnosis",
      "Safety Compliance",
      "Residential Wiring",
      "Commercial Projects",
    ],
    description:
      "Experienced electrician with 8 years of expertise in residential and commercial electrical work. Specialized in electrical installations, repairs, and maintenance. Safety-first approach with all required certifications.",
    reviews: [
      {
        id: 1,
        customerName: "Priya Sharma",
        rating: 5,
        date: "March 15, 2026",
        comment:
          "Excellent work! Very professional and completed the job on time. Highly recommended.",
      },
      {
        id: 2,
        customerName: "Anil Gupta",
        rating: 5,
        date: "March 10, 2026",
        comment:
          "Great service. Fixed all electrical issues in my home. Will hire again.",
      },
      {
        id: 3,
        customerName: "Sneha Patel",
        rating: 4,
        date: "March 5, 2026",
        comment:
          "Good work, professional attitude. Arrived on time and completed the work efficiently.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Worker Header Card */}
          <Card className="mb-6">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Worker Image */}
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl font-semibold text-gray-500">
                    {worker.name.charAt(0)}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl font-bold">{worker.name}</h1>
                        {worker.isVerified && (
                          <Badge className="bg-green-100 text-green-800 border-green-200 flex items-center gap-1">
                            <Shield size={14} />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-xl text-blue-600 font-medium mb-3">
                        {worker.category}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {worker.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} />
                          {worker.experience} experience
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          Joined {worker.joinedDate}
                        </div>
                      </div>

                      <RatingDisplay
                        rating={worker.rating}
                        reviewCount={worker.reviewCount}
                        size={20}
                      />
                    </div>

                    <div className="text-right">
                      <p className="text-3xl font-bold text-gray-900 mb-2">
                        {worker.hourlyRate}
                      </p>
                      <Link to={`/customer/book/${worker.id}`}>
                        <Button size="lg" className="w-full md:w-auto">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="mx-auto mb-2 text-blue-600" size={32} />
                <p className="text-3xl font-bold">{worker.completedJobs}</p>
                <p className="text-gray-600">Completed Jobs</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="mx-auto mb-2 text-yellow-500" size={32} />
                <p className="text-3xl font-bold">{worker.rating}</p>
                <p className="text-gray-600">Average Rating</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="mx-auto mb-2 text-green-600" size={32} />
                <p className="text-3xl font-bold">Verified</p>
                <p className="text-gray-600">Admin Verified</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="about" className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({worker.reviewCount})</TabsTrigger>
            </TabsList>

            <TabsContent value="about">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">About {worker.name}</h2>
                  <p className="text-gray-700 mb-6">{worker.description}</p>

                  <h3 className="font-semibold mb-3">Contact Information</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Phone size={18} />
                      <span>{worker.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={18} />
                      <span>{worker.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>{worker.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skills">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Skills & Expertise</h2>
                  <div className="flex flex-wrap gap-2">
                    {worker.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-4 py-2 text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Customer Reviews & Ratings
                  </h2>
                  <div className="space-y-6">
                    {worker.reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6 last:border-b-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-semibold">{review.customerName}</p>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                          <RatingDisplay
                            rating={review.rating}
                            showNumber={false}
                            size={16}
                          />
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Book Now CTA */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                Ready to book {worker.name}?
              </h3>
              <p className="text-gray-600 mb-4">
                Book now and get your work done by a verified professional
              </p>
              <Link to={`/customer/book/${worker.id}`}>
                <Button size="lg">Book This Worker</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}

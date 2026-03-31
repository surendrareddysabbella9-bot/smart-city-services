import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { StatusBadge } from "../../components/StatusBadge";
import { Calendar, MapPin, User, Phone, Clock, Star } from "lucide-react";
import { Link } from "react-router";

export function CustomerDashboard() {
  // Mock data - replace with API call to your backend
  const customerName = "Priya Sharma";

  const bookings = {
    upcoming: [
      {
        id: "1",
        workerName: "Rajesh Kumar",
        category: "Electrician",
        date: "April 5, 2026",
        time: "10:00 AM",
        duration: "2 hours",
        status: "pending" as const,
        address: "123 Main Street, Mumbai",
        phone: "+91 98765 43210",
      },
      {
        id: "2",
        workerName: "Amit Sharma",
        category: "Plumber",
        date: "April 8, 2026",
        time: "2:00 PM",
        duration: "3 hours",
        status: "verified" as const,
        address: "456 Park Avenue, Mumbai",
        phone: "+91 98765 43211",
      },
    ],
    completed: [
      {
        id: "3",
        workerName: "Suresh Patel",
        category: "Construction",
        date: "March 25, 2026",
        time: "9:00 AM",
        duration: "5 hours",
        status: "completed" as const,
        address: "789 Lake Road, Mumbai",
        phone: "+91 98765 43212",
        rating: 5,
        hasReview: true,
      },
      {
        id: "4",
        workerName: "Vijay Singh",
        category: "Painter",
        date: "March 20, 2026",
        time: "11:00 AM",
        duration: "4 hours",
        status: "completed" as const,
        address: "321 Garden Street, Mumbai",
        phone: "+91 98765 43213",
        rating: 4,
        hasReview: true,
      },
    ],
  };

  const stats = {
    totalBookings: 15,
    completedJobs: 13,
    upcomingBookings: 2,
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {customerName}!</h1>
            <p className="text-gray-600">Manage your bookings and service history</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-2">Total Bookings</p>
                <p className="text-4xl font-bold">{stats.totalBookings}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-2">Completed Jobs</p>
                <p className="text-4xl font-bold text-green-600">
                  {stats.completedJobs}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-2">Upcoming</p>
                <p className="text-4xl font-bold text-blue-600">
                  {stats.upcomingBookings}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Action */}
          <Card className="mb-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Need a service?</h3>
                  <p className="text-blue-100">
                    Find and book verified workers for any service you need
                  </p>
                </div>
                <Link to="/customer/search">
                  <Button size="lg" variant="secondary">
                    Find Workers
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Bookings Tabs */}
          <Tabs defaultValue="upcoming">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="upcoming">
                Upcoming Bookings ({bookings.upcoming.length})
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed ({bookings.completed.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <div className="space-y-4">
                {bookings.upcoming.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold mb-1">
                                {booking.workerName}
                              </h3>
                              <p className="text-blue-600 font-medium">
                                {booking.category}
                              </p>
                            </div>
                            <StatusBadge status={booking.status} />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>{booking.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={16} />
                              <span>
                                {booking.time} ({booking.duration})
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>{booking.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone size={16} />
                              <span>{booking.phone}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Link to={`/customer/worker/${booking.id}`}>
                            <Button variant="outline" className="w-full">
                              View Profile
                            </Button>
                          </Link>
                          <Button variant="outline" className="w-full">
                            Contact Worker
                          </Button>
                          <Button variant="outline" className="w-full text-red-600 hover:text-red-700">
                            Cancel Booking
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {bookings.upcoming.length === 0 && (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <p className="text-gray-500 mb-4">No upcoming bookings</p>
                      <Link to="/customer/search">
                        <Button>Find Workers</Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent value="completed">
              <div className="space-y-4">
                {bookings.completed.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold mb-1">
                                {booking.workerName}
                              </h3>
                              <p className="text-blue-600 font-medium">
                                {booking.category}
                              </p>
                            </div>
                            <StatusBadge status={booking.status} />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>{booking.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={16} />
                              <span>
                                {booking.time} ({booking.duration})
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>{booking.address}</span>
                            </div>
                          </div>

                          {booking.rating && (
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">Your rating:</span>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={16}
                                    className={
                                      i < booking.rating!
                                        ? "text-yellow-500 fill-yellow-500"
                                        : "text-gray-300"
                                    }
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col gap-2">
                          <Link to={`/customer/worker/${booking.id}`}>
                            <Button variant="outline" className="w-full">
                              View Profile
                            </Button>
                          </Link>
                          <Button className="w-full">Book Again</Button>
                          {!booking.hasReview && (
                            <Button variant="outline" className="w-full">
                              Write Review
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}

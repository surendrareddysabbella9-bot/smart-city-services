import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Input } from "../../components/ui/input";
import { StatusBadge } from "../../components/StatusBadge";
import {
  Users,
  UserCheck,
  Briefcase,
  TrendingUp,
  Search,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Calendar,
  Eye,
  Mail,
  Phone,
} from "lucide-react";
import { useState } from "react";

export function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - replace with API calls to your backend
  const stats = {
    totalWorkers: 1230,
    verifiedWorkers: 1050,
    pendingVerification: 45,
    totalBookings: 4580,
    activeBookings: 120,
    completedBookings: 4360,
    monthlyRevenue: "₹22,90,000",
  };

  const pendingWorkers = [
    {
      id: "1",
      name: "Mohan Kumar",
      category: "Electrician",
      location: "Mumbai, Maharashtra",
      experience: "6 years",
      email: "mohan.kumar@example.com",
      phone: "+91 98765 11111",
      registeredDate: "March 28, 2026",
      skills: ["Electrical Wiring", "Circuit Installation", "Maintenance"],
    },
    {
      id: "2",
      name: "Deepak Singh",
      category: "Plumber",
      location: "Delhi",
      experience: "4 years",
      email: "deepak.singh@example.com",
      phone: "+91 98765 22222",
      registeredDate: "March 29, 2026",
      skills: ["Pipe Fitting", "Leak Repair", "Installation"],
    },
    {
      id: "3",
      name: "Ravi Sharma",
      category: "Carpenter",
      location: "Bangalore, Karnataka",
      experience: "8 years",
      email: "ravi.sharma@example.com",
      phone: "+91 98765 33333",
      registeredDate: "March 30, 2026",
      skills: ["Furniture Making", "Wood Work", "Cabinet Installation"],
    },
  ];

  const recentBookings = [
    {
      id: "1",
      customerName: "Priya Sharma",
      workerName: "Rajesh Kumar",
      category: "Electrician",
      date: "April 2, 2026",
      status: "completed" as const,
      amount: "₹1,000",
    },
    {
      id: "2",
      customerName: "Anil Gupta",
      workerName: "Amit Sharma",
      category: "Plumber",
      date: "April 1, 2026",
      status: "verified" as const,
      amount: "₹800",
    },
    {
      id: "3",
      customerName: "Sneha Patel",
      workerName: "Suresh Patel",
      category: "Construction",
      date: "April 1, 2026",
      status: "pending" as const,
      amount: "₹3,000",
    },
  ];

  const disputes = [
    {
      id: "1",
      bookingId: "BK-4523",
      customerName: "Meera Reddy",
      workerName: "Vijay Singh",
      category: "Painter",
      reason: "Work quality issue",
      date: "March 31, 2026",
      status: "open",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage workers, bookings, and platform operations</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Users className="text-blue-600" size={24} />
                  <Badge variant="secondary">{stats.pendingVerification} pending</Badge>
                </div>
                <p className="text-3xl font-bold mb-1">{stats.totalWorkers}</p>
                <p className="text-sm text-gray-600">Total Workers</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <UserCheck className="text-green-600" size={24} />
                </div>
                <p className="text-3xl font-bold mb-1">{stats.verifiedWorkers}</p>
                <p className="text-sm text-gray-600">Verified Workers</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Briefcase className="text-purple-600" size={24} />
                  <Badge variant="secondary">{stats.activeBookings} active</Badge>
                </div>
                <p className="text-3xl font-bold mb-1">{stats.totalBookings}</p>
                <p className="text-sm text-gray-600">Total Bookings</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="text-orange-600" size={24} />
                </div>
                <p className="text-3xl font-bold mb-1">{stats.monthlyRevenue}</p>
                <p className="text-sm text-gray-600">Monthly Revenue</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Tabs */}
          <Tabs defaultValue="verification">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="verification">
                Worker Verification ({pendingWorkers.length})
              </TabsTrigger>
              <TabsTrigger value="bookings">
                Bookings ({recentBookings.length})
              </TabsTrigger>
              <TabsTrigger value="disputes">
                Disputes ({disputes.length})
              </TabsTrigger>
            </TabsList>

            {/* Worker Verification Tab */}
            <TabsContent value="verification">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CardTitle>Pending Worker Verifications</CardTitle>
                    <div className="relative w-full md:w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        type="text"
                        placeholder="Search workers..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {pendingWorkers.map((worker) => (
                      <div key={worker.id} className="border rounded-lg p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-semibold mb-1">
                                  {worker.name}
                                </h3>
                                <p className="text-blue-600 font-medium">{worker.category}</p>
                              </div>
                              <Badge variant="secondary">Pending</Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                              <div className="flex items-center gap-2">
                                <Mail size={16} />
                                <span>{worker.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone size={16} />
                                <span>{worker.phone}</span>
                              </div>
                              <div>
                                <strong>Location:</strong> {worker.location}
                              </div>
                              <div>
                                <strong>Experience:</strong> {worker.experience}
                              </div>
                              <div className="md:col-span-2">
                                <strong>Registered:</strong> {worker.registeredDate}
                              </div>
                            </div>

                            <div className="mb-3">
                              <p className="text-sm font-medium mb-2">Skills:</p>
                              <div className="flex flex-wrap gap-2">
                                {worker.skills.map((skill) => (
                                  <Badge key={skill} variant="outline">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex lg:flex-col gap-2">
                            <Button className="flex-1 lg:w-40">
                              <CheckCircle size={16} className="mr-2" />
                              Approve
                            </Button>
                            <Button variant="outline" className="flex-1 lg:w-40">
                              <Eye size={16} className="mr-2" />
                              View Details
                            </Button>
                            <Button variant="outline" className="flex-1 lg:w-40 text-red-600 hover:text-red-700">
                              <XCircle size={16} className="mr-2" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Bookings Tab */}
            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <p className="font-semibold">
                                  {booking.customerName} → {booking.workerName}
                                </p>
                                <p className="text-sm text-gray-600">{booking.category}</p>
                              </div>
                              <StatusBadge status={booking.status} />
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                {booking.date}
                              </div>
                              <div>
                                <strong>Amount:</strong> {booking.amount}
                              </div>
                            </div>
                          </div>

                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button variant="outline">View All Bookings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Disputes Tab */}
            <TabsContent value="disputes">
              <Card>
                <CardHeader>
                  <CardTitle>Active Disputes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {disputes.map((dispute) => (
                      <div key={dispute.id} className="border rounded-lg p-6 border-yellow-200 bg-yellow-50">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-3">
                              <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                              <div>
                                <p className="font-semibold text-lg mb-1">
                                  Booking #{dispute.bookingId}
                                </p>
                                <p className="text-sm text-gray-700">
                                  <strong>Customer:</strong> {dispute.customerName} |{" "}
                                  <strong>Worker:</strong> {dispute.workerName}
                                </p>
                              </div>
                            </div>

                            <div className="space-y-2 text-sm">
                              <div>
                                <strong>Service:</strong> {dispute.category}
                              </div>
                              <div>
                                <strong>Reason:</strong> {dispute.reason}
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar size={14} />
                                <span>{dispute.date}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex lg:flex-col gap-2">
                            <Button className="flex-1 lg:w-40">Investigate</Button>
                            <Button variant="outline" className="flex-1 lg:w-40">
                              Contact Parties
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}

                    {disputes.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        No active disputes
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Analytics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b">
                    <span className="text-gray-600">Worker Growth (This Month)</span>
                    <span className="font-semibold text-green-600">+12%</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b">
                    <span className="text-gray-600">Booking Growth (This Month)</span>
                    <span className="font-semibold text-green-600">+18%</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b">
                    <span className="text-gray-600">Average Rating</span>
                    <span className="font-semibold">4.7 ⭐</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="font-semibold text-green-600">94%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b">
                    <span className="text-gray-600">Electrician</span>
                    <span className="font-semibold">1,245 bookings</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b">
                    <span className="text-gray-600">Plumber</span>
                    <span className="font-semibold">987 bookings</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b">
                    <span className="text-gray-600">Construction</span>
                    <span className="font-semibold">856 bookings</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Painter</span>
                    <span className="font-semibold">734 bookings</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

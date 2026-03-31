import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { StatusBadge } from "../../components/StatusBadge";
import {
  Calendar,
  MapPin,
  Clock,
  Star,
  Briefcase,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";

export function WorkerDashboard() {
  // Mock data - replace with API call to your backend
  const worker = {
    name: "Rajesh Kumar",
    category: "Electrician",
    verificationStatus: "verified" as const,
    rating: 4.8,
    reviewCount: 156,
    completedJobs: 342,
    totalEarnings: "₹1,71,000",
    monthlyEarnings: "₹42,500",
  };

  const jobRequests = {
    pending: [
      {
        id: "1",
        customerName: "Priya Sharma",
        service: "Electrical Wiring",
        date: "April 5, 2026",
        time: "10:00 AM",
        duration: "2 hours",
        address: "123 Main Street, Mumbai",
        estimatedPay: "₹1,000",
        description: "Need electrical wiring for new room installation",
      },
      {
        id: "2",
        customerName: "Anil Gupta",
        service: "Circuit Repair",
        date: "April 6, 2026",
        time: "3:00 PM",
        duration: "1 hour",
        address: "456 Park Avenue, Mumbai",
        estimatedPay: "₹500",
        description: "Circuit breaker keeps tripping, need diagnosis and repair",
      },
    ],
    accepted: [
      {
        id: "3",
        customerName: "Sneha Patel",
        service: "Home Wiring Inspection",
        date: "April 4, 2026",
        time: "2:00 PM",
        duration: "3 hours",
        address: "789 Lake Road, Mumbai",
        estimatedPay: "₹1,500",
        phone: "+91 98765 00001",
      },
    ],
    completed: [
      {
        id: "4",
        customerName: "Vikram Singh",
        service: "Fan Installation",
        date: "March 30, 2026",
        completedDate: "March 30, 2026",
        duration: "1 hour",
        payment: "₹500",
        rating: 5,
      },
      {
        id: "5",
        customerName: "Meera Reddy",
        service: "Electrical Panel Upgrade",
        date: "March 28, 2026",
        completedDate: "March 28, 2026",
        duration: "4 hours",
        payment: "₹2,000",
        rating: 5,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome, {worker.name}!</h1>
                <p className="text-gray-600">{worker.category}</p>
              </div>
              <StatusBadge status={worker.verificationStatus} />
            </div>
          </div>

          {/* Verification Alert */}
          {worker.verificationStatus === "pending" && (
            <Card className="mb-8 border-yellow-200 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Verification Pending</h3>
                    <p className="text-sm text-gray-700">
                      Your profile is under review by our admin team. You'll be able to
                      accept job requests once verified.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <p className="text-3xl font-bold mb-1">{worker.completedJobs}</p>
                <p className="text-sm text-gray-600">Completed Jobs</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Star className="text-yellow-500" size={24} />
                </div>
                <p className="text-3xl font-bold mb-1">{worker.rating}</p>
                <p className="text-sm text-gray-600">
                  Average Rating ({worker.reviewCount} reviews)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="text-green-600" size={24} />
                </div>
                <p className="text-3xl font-bold mb-1">{worker.monthlyEarnings}</p>
                <p className="text-sm text-gray-600">This Month</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="text-purple-600" size={24} />
                </div>
                <p className="text-3xl font-bold mb-1">{worker.totalEarnings}</p>
                <p className="text-sm text-gray-600">Total Earnings</p>
              </CardContent>
            </Card>
          </div>

          {/* Job Requests Tabs */}
          <Tabs defaultValue="pending">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="pending">
                New Requests ({jobRequests.pending.length})
              </TabsTrigger>
              <TabsTrigger value="accepted">
                Accepted ({jobRequests.accepted.length})
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed ({jobRequests.completed.length})
              </TabsTrigger>
            </TabsList>

            {/* Pending Requests */}
            <TabsContent value="pending">
              <div className="space-y-4">
                {jobRequests.pending.map((request) => (
                  <Card key={request.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold mb-1">
                                {request.service}
                              </h3>
                              <p className="text-gray-600">
                                Requested by {request.customerName}
                              </p>
                            </div>
                            <Badge variant="secondary" className="text-lg px-3 py-1">
                              {request.estimatedPay}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>{request.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={16} />
                              <span>
                                {request.time} ({request.duration})
                              </span>
                            </div>
                            <div className="flex items-center gap-2 md:col-span-2">
                              <MapPin size={16} />
                              <span>{request.address}</span>
                            </div>
                          </div>

                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm font-medium mb-1">Job Description:</p>
                            <p className="text-sm text-gray-700">{request.description}</p>
                          </div>
                        </div>

                        <div className="flex lg:flex-col gap-2">
                          <Button className="flex-1 lg:w-32">
                            <CheckCircle size={16} className="mr-2" />
                            Accept
                          </Button>
                          <Button variant="outline" className="flex-1 lg:w-32">
                            <XCircle size={16} className="mr-2" />
                            Decline
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {jobRequests.pending.length === 0 && (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <p className="text-gray-500">No pending job requests</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Accepted Jobs */}
            <TabsContent value="accepted">
              <div className="space-y-4">
                {jobRequests.accepted.map((job) => (
                  <Card key={job.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold mb-1">{job.service}</h3>
                              <p className="text-gray-600">Customer: {job.customerName}</p>
                            </div>
                            <StatusBadge status="verified" />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>{job.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={16} />
                              <span>
                                {job.time} ({job.duration})
                              </span>
                            </div>
                            <div className="flex items-center gap-2 md:col-span-2">
                              <MapPin size={16} />
                              <span>{job.address}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <Badge variant="secondary" className="text-base px-3 py-1">
                              {job.estimatedPay}
                            </Badge>
                            <span className="text-sm text-gray-600">Phone: {job.phone}</span>
                          </div>
                        </div>

                        <div className="flex lg:flex-col gap-2">
                          <Button className="flex-1 lg:w-40">Mark Complete</Button>
                          <Button variant="outline" className="flex-1 lg:w-40">
                            Contact Customer
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {jobRequests.accepted.length === 0 && (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <p className="text-gray-500">No accepted jobs</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Completed Jobs */}
            <TabsContent value="completed">
              <div className="space-y-4">
                {jobRequests.completed.map((job) => (
                  <Card key={job.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold mb-1">{job.service}</h3>
                              <p className="text-gray-600">Customer: {job.customerName}</p>
                            </div>
                            <StatusBadge status="completed" />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>Completed: {job.completedDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={16} />
                              <span>Duration: {job.duration}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <Badge className="bg-green-100 text-green-800 text-base px-3 py-1">
                              Paid: {job.payment}
                            </Badge>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className={
                                    i < job.rating
                                      ? "text-yellow-500 fill-yellow-500"
                                      : "text-gray-300"
                                  }
                                />
                              ))}
                            </div>
                          </div>
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

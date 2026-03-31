import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { Calendar, Clock, Shield } from "lucide-react";
import { toast } from "sonner";

export function BookWorker() {
  const { workerId } = useParams();
  const navigate = useNavigate();

  // Mock worker data - replace with API call
  const worker = {
    id: workerId,
    name: "Rajesh Kumar",
    category: "Electrician",
    hourlyRate: "₹500/hour",
    isVerified: true,
  };

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    duration: "",
    address: "",
    description: "",
    contactPhone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your backend API
    console.log("Booking request:", { workerId, ...formData });
    toast.success("Booking request submitted successfully!");
    navigate("/customer/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">Book Worker</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Service Booking Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="time">Preferred Time</Label>
                        <Input
                          id="time"
                          type="time"
                          value={formData.time}
                          onChange={(e) =>
                            setFormData({ ...formData, time: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="duration">Expected Duration (hours)</Label>
                      <Input
                        id="duration"
                        type="number"
                        placeholder="e.g., 2"
                        value={formData.duration}
                        onChange={(e) =>
                          setFormData({ ...formData, duration: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">Service Address</Label>
                      <Input
                        id="address"
                        type="text"
                        placeholder="Enter complete address"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="contactPhone">Contact Phone</Label>
                      <Input
                        id="contactPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.contactPhone}
                        onChange={(e) =>
                          setFormData({ ...formData, contactPhone: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Work Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the work you need done..."
                        rows={5}
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Note:</strong> Your booking request will be sent to the
                        worker. They will contact you to confirm the booking and
                        finalize the details.
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" className="flex-1">
                        Send Booking Request
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => navigate(-1)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Worker Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Worker Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-lg">{worker.name}</p>
                      {worker.isVerified && (
                        <Badge className="bg-green-100 text-green-800 border-green-200 flex items-center gap-1">
                          <Shield size={12} />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-blue-600 font-medium">{worker.category}</p>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 mb-2">Rate</p>
                    <p className="text-2xl font-bold">{worker.hourlyRate}</p>
                  </div>

                  <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={16} />
                      <span>Choose your preferred date</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={16} />
                      <span>Flexible timing available</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Shield size={16} />
                      <span>Admin verified worker</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-1">Estimated Cost</p>
                    <p className="text-xs text-gray-600 mb-2">
                      Based on expected duration
                    </p>
                    {formData.duration && (
                      <p className="text-2xl font-bold text-blue-600">
                        ₹{parseInt(formData.duration) * 500}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

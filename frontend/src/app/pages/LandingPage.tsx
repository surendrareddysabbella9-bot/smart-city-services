import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ServiceCategoryCard } from "../components/ServiceCategoryCard";
import { Link } from "react-router";
import {
  Zap,
  Droplet,
  HardHat,
  PaintBucket,
  Hammer,
  Wrench,
  Shield,
  Users,
  CheckCircle,
  Star,
  Clock,
  Search,
} from "lucide-react";

export function LandingPage() {
  const serviceCategories = [
    {
      title: "Electrician",
      icon: Zap,
      description: "Electrical repairs, wiring, installation",
      workerCount: 250,
    },
    {
      title: "Plumber",
      icon: Droplet,
      description: "Plumbing, pipe fitting, water systems",
      workerCount: 180,
    },
    {
      title: "Construction",
      icon: HardHat,
      description: "Building, masonry, labor work",
      workerCount: 320,
    },
    {
      title: "Painter",
      icon: PaintBucket,
      description: "Interior & exterior painting",
      workerCount: 150,
    },
    {
      title: "Carpenter",
      icon: Hammer,
      description: "Furniture, woodwork, repairs",
      workerCount: 200,
    },
    {
      title: "Mechanic",
      icon: Wrench,
      description: "Vehicle repairs and maintenance",
      workerCount: 130,
    },
  ];

  const howItWorks = [
    {
      step: 1,
      icon: Search,
      title: "Search Workers",
      description: "Browse verified skilled workers in your area by service category",
    },
    {
      step: 2,
      icon: Users,
      title: "Check Profiles",
      description: "View worker profiles, ratings, experience, and reviews",
    },
    {
      step: 3,
      icon: CheckCircle,
      title: "Book Service",
      description: "Select a worker and book them for your required service",
    },
    {
      step: 4,
      icon: Star,
      title: "Rate & Review",
      description: "After service completion, rate the worker and share feedback",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Trusted, Verified Workers for Every Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Connect with skilled electricians, plumbers, construction workers, and more.
              All verified. All reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/customer/search">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Find a Worker
                </Button>
              </Link>
              <Link to="/worker/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto"
                >
                  Register as Worker
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Shield size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-2">100% Verified</h3>
              <p className="text-blue-100">All workers are verified by our admin team</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-2">1000+ Workers</h3>
              <p className="text-blue-100">Skilled professionals across all categories</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Star size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Rated Service</h3>
              <p className="text-blue-100">Transparent ratings and reviews system</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Categories</h2>
            <p className="text-lg text-gray-600">
              Find skilled workers for any service you need
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <ServiceCategoryCard
                key={category.title}
                title={category.title}
                icon={category.icon}
                description={category.description}
                workerCount={category.workerCount}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">
              Simple steps to find and book verified workers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <item.icon size={36} className="text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 left-0 mx-auto w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Verification */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Worker Trust & Verification
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Every worker on our platform goes through a rigorous verification process
                to ensure quality and reliability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Identity Verification</h3>
                    <p className="text-gray-600">
                      All workers provide valid ID proof for verification
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Skills Assessment</h3>
                    <p className="text-gray-600">
                      Workers are verified for their claimed skills and experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Background Check</h3>
                    <p className="text-gray-600">
                      Admin team conducts thorough background verification
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Rating System</h3>
                    <p className="text-gray-600">
                      Transparent ratings help maintain quality standards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center">
                <Shield size={80} className="text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Admin Verified Badge</h3>
                <p className="text-gray-600 mb-6">
                  Look for the verified badge on worker profiles. This badge is only
                  awarded after successful verification by our admin team.
                </p>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                  <Shield size={20} />
                  Verified Worker
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers and skilled workers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/customer/register">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Register as Customer
              </Button>
            </Link>
            <Link to="/worker/register">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto"
              >
                Register as Worker
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

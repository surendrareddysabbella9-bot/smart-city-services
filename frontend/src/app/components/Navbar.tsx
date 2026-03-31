import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine which type of user is logged in based on URL
  const isCustomer = location.pathname.startsWith("/customer");
  const isWorker = location.pathname.startsWith("/worker");
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SC</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Smart City Services</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {!isCustomer && !isWorker && !isAdmin && (
              <>
                <Link to="/customer/search">
                  <Button variant="ghost">Find Workers</Button>
                </Link>
                <Link to="/worker/register">
                  <Button variant="ghost">Become a Worker</Button>
                </Link>
                <Link to="/customer/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/customer/register">
                  <Button>Register</Button>
                </Link>
              </>
            )}

            {isCustomer && (
              <>
                <Link to="/customer/search">
                  <Button variant="ghost">Find Workers</Button>
                </Link>
                <Link to="/customer/dashboard">
                  <Button variant="ghost">My Bookings</Button>
                </Link>
                <Button variant="outline">Logout</Button>
              </>
            )}

            {isWorker && (
              <>
                <Link to="/worker/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Button variant="outline">Logout</Button>
              </>
            )}

            {isAdmin && (
              <>
                <Link to="/admin/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Button variant="outline">Logout</Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {!isCustomer && !isWorker && !isAdmin && (
              <>
                <Link to="/customer/search" className="block">
                  <Button variant="ghost" className="w-full justify-start">
                    Find Workers
                  </Button>
                </Link>
                <Link to="/worker/register" className="block">
                  <Button variant="ghost" className="w-full justify-start">
                    Become a Worker
                  </Button>
                </Link>
                <Link to="/customer/login" className="block">
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/customer/register" className="block">
                  <Button className="w-full">Register</Button>
                </Link>
              </>
            )}

            {isCustomer && (
              <>
                <Link to="/customer/search" className="block">
                  <Button variant="ghost" className="w-full justify-start">
                    Find Workers
                  </Button>
                </Link>
                <Link to="/customer/dashboard" className="block">
                  <Button variant="ghost" className="w-full justify-start">
                    My Bookings
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  Logout
                </Button>
              </>
            )}

            {isWorker && (
              <>
                <Link to="/worker/dashboard" className="block">
                  <Button variant="ghost" className="w-full justify-start">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  Logout
                </Button>
              </>
            )}

            {isAdmin && (
              <>
                <Link to="/admin/dashboard" className="block">
                  <Button variant="ghost" className="w-full justify-start">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  Logout
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

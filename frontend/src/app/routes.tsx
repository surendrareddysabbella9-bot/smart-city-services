import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { CustomerRegister } from "./pages/customer/CustomerRegister";
import { CustomerLogin } from "./pages/customer/CustomerLogin";
import { CustomerDashboard } from "./pages/customer/CustomerDashboard";
import { SearchWorkers } from "./pages/customer/SearchWorkers";
import { WorkerProfile } from "./pages/customer/WorkerProfile";
import { BookWorker } from "./pages/customer/BookWorker";
import { WorkerRegister } from "./pages/worker/WorkerRegister";
import { WorkerLogin } from "./pages/worker/WorkerLogin";
import { WorkerDashboard } from "./pages/worker/WorkerDashboard";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AdminDashboard } from "./pages/admin/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/customer/register",
    Component: CustomerRegister,
  },
  {
    path: "/customer/login",
    Component: CustomerLogin,
  },
  {
    path: "/customer/dashboard",
    Component: CustomerDashboard,
  },
  {
    path: "/customer/search",
    Component: SearchWorkers,
  },
  {
    path: "/customer/worker/:id",
    Component: WorkerProfile,
  },
  {
    path: "/customer/book/:workerId",
    Component: BookWorker,
  },
  {
    path: "/worker/register",
    Component: WorkerRegister,
  },
  {
    path: "/worker/login",
    Component: WorkerLogin,
  },
  {
    path: "/worker/dashboard",
    Component: WorkerDashboard,
  },
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin/dashboard",
    Component: AdminDashboard,
  },
]);

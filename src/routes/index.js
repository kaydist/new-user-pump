import { Routes } from "./Routes";
import SignIn from "../pages/auth/sign-in";
import SignUp from "../pages/auth/sign-up";
import Transactions from "../pages/transactions";
import Dashboard from "../pages/dashboard";

const AuthRoutes = [
  { path: Routes.signin, element: <SignIn /> },
  { path: Routes.signup, element: <SignUp /> },
];

const InAppRoutes = [
  { path: Routes.dashboard, element: <Dashboard /> },
  { path: Routes.transactions, element: <Transactions /> },
];

export { AuthRoutes, InAppRoutes };

import { Routes } from "./Routes";
import SignIn from "../pages/auth/sign-in";
import SignUp from "../pages/auth/sign-up";
import Transactions from "../pages/transactions";
import Users from "../pages/users";
import Agents from "../pages/agents";

const AuthRoutes = [
  { path: Routes.signin, element: <SignIn /> },
  { path: Routes.signup, element: <SignUp /> },
];

const InAppRoutes = [
  { path: Routes.transactions, element: <Transactions /> },
  { path: Routes.users, element: <Users /> },
  { path: Routes.agents, element: <Agents /> },
];

export { AuthRoutes, InAppRoutes };

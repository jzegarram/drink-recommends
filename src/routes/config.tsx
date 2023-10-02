import { Route } from "@/models/routes.model";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Results from "@/pages/Results/Results";

const routes: Route[] = [
    {
      id: "home",
      title: "Home",
      element: <Dashboard />,
      path: "/",  
    },
    {
      id: "results",
      title: "Results",
      element: <Results />,
      path: "/results",
    }
  ];

export {
  routes
};

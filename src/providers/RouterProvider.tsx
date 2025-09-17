import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { QRScannerPage, InteractiveGaugePage, LandingPage } from "@pages";
import { NAV_PATHS } from "@constants";

const router = createBrowserRouter([
  {
    path: NAV_PATHS.QR_SCANNER,
    Component: QRScannerPage,
  },
  {
    path: NAV_PATHS.INTERACTIVE_GAUGE,
    Component: InteractiveGaugePage,
  },
  {
    path: NAV_PATHS.LANDING,
    Component: LandingPage,
  },
  {
    path: "*",
    element: <Navigate to={NAV_PATHS.QR_SCANNER} replace />,
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;

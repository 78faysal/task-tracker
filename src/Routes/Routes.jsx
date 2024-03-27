import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/',
            element: <div className="text-black">Hello</div>
        }
      ]
    },
]);

export default Routes;
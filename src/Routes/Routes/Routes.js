import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn/LogIn";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
           { 
            path:'/',
            element: <Home></Home>
        },
        {
            path:'login',
            element:<LogIn></LogIn>
        }

        ]
    }
])
export default route
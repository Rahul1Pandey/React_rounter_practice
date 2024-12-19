
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./component/Header"
import Body from "./component/Body"
import Footer from "./component/Footer"
import { createBrowserRouter,RouterProvider } from "react-router"
import About from "./component/About"
import Contact from "./component/Contact"
import User from "./component/User"
import Github from "./component/Github"
import Error from "./component/Error"
import { Outlet } from "react-router"

const Applayout = ()=>{
    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Applayout />,
      errorElement:<Error />,
      children:[
        {
            path:"/",
            element:
            <Body/>,
            
        }
        ,
        {
            path:"/about",
            element:<About />
        },
        {
            path:"/contact",
            element:<Contact />
        },
        {
            path:"/user",
            element:<User />
        },
        {
            path:"/github",
            element:<Github />
        },

      ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))

// console.log(root)
root.render(<RouterProvider router={appRouter} />)
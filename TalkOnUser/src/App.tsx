import { createBrowserRouter } from "react-router-dom"
import { Login } from "./pages/login"
import { ErrorPage } from "./pages/error";
import { Chat } from "./pages/chat";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login />
  },
  {
    path:'/chat',
    element: <Chat />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]) 

export { router };
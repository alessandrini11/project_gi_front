import {
    createBrowserRouter
} from 'react-router-dom'

import Home from "../Home"
import UploadFile from "../UploadFile"

const router = createBrowserRouter([
    {
      path: "/candidates",
      element: <Home />
    },
    {
      path: "/uploadfile",
      element: <UploadFile />
    }
  ])

export default router
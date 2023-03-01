import { Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import Header from "./Header";
import Home from "./Home";


export default function Navigate() {
  return (
    <div className="">
        {/* <Router> */}
            <Header />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<AboutPage />} />
                {/* <Route path='/sheeps' component={Sheeps} />
                <Route path='/goats' component={Goats} /> */}
            </Routes>
        {/* </Router> */}
    </div>
  )
}

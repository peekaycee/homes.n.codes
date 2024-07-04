import { Outlet } from "react-router-dom"
import FeedbackForm from "../../Components/Feedback/FeedbackForm"
import LatestListings from "../../Components/LatestListings/LatestListings"
import OurServices from "../../Components/OurServices/OurServices"
import './Homepage.css'

const Homepage = () => {
  return (
    <main>
      <div className="home">
        <div className="home__overlay"></div>
        <section className="center">
          <FeedbackForm />
        </section>
      </div>
      <OurServices />
      <LatestListings />
      <Outlet />
    </main>
  )
}

export default Homepage

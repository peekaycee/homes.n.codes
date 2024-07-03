import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar nav-1">
        <section className="flex">
          <Link to="/" className="logo">
            <i className="fas fa-house"></i>HNC
          </Link>
          <ul>
            <li>
              <Link to="#">post property<i className="fas fa-paper-plane"></i></Link>
            </li>
          </ul>
        </section>
      </nav>

      <nav className="navbar nav-2">
        <section className="flex">
          <div id="menu-btn" className="fas fa-bars"></div>

          <div className="menu">
            <ul>
              <li>
                <Link to="#">buy<i className="fas fa-angle-down"></i></Link>
                <ul>
                  <li><Link to="#">house</Link></li>
                  <li><Link to="#">flat</Link></li>
                  <li><Link to="#">shop</Link></li>
                  <li><Link to="#">car</Link></li>
                  <li><Link to="#">furnished</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#">sell<i className="fas fa-angle-down"></i></Link>
                <ul>
                  <li><Link to="#">post property</Link></li>
                  <li><Link to="#">dashboard</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#">rent</Link>
                <ul>
                  <li><Link to="#">house</Link></li>
                  <li><Link to="#">flat</Link></li>
                  <li><Link to="#">shop</Link></li>
                  <li><Link to="#">outlet</Link></li>
                  <li><Link to="#">car</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#">help<i className="fas fa-angle-down"></i></Link>
                <ul>
                  <li><Link to="about.html">about us</Link></li>
                  <li><Link to="contact.html">contact us</Link></li>
                  <li><Link to="contact.html#faq">FAQ</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          <ul>
            <li>
              <Link to="#">saved <i className="far fa-heart"></i></Link>
            </li>
            <li>
              <Link to="#">account <i className="fas fa-angle-down"></i></Link>
              <ul>
                <li><Link to="login.html">login</Link></li>
                <li><Link to="register.html">register</Link></li>
              </ul>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  )
}

export default Header

import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { useSelector} from "react-redux";


function Navbar (props) {
    const user = useSelector(state => state.user)

    const onClickLogoutHandler = () => {
        axios.get('/api/users/logout').then(response => {
          if (response.status === 200) {
            alert('Log Out Successful');
            props.history.push("/login");
          } else {
            alert('Log Out Failed')
          }
        });
      };

    return(
        <nav>
            <div>
                <Link to="/" className="brand-logo">Logo</Link>        
                <ul id="nav-mobile" className="right hide-on-med-and-down"> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li> 
                <button type="button" style={{color: "white"}}
                        className="waves-effect waves-teal btn-flat" 
                        onClick={onClickLogoutHandler}
                        >
                        Logout
                </button> 
                </ul>
            </div>
        </nav>
        )
   }

export default withRouter(Navbar);

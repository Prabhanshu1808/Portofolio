import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
      
    <div className='nav-bar'>

        {/* Logo */}
      <Link className='logo' to='/'>
          <img src={require('../../assets/images/prabhanshu-back.png')} alt="logo"></img>
          <img className='sub-logo' src={require('../../assets/images/prabhanshu-logo.png')} alt="slobania"></img>
      </Link>


      {/* icons */}
      <nav>
          {/* Home icon */}
          <NavLink exact="true" activecalssname='active' to="/">
             <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
          </NavLink>

            {/* User Icon */}
          <NavLink exact="true" activecalssname='active' className="about-link" to="/about">
             <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
          </NavLink>

             {/* Envelope icon */}
          <NavLink exact="true" activecalssname='active' className="contact-link" to="/contact">
             <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
          </NavLink>
      </nav>

      <ul>
          <li>
              <a target="_balnk" rel='noreferrer' href='https://www.linkedin.com/in/prabhanshu-gupta-a54379219/' > 
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/> 
              </a>
          </li>
          <li>
              <a target="_balnk" rel='noreferrer' href='https://github.com/Prabhanshu1808' > 
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/> 
              </a>
          </li>
          <li>
              <a target="_balnk" rel='noreferrer' href='https://twitter.com/Prabhan00397442' > 
                <FontAwesomeIcon icon={faTwitter} color='#4d4d4e'/> 
              </a>
          </li>
      </ul>
    </div>
)

export default Sidebar;
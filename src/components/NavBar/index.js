import PropTypes from 'prop-types';
// http://react.semantic-ui.com/collections/menu
import React from 'react';
import {Button, Menu} from 'semantic-ui-react';
import {Link} from 'phenomic';
import Facebook from 'react-icons/lib/fa/facebook-square';
// import "../../semantic/dist/components/menu.min.css"
import styles from './index.css';
import Logo from '../Logo';

const NavBar = ({menu, handleClick}) => (
  <Menu inverted className="nav-bar large">
    <Menu.Item className={styles.logo} header>
      <Link to={'/'} style={{lineHeight: 0}}>
        <Logo height="32px" />
      </Link>
    </Menu.Item>
    {Object.entries(menu).map(([key, {title, link}]) => (
      <Menu.Item name={title} key={title} className="hide-mobile">
        <Link to={link} activeClassName="active">
          {title}
        </Link>
      </Menu.Item>
    ))}
    <Menu.Item name={'facebook'} className="hide-mobile">
      <a href="https://www.facebook.com/maisonmedicalecureghem/">
        <Facebook style={{fontSize: '16px', marginRight: '5px'}} />
        Facebook
      </a>
    </Menu.Item>
    <Button inverted className="only-mobile button-menu" onClick={handleClick}>
      <svg width="10" height="10">
        <path d="M0,1 10,1" stroke="#eee" strokeWidth="2" />
        <path d="M0,5 10,5" stroke="#eee" strokeWidth="2" />
        <path d="M0,9 10,9" stroke="#eee" strokeWidth="2" />
      </svg>
    </Button>
  </Menu>
);

NavBar.propTypes = {
  menu: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavBar;

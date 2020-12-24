import React from 'react';
import logo from './flashread.png';

function Header() {
    return (
        <header style={ headerStyle }>
            <span>FLASH_READ</span>
            <span>
                <img className="logo" src={logo} alt="Logo" />
            </span>
        </header>
    );
}
const headerStyle = {
  backgroundColor: 'rgb(119, 222, 252)',
  padding: '5%',
  borderRadius: '20%',
  borderStyle: 'solid',
  borderTopLeftRadius: '0%',
  borderTopRightRadius: '0%',
  fontSize: '50px',
  fontFamily: 'Georgia',
  boxShadow: 'inset 2px 2px 2px 0px #ccc',
//   -moz-box-shadow: 10px 10px 5px #ccc,
//   -webkit-box-shadow: 10px 10px 5px #ccc,
//   -khtml-box-shadow: 10px 10px 5px #ccc,

}

export default Header;
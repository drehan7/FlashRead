import React from 'react';
import logo from './flashread.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={ headerStyle }>
            <div>
            <span style={textStyle}>FLASH_READ</span>
                <span>
                    <img className="image" src={logo} alt="Logo" />
                </span>
            </div>
            <div>

            </div>
        </header>
    );
}

const textStyle = {
    fontSize: '40px',
paddingLeft: '100px',
}
const headerStyle = {
  backgroundColor: 'rgb(119, 222, 252)',
  padding: '2%',
  right:'10px',

  borderRadius: '20%',
  borderStyle: 'solid',
  borderTopLeftRadius: '0%',
  borderTopRightRadius: '0%',

}

export default Header;
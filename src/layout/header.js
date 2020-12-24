import React from 'react';

function Header() {
    return (
        <header style={ headerStyle }>
            <span>FLASH_READ</span>
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

}

export default Header;
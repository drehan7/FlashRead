import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class InputBox extends Component {
    render() {
        return (
        <div className="userInput">
            <textarea style={inputBoxStyle} placeholder="Type or paste text here..." name="user_input" cols="100" rows="30"></textarea>
            <button onClick={ this.props.quickRead() }>Read_Fast</button>

        </div>
        )
    }
}

InputBox.propTypes = {
    quickRead: PropTypes.array.isRequired,
}

// const buttonStyle = {
//     display:'inline-block',
//     padding: '0.3em 1.2em',
//     borderRadius: '2em',
//     position: 'relative',
//     boxSizing: 'border-box',
//     textDecoration: 'none',
//     fontWeight: '300',
//     textAlign: 'center',
//     height: '40px',
//     width: '200px',
//     marginRight: 'auto',
//     marginLeft: 'auto',



// }
const inputBoxStyle = {
    padding: '5px',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    borderStyle: 'dotted',
    borderColor: 'blue',

}

export default InputBox;

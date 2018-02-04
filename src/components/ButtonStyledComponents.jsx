/* eslint new-cap:0 no-unused-vars:0 */
import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const ButtonWrapper = styled.button `
background: #3498db;
border: 0px;
border-radius: 3px;
box-shadow: 0px 5px 0px #2980b9;
color: white;
display: block;
font-size: 14px;
font-weight: bold;
margin: 20px auto;
min-width: 200px;
outline: 0px;
padding: 10px;
`

const ButtonStyledComponents = (props) => (
  <ButtonWrapper
    type="button"
    onClick={props.onClick}
  >
    {props.children}
  </ButtonWrapper>
);

ButtonStyledComponents.propTypes = {
  buttonStyle: PropTypes.object,
  onClick: PropTypes.func,
}

export default ButtonStyledComponents;

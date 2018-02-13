import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardSideWrapper = styled.div`
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: ${props => props.backgroundColor ? props.backgroundColor : '#fff' };
  overflow: hidden;
  @-moz-document url-prefix() {
    overflow: visible;
  }
  backface-visibility: hidden;
  transition: all .7s ease;
  transform-style: preserve-3d;
  transform: ${props => `rotateY(${props.cardRotation})`};  
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

const CardSide = (props) => {
  const { 
    children, 
    cardRotation, 
    backgroundColor,
    containerStyle,
    contentStyle,
   } = props; 

   return (
      <CardSideWrapper 
        backgroundColor={backgroundColor}
        style={containerStyle}
        cardRotation={cardRotation}
      >
        <div style={contentStyle}>
          { children }
        </div>
      </CardSideWrapper>
   );
};

CardSide.propTypes = {
  backgroundColor: PropTypes.string, 
  contentStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  cardRotation: PropTypes.string,
  children: PropTypes.any,
}

export default CardSide;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CardSide from '../elements/CardSide';

const CardWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  perspective: 1500px;
  transform-style: preserve-3d;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  margin-bottom: 1rem;
`

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardFlipped: false,
    }
  }

  toggleIsCardFlipped () {
    this.setState({
      isCardFlipped: !this.state.isCardFlipped,
    })
  }

  findAndSetCardFlipper(childComponent, flipperRefName) {
    // First, check to see whether the childComponent we are looking at
    // should be set as the card flipper. If so, we'll clone the child
    // using React.cloneElement, attach an onClick method to toggle 
    // this.state.isCardFlipped, and return our cloned element to be put
    // back in the tree. 
    if (childComponent.ref === flipperRefName) {
      return React.cloneElement(childComponent, {
        onClick: this.toggleIsCardFlipped.bind(this)
      });
    }
    // Now, because we want to traverse the entire child component tree,  
    // we need to check whether the child has children of its own. And, if 
    // so, we'll call findAndSetCardFlipper on the child (i.e., recursively). 
    // Before doing so, however, we will ensure that the child is a valid 
    // React object because our methodology relies on that being so. 
    else if (React.Children.count(childComponent) > 0 && React.isValidElement(childComponent)) { 
      return React.cloneElement(childComponent, {
        children: React.Children.map(
          childComponent.props.children, 
          grandchild =>
            this.findAndSetCardFlipper(grandchild, flipperRefName)
        ),
      });
    }
    // If componenetChild is neither destined to be the card flipper nor lucky
    // enough to have children of its own, we'll just return it to be put back
    // into the tree. 
    return childComponent;
  }

  render() {
    // Here, we'll take the children we were given as props and check to see which
    // of the lucky lads has been put in control of flipping the card. Note, 
    // React.Children.map returns an array. See https://reactjs.org/docs/react-api.html.  
    const children = React.Children.map(
      this.props.children, 
      child => this.findAndSetCardFlipper(child, this.props.flipperID || 'flipper')
    );

    return (
      <CardWrapper>
        {/* Since we're enforcing a strict 'two-child' policy, we will place the first
        child on the front of the card and the second child on the back. */}
        <CardSide
          cardRotation={this.state.isCardFlipped ? '180deg' : '0deg'}
          backgroundColor={this.props.frontBackgroundColor || '#1097FF'}
          containerStyle={this.props.frontContainerStyle || { }}
          contentStyle={this.props.frontContentStyle || { }}
        >
          {children[0]}
        </CardSide>
        <CardSide
          cardRotation={this.state.isCardFlipped ? '0deg' : '-180deg' }
          backgroundColor={this.props.backBackgroundColor || '##FF851B'}
          containerStyle={this.props.backContainerStyle || { }}
          contentStyle={this.props.backContentStyle || { }}
        >
          {children[1]}
        </CardSide>
      </CardWrapper>
    );
  }
}

Card.propTypes = {
  flipperID: PropTypes.string,
  children: (props, propName) => {
    if (React.Children.count(props[propName]) != 2) {
      return new Error(
        `Each Card  must have exactly two children at its top level; one for each
         side of the card (e.g., <Card><div>FRONT</div><div>BACK</div></Card>`
      );
    }
  },
  frontBackgroundColor: PropTypes.string,
  frontContainerStyle: PropTypes.object,
  frontContentStyle: PropTypes.object,
  backBackgroundColor: PropTypes.string,
  backContainerStyle: PropTypes.object,
  backContentStyle: PropTypes.object,
}

export default Card; 
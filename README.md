# Flexy Flip Cards

Responsive cards that flip. Built with React, Styled-Components, and CSS Grid. `position: absolute` not required. 

### **[Live Demo](https://build-vlkfjpbenp.now.sh/).**

## Quick Overview

Cards that flip are frickin' sweet. But, since they typically require developers to use set dimensions and `position: absolute`, they're a pain in the butt to style when you're not sure how much space you'll have (i.e., responsive design) or need (i.e., rendering random data). Not anymore. Flexy FlipCards, inspired by [React Flip Card](https://github.com/mzabriskie/react-flipcard), don't care what you put in them. Check it out.


## Install


```sh
npm install --save flexy-flipcards
```

## Instructions


1. FlexyFlipCard Requires Exactly Two Children
...The first child will be rendered on the front of the card. The second child will be rendered on the back. 

2. Set `ref='flipper'` Somewhere in Each Child
...The card component will search through your component tree and add an `onClick` funtion to whatever component has `ref='flipper'`

## Example


```javascript
import React, { Component } from 'react';
import { FlexyFlipCard } from 'flexy-flipcards';

class App extends Component {
    render() {
        return (
            <FlexyFlipCard
                frontBackgroundColor="#B96aC9"
                backBackgroundColor="#231b1b"
            />
                <div>
                {/* Pass in whatever you want to be rendered on the front side of the card. Just make sure that somewhere in the component subtree, one child has a ref='flipper' attribute. An 'onClick' function will be added to it. */}
                </div>
                <div>
                {/* Pass in whatever you want to be rendered on the back side of the card. Just make sure that somewhere in the component subtree, one child has a ref='flipper' attribute. An 'onClick' function will be added to it. */}
                </div>
            </FlexyFlipCard>
        );
    }
}
```

## Available Props

Note: Apart from `frontBackgroundColor` and `backBackgroundColor`, you can style your children however and by whatever means you want. That said, the following props are available: 

Prop | Type | Explanation
--- | --- | ---
frontBackgroundColor | String | set background color of card front. 
frontContainerStyle | Object | add additional styling for card front outer container. 
frontContentStyle | Object | add additional styling for card front inner container. 
backBackgroundColor | String | Sets background color of card back. 
backContainerStyle | Object | add additional styling for card back outer container. 
backContentStyle | Object | add additional styling for card back inner container. 

## Updates

v0.1.1: fix for issue with Firefox 58 whereby janky animation occurrs if `transform-style: preserve-3d` and `overflow: hidden` are set at the same time. See [Bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1431893)
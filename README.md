# Flexy Flip Cards
Responsive cards that flip. Built with React, Styled-Components, and CSS Grid. 

### Go to [live examples][https://build-valyszalvw.now.sh/]

## Quick Overview

```sh
npm install --save flexy-flipcards
```

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
                {/* Pass in whatever you want to be rendered on the front side of the card. Just make sure that one child has a ref='flipper' attribute. An 'onClick' function will be added to it. */}
                </div>
                <div>
                {/* Pass in whatever you want to be rendered on the back side of the card. Just make sure that one child has a ref='flipper' attribute. An 'onClick' function will be added to it. */}
                </div>
            </FlexyFlipCard>
    }
}
```

import React, { Component } from 'react';
import Aux from '../hoc/Aux';

import Counter from '../containers/counter';

class App extends Component {

    render() {
        return (
            <Aux>
                <Counter/>
            </Aux>
        );
    }
}

export default App;
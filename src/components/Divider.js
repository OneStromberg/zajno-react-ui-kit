import React from 'react';
import Component from './Component';
import View from './View';

class Divider extends Component {
    render(){
        return(
            <View>
                <hr className={"uk-divider-icon " + this.getClassName(this.props)}></hr>
            </View>
        )
    }
}

export default Divider;
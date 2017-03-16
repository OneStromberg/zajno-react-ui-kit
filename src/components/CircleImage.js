import React from 'react';
import Component from "./Component";
import Image from "./Image";
import View from "./View";

class CircleImage extends Component {
    render(){
        return(
            <View>
                <Image className={"circle-image " + this.getClassName(this.props)} src={this.props.src} alt={this.props.alt || ""} />
            </View>
        )
    }
}

export default CircleImage;
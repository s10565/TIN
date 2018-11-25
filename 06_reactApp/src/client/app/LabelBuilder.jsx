import React from 'react';

class LabelBuilder extends React.Component {
    render() {
        return <label> Etykieta: {this.props.labelName}</label>
    }
}

export default LabelBuilder;

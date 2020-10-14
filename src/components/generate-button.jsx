import React from 'react';

export default class GenerateButton extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    generatePassword() {
        let arr = [];
        for (let i = 0; i < 3; i++) {
            arr.push(Math.random().toString(36).slice(-6));
        }

        return arr.join(`-`);
    }

    handleClick() {
        this.props.onButtonClick(this.generatePassword());
    }

    render() {
        return <button className="generate-button" type="button" onClick={this.handleClick}>Generate</button>
    }
}

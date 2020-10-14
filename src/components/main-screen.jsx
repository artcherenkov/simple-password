import React from 'react';

import Header from "./header";
import GenerateButton from "./generate-button";
import PwdList from "./pwd-list";

export default class MainScreen extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {passwords: []};
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(content) {
        this.setState((prevState) => {
            return {
                passwords: [...prevState.passwords, content]
            }
        });
    }

    render() {
        return <div className="wrapper">
            <Header />
            <GenerateButton onButtonClick={this.onButtonClick}/>
            <PwdList pwdList={this.state.passwords}/>
        </div>
    }
}
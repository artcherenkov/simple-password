import React from 'react';


export default class PwdItem extends React.PureComponent {
    constructor(props) {
        super(props);

        this._copyBtnRef = React.createRef();
        this._inputRef = React.createRef();
    }

    copyToClipboard() {
        return () => {
            const copyBtnRef = this._copyBtnRef.current;
            navigator.clipboard.writeText(this.props.pwd)
                .then(() => copyBtnRef.classList.add(`cb-status--success`))
                .catch(() => copyBtnRef.classList.add(`cb-status--error`));
        }
    }

    componentDidMount() {
        const copyBtnRef = this._copyBtnRef.current;
        const inputRef = this._inputRef.current;

        copyBtnRef.onclick = this.copyToClipboard();
        inputRef.onclick = this.copyToClipboard();
    }

    render() {
        return <li className="output-pwd-item">
            <input type="text" className="output-pwd" value={this.props.pwd} ref={this._inputRef} readOnly/>
            <button type="button" className="copy-to-cb-button cb-status" ref={this._copyBtnRef}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1C9B41">
                    <path d="M15 5H5V15H7V16H4V4H16V7H15V5Z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 20V8H20V20H8ZM9 9H19V19H9V9Z"/>
                </svg>
            </button>
        </li>
    }
}
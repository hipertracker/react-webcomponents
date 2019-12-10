import * as React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';

export default class HelloWorld extends React.Component<any, any> {
    render() {
        return <span>Hello {this.props.children}</span>
    }
}

class CustomElement extends HTMLElement {
    mountPoint: any
    // componentAttributes = {}; // TODO: add example of usage
    // componentProperties = {}; // TODO: add example of usage

    connectedCallback() {
        this.update();
    }
    disconnectedCallback() {
        unmountComponentAtNode(this.mountPoint);
    }
    update() {
        if (!this.mountPoint) {
            this.mountPoint = document.createElement('span');
            this.attachShadow({mode: 'open'}).appendChild(this.mountPoint);
        }
        render(<HelloWorld>{this.innerHTML}</HelloWorld>, this.mountPoint);
    }

}

customElements.define('hello-world', CustomElement);

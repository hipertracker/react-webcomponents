import * as React from 'react'
import HelloWorld from './HelloWorld'
import {render} from 'react-dom';

render(
    <div>
        <div>Standard React component: <HelloWorld>React</HelloWorld></div>
        <div>React wrapped as Webcomponent: <hello-world class="hello">Webcomponent</hello-world></div>
    </div>,
    document.getElementById('root'),
);


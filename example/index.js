import React from 'react'
import ReactDOM from 'react-dom'

import OSSReactExample from '../lib'

import { createElement } from 'react-native-web'


ReactDOM.render(
    createElement(OSSReactExample),
    document.getElementById('app')
)
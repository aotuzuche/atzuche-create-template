import './style'
import React, { PureComponent } from 'react'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@ComponentEvent('evt', Event)
export default class <%= name %> extends PureComponent {

    render () {
        return <h1><%= name %></h1>
    }
}
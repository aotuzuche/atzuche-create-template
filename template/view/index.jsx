import './style'
import React, { PureComponent } from 'react'
import VIEW from 'src/hoc/view'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@VIEW
@ComponentEvent('evt', Event)
export default class <%= name %> extends PureComponent {

    render () {
        return <h1><%= name %></h1>
    }
}
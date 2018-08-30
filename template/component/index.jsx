import './style'
import React, { PureComponent } from 'react'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@ComponentEvent('evt', Event)
export default class <%= createName %> extends PureComponent {

    render () {
        return <h1><%= createName %></h1>
    }
}
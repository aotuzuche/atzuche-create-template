import './style'
import React, { PureComponent } from 'react'
import VIEW from 'src/hoc/view'
import ComponentEvent from 'src/hoc/componentEvent'
import Event from './event'

@VIEW
@ComponentEvent('evt', Event)
class <%= createName %> extends PureComponent {
  render() {
    return <h1><%= createName %></h1>
  }
}

export default <%= createName %>

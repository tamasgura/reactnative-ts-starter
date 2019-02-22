import { isEqual } from 'lodash'
import React, { Component } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

interface IProps {
  children: any[]
  component: React.Component
}

class DismissKeyboardHOC extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }
  shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    return !isEqual(this.props, nextProps)
  }

  render() {
    return (
      <TouchableWithoutFeedback {...this.props} onPress={Keyboard.dismiss} accessible={false}>
        {this.props.component}
      </TouchableWithoutFeedback>
    )
  }
}

export default DismissKeyboardHOC

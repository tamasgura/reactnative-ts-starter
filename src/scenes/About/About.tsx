import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DefaultButton from '../../components/Touchables/DefaultButton'

import { navigate } from '../../navigation/services'

interface IProps {
  counter: number
}

interface IState {
  title: string
}

class About extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      title: 'About',
    }
  }

  state: IState

  render() {
    return (
      <View>
        <Text>{this.state.title}</Text>
        <DefaultButton text="to dashboard" onPress={() => navigate('Dashboard')} />
        <Text>Counter: {this.props.counter}</Text>
      </View>
    )
  }
}

export default About

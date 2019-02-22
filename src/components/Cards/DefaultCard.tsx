import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../utility/styles'

interface IProps {
  style: {}
}

class DefaultCard extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }
  render() {
    return <View style={[styles.container, this.props.style]}>{this.props.children}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 12,
  },
})

export default DefaultCard

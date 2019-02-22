import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { colors, fontSizes } from '../../../utility/styles'

interface IProps {
  autoCapitalize?: string
  autoComplete?: string
  inputRef?: any
  onChangeText: (arg1: any) => any
  placeholder: string
  secureTextEntry?: boolean
  style?: {}
  // TODO add enum for prop types
  textContentType?: any
  valid?: boolean
}

class DefaultInput extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <TextInput
        {...this.props}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        ref={this.props.inputRef}
        style={[styles.input, this.props.style, !this.props.valid ? styles.invalid : null]}
      />
    )
  }
}

export default DefaultInput

const styles = StyleSheet.create({
  input: {
    fontSize: fontSizes.s,
    width: 300,
    height: 42,
    margin: 12,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: colors.borderPrimary,
    borderRadius: 6,
  },
  invalid: {
    borderColor: colors.danger,
    borderWidth: 2,
  },
})

import React from 'react'
import { Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import { colors } from '../../utility/styles'
import DefaultText from '../Text/DefaultText'

interface IProps {
  size?: 'small' | undefined
  containerStyle?: {}
  disabled?: boolean
  text: string
  textStyle?: {}
  onPress?: () => any
}

const DefaultButton = (props: IProps) => {
  const width = props.size === 'small' ? 90 : 220
  const height = props.size === 'small' ? 25 : 40

  const content = (
    <View style={[{ width, height }, styles.container, props.containerStyle]}>
      <DefaultText
        text={props.text}
        style={[styles.text, props.textStyle, props.disabled ? styles.disabledText : null]}
      />
    </View>
  )

  if (props.disabled) {
    return content
  }
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback style={{ width, height }} onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    )
  }
  return (
    <TouchableOpacity style={{ width, height }} onPress={props.onPress}>
      {content}
    </TouchableOpacity>
  )
}
export default DefaultButton

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonPrimary,
    borderRadius: 6,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonPrimary,
    borderRadius: 6,
  },
  text: {
    color: colors.textLight,
  },
  disabledText: {},
  touchable: {},
})

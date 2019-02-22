import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors, fontSizes } from '../../utility/styles'

interface IProps {
  name: string
  size: number
  color: string
}

const DefaultIcon = (props: IProps) => (
  <Icon name={props.name} size={props.size || fontSizes.l} color={props.color || colors.lightGrey} {...props} />
)

export default DefaultIcon

import React from 'react'
import DefaultText from '../../../components/Text/DefaultText'

interface IProps {
  value: number
}
const Display = (props: IProps) => <DefaultText {...props} text={`Counter: ${props.value}`} />

export default Display

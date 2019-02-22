import { isEqual } from 'lodash'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { decrementCounter, incrementCounter } from '../../../store/actions'
import { counterSelector } from '../../../store/selectors'

import DefaultButton from '../../../components/Touchables/DefaultButton'
import Display from './Display'

interface IProps {
  counter?: number
  onIncrementCounter?: () => any
  onDecrementCounter?: () => any
}

class Counter extends React.Component<IProps> {
  // constructor(props) {
  //   super(props);
  // }

  shouldComponentUpdate(nextProps: IProps) {
    return !isEqual(this.props, nextProps)
  }

  render() {
    return (
      <View>
        <Display value={this.props.counter || 0} />
        <DefaultButton text="+" onPress={this.props.onIncrementCounter} />
        <DefaultButton text="-" onPress={this.props.onDecrementCounter} />
      </View>
    )
  }
}

const mapStateToProps = (state: { counter: number }) => {
  const counter = counterSelector(state)
  return {
    counter,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  const amount = 1
  return {
    onIncrementCounter: () => dispatch(incrementCounter(amount)),
    onDecrementCounter: () => dispatch(decrementCounter(amount)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

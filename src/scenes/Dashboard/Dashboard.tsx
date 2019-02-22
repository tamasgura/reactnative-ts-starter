import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { whyDidYouUpdate } from 'why-did-you-update'
import DefaultButton from '../../components/Touchables/DefaultButton'

import DefaultText from '../../components/Text/DefaultText'
import { navigate } from '../../navigation/services'
import { loadJSONPlaceholder } from '../../store/actions'
import Login from './Login/Login'
import { JSONPlaceholderSelector } from '../../store/selectors'
import Counter from './Counter/Counter'

if (__DEV__) {
  whyDidYouUpdate(React, { exclude: /^YellowBox/ })
}

interface IProps {
  style: {}
  friends: {}
  JSONPlaceholder: string
  onLoadJSONPlaceholder: () => any
}
interface IState {
  controls: {
    username: { value: string }
    password: { value: string }
  }
}

class Dashboard extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      controls: {
        username: { value: '' },
        password: { value: '' },
      },
    }
  }

  nav = {
    about: () => navigate('About'),
  }

  render() {
    return (
      <View {...this.props} style={[styles.container, this.props.style]}>
        <DefaultText text="Dashboard" />
        <DefaultButton text="navigate to About" onPress={this.nav.about} />
        {/* <BasicIcon name='ios-at' /> */}
        <Counter />
        <Login />
        <DefaultButton text="load json" onPress={this.props.onLoadJSONPlaceholder} />
        <DefaultText text={this.props.JSONPlaceholder} />
        {/* <DemoI18N /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  // input: {backgroundColor: 'white', borderWidth: 1, marginVertical: spacing.m},
})

const mapStateToProps = (state: IState) => {
  const JSONPlaceholder = JSONPlaceholderSelector(state)
  return {
    JSONPlaceholder,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  onLoadJSONPlaceholder: () => dispatch(loadJSONPlaceholder()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

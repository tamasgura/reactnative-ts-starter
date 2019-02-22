import React, { Component } from 'react'
import { Modal, StyleSheet, View } from 'react-native'

import DefaultCard from '../Cards/DefaultCard'
import DefaultButton from '../Touchables/DefaultButton'

import i18n from '../../features/i18n'
import { colors } from '../../utility/styles'

interface IProps {
  visible: boolean
  onRequestClose: () => any
  cancelHandler: () => any
  submitHandler: () => any
  containerStyle: {}
}

class DefaultModal extends Component<IProps> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <View {...this.props} style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.props.visible}
          transparent={true}
          onRequestClose={this.props.onRequestClose || this.props.cancelHandler}
        >
          <View style={styles.modalBackground}>
            <DefaultCard style={[this.props.containerStyle, styles.card]}>
              {this.props.children}

              <View style={styles.buttonRow}>
                <DefaultButton
                  containerStyle={styles.cancelButton}
                  text={i18n.t('MainScreen.Dashboard.QuickLinks.modalCancel')}
                  pressHandler={() => {
                    this.props.cancelHandler()
                  }}
                />

                <DefaultButton
                  containerStyle={styles.submitButton}
                  text={i18n.t('MainScreen.Dashboard.QuickLinks.modalSubmit')}
                  pressHandler={() => {
                    this.props.submitHandler()
                  }}
                />
              </View>
            </DefaultCard>
          </View>
        </Modal>
      </View>
    )
  }
}

export default DefaultModal

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
  modalBackground: {
    flex: 1,
    width: '100%',
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bgExtraLight,
  },
  card: {
    width: 450,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: colors.borderPrimary,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  submitButton: {
    marginLeft: 8,
    width: 140,
  },
  cancelButton: {
    width: 140,
    backgroundColor: colors.red,
  },
})

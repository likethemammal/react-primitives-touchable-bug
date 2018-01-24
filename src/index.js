import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
} from '@likethemammal/react-primitives'

import {
    TouchableWithoutFeedback,
} from 'react-native-web'

const styles = StyleSheet.create({
    example: {
        background: 'lightgreen',
        padding: 5,
    }
})

class App extends Component {

    render() {
        const { on } = this.props

        return <div>
            <TouchableWithoutFeedback
                onPress={() => console.log('pressed')}
            >
                <View
                    style={styles.example}
                >
                    <Text>
                        {'Some example text'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </div>
    }
}

export default App
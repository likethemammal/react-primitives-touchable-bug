import React, { Component } from 'react'

import {
    View,
    Text,
    Touchable,
    StyleSheet,
} from 'react-primitives'

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
            <Touchable
                onPress={() => console.log('pressed')}
            >
                <View
                    style={styles.example}
                >
                    <Text>
                        {'Some example text'}
                    </Text>
                </View>
            </Touchable>
        </div>
    }
}

export default App
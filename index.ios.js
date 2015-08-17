/**
 * MonoCount in React Native by Marcus Orochena 2015 
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} = React;

var MonoCount = React.createClass({
    render: function() {
        return (
                <View style={styles.container}>
                <Text style={styles.welcome}>
                MonoCount
            </Text>
                <View style={styles.colorContainer}>
                <Image
            source={require('image!blue')}
            style={styles.welcomeColors}
                />
                <Image
            source={require('image!red')}
            style={styles.welcomeColors}
                />
                <Image
            source={require('image!black')}
            style={styles.welcomeColors}
                />
                <Image
            source={require('image!white')}
            style={styles.welcomeColors}
                />
                <Image
            source={require('image!green')}
            style={styles.welcomeColors}
                />
                </View>
                <Text style={styles.instructions}>
                Created by Marcus Orochena
            </Text>
                </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10,
    },
    colorContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    welcomeColors: {
        width: 60,
        height: 60,
        margin: 5
    },
});

AppRegistry.registerComponent('MonoCount', () => MonoCount);

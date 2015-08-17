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
    Image,
    Navigator,
    TouchableHighlight,
    NavigatorIOS,
} = React;

var Menu = require('./App/Components/Menu');
var OneVsOne = require('./App/Components/OneVsOne');

var MonoCount = React.createClass({
    render: function() {
        return (
                <NavigatorIOS
            style={styles.container}
            initialRoute={{
                component: Menu,
                title: 'Monocount Menu',
            }}
            navigationBarHidden ={true}
                         />
                 );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

AppRegistry.registerComponent('MonoCount', () => MonoCount);

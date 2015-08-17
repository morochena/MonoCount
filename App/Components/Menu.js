var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    NavigatorIOS,
    TouchableHighlight
} = React;

var OneVsOne = require('./OneVsOne');


var Menu = React.createClass({

    handleSubmit: function() {
        this.props.navigator.push({
            title: 'One vs One',
            component: OneVsOne
        });
    },

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
                <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayerColor="white">
                <Text style={styles.buttonText}> One vs One </Text>
            </TouchableHighlight>
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
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#CDCDCD'
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500'
    }
});


module.exports = Menu;

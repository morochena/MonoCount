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
                <Text style={styles.buttonText}> Solo Game </Text>
                </TouchableHighlight>

                <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayerColor="white">
                <Text style={styles.buttonText}> One vs One </Text>
                </TouchableHighlight>

                <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayerColor="white">
                <Text style={styles.buttonText}> Free For All </Text>
                </TouchableHighlight>

                <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayerColor="white">
                <Text style={styles.buttonText}> Two vs Two </Text>
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
        backgroundColor: '#0C090A',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#E5E4E2',
        fontFamily: 'Avenir Next'
    },
    instructions: {
        textAlign: 'center',
        color: '#666',
        marginBottom: 10,
        fontFamily: 'Avenir Next'
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
        marginTop: 20,
        backgroundColor: '#0C090A',
        padding: 15,
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#E5E4E2'
    }
});


module.exports = Menu;

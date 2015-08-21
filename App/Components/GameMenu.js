var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    AlertIOS,
    TouchableHighlight
} = React;

var Options = require('./Options');

var GameMenu = React.createClass({

    goBack: function() {
        AlertIOS.alert(
            'Back to Main Menu',
            'Your current game will be lost.',
            [
                {text: 'Yes', onPress: () => this.props.navigator.pop()},
                {text: 'Cancel', onPress: () => console.log('cancelled')}
            ]
        );
    },

    goOptions() {
        this.props.navigator.push({component: Options});
    },

    render: function() {
        return(
                <View style={styles.container}>

                <TouchableHighlight style={styles.button}>
                <Text style={styles.gg}> Reset </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button} onPress={this.goBack}>
                <Text onPress={this.goBack} style={styles.gg}> Menu </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button} onPress={this.options}>
                <Text
            style={styles.gg}> Options </Text>
                </TouchableHighlight>

                </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    smcont: {
        flex: 1
    },
    gg: {
        textAlign: 'center',
        color: '#fff'
    },
    button: {
        flex: 1,
        padding: 5
    }
});

module.exports = GameMenu;

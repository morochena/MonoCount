var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    AlertIOS
} = React;

var Options = require('./Options');

var GameMenu = React.createClass({

    goBack: function() {
        AlertIOS.alert(
            'Back to Main Menu',
            'Your current game will be lost.',
            [
                {text: 'Yes', onPress: () => this.props.navigator.pop()},
                {text: 'Cancel', onPress: () => console.log('cancelled')},
            ]
        );
    },

    goOptions() {
        this.props.navigator.push({component: Options});
    },

    render: function() {
        return(
                <View style={styles.container}>
                <View style={styles.smcont}>
                <Text style={styles.gg}> Reset </Text>
                </View>
                <View style={styles.smcont}>
                <Text onPress={this.goBack} style={styles.gg}> Menu </Text>
                </View>
                <View style={styles.smcont}>
                <Text
            onPress={this.goOptions}
            style={styles.gg}> Options </Text>
                </View>
                </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    smcont: {
        flex: 1,
    },
    gg: {
        textAlign: 'center',
        color: '#fff'
    }
});

module.exports = GameMenu;

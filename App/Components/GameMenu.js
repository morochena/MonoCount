var React = require('react-native');

var {
    View,
    Text,
    StyleSheet
} = React;

var GameMenu = React.createClass({
    render: function() {
        return(
                <View style={styles.container}>
                <View style={styles.smcont}>
                <Text style={styles.gg}> Reset </Text>
                </View>
                <View style={styles.smcont}>
                <Text style={styles.gg}> Menu </Text>
                </View>
                <View style={styles.smcont}>
                <Text style={styles.gg}> Options </Text>
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

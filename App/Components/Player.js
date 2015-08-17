var React = require('react-native');

var {
    View,
    Text,
    StyleSheet
} = React;

var Player = React.createClass({
    render: function() {
        return(
                <View style={styles.container, this.props.isReversed && styles.reversed }>
                <Text style={styles.health}>20</Text>
                <View style={styles.counterContainer}>
                <Text style={styles.counter}>0</Text>
                <Text style={styles.counter}>0</Text>
                <Text style={styles.counter}>0</Text>
                </View>
                </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 65,
        justifyContent: 'flex-start',
    },
    reversed: {
        transform: [{rotate: '180deg'}]  
    },
    health: {
        fontSize: 70, 
        textAlign: 'center',
    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    counter: {
        fontSize: 30,
        margin: 30,
    }
});

module.exports = Player;

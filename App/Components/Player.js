var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} = React;

var Player = React.createClass({

    increment: function() {
        this.setState({
            health:  this.state.health + 1
        });
    },

    decrement: function() {
        this.setState({
            health: this.state.health -1
        });
    },

    getInitialState: function() {
        return {
            health: 20
        };
    },

    render: function() {
        return(
                <View style={styles.container, this.props.isReversed && styles.reversed }>
                <Text style={styles.health}>{this.state.health}</Text>
                    <View style={styles.counterContainer}>
                      <Text style={styles.counter}>0</Text>
                      <Text style={styles.counter}>0</Text>
                      <Text style={styles.counter}>0</Text>
                </View>
                <View style={styles.modifyButtonContainer}>
                <TouchableHighlight onPress={this.decrement} style={styles.button}>
                <Text style={styles.modify}> - </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.increment} style={styles.button}>
                <Text style={styles.modify}> + </Text>
                </TouchableHighlight>
                </View>
                </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        marginTop: 65,
        justifyContent: 'flex-start',
    },
    reversed: {
        transform: [{rotate: '180deg'}]  
    },
    health: {
        fontSize: 90, 
        textAlign: 'center',
        color: '#E5E4E2',
        fontFamily: 'Avenir Next',
    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    counter: {
        fontSize: 30,
        margin: 30,
        color: '#D1D0CE'
    },
    modifyButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    button: {
        flex: 1,
        backgroundColor: '#0C090A',
        width: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#CDCDCD'
    },
    modify: {
        fontSize: 70,
        textAlign: 'center',
        color: '#E5E4E2'
    }
});

module.exports = Player;

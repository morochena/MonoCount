var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Animated
} = React;

var Player = React.createClass({

    increment: function() {
        this.setState({
            health:  this.state.health + 1,
        });

        this.state.bounceValue.setValue(1.5);

        Animated.spring(
            this.state.bounceValue,
            {
                toValue: 1.0,
                friction: 1
            }).start();
    },

    decrement: function() {
        this.setState({
            health: this.state.health -1
        });

        this.state.bounceValue.setValue(0.5);

        Animated.spring(
            this.state.bounceValue,
            {
                toValue: 1.0,
                friction: 1
            }).start();
    },

    getInitialState: function() {
        return {
            health: 20,
            bounceValue: new Animated.Value(1), 
        };
    },

    render: function() {
        return(
                <View style={styles.container, this.props.isReversed && styles.reversed }>
                <Animated.Text style={[styles.health, {transform: [{scale: this.state.bounceValue}]}]}>{this.state.health}</Animated.Text>
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
        fontSize: 70, 
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

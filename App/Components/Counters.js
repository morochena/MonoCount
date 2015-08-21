var React = require('react-native');

var {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} = React;

var Counter = React.createClass({

    getInitialState() {
        return {
            num: 1
        };
    },

    increment() {
        this.setState({
            num: this.state.num + 1
        });
    },

    decrement() {
        this.setState({
            num: this.state.num - 1
        });
    },

    render() {
        if (this.state.num > 0) {
            return(
            <View style={styles.counterContainer}>
                <Text style={styles.counterNum}>{this.state.num}</Text>
                <Text style={styles.counterLabel}>{this.props.label}</Text>

                <View style={styles.counterButtonContainer}>

                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttonText} onPress={this.decrement}>-</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttonText} onPress={this.increment}>+</Text>
                    </TouchableHighlight>
                    
                </View>
            </View>
        );
        }
        return null;
    }
});

var Counters = React.createClass({

    generateUIDNotMoreThan1million() {
        return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4)
    },


    getInitialState() {
        return {
            counterLabels: []
        };
    },

    addCounter() {
        if (this.state.counterLabels.length < 4) {
            var counter = {key: this.generateUIDNotMoreThan1million(), name: 'Token', num: 1};
            var newLabels = this.state.counterLabels.slice();
            newLabels.push(counter);
            this.setState({
                counterLabels: newLabels
            });
        }
    },

    render() {

        var counters = this.state.counterLabels.map(function(e) {
            return (<Counter key={e.key} label={e.name} num={e.num} />);
        });

        return(
                <View>
                {counters}
                <Text style={styles.addText} onPress={this.addCounter}>Add Counter</Text>
                </View>
        );
    }
});


var styles = StyleSheet.create({
    FFA: {
        transform: [{scale: 0.75}]
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    counterNum: {
        flex: 1.40,
        fontSize: 17,
        paddingLeft: 30,
        fontFamily: 'Avenir Next',
        marginBottom: 2,
        color: 'white'
    },
    counterLabel: {
        flex: 4,
        fontSize: 17,
        fontFamily: 'Avenir Next',
        textAlign: 'center',
        color: 'white'
    },
    counterButtonContainer: {
        flex: 2,
        flexDirection: 'row'
    },
    button: {
        flex: 1
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'Avenir Next',
        textAlign: 'center',
        color: 'white'

    },
    addText: {
        color: 'white',
        fontFamily: 'Avenir Next',
        textAlign: 'center',
        marginTop: 20
    }
});


module.exports = Counters;

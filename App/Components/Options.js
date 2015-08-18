
var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    TextInput,
    SliderIOS,
    TouchableHighlight
} = React;

var HEALTH_KEY = '@MonoCountStorage:health';
var PLAYER1NAME_KEY = '@MonoCountStorage:player1Name';
var PLAYER2NAME_KEY = '@MonoCountStorage:player2Name';
var PLAYER3NAME_KEY = '@MonoCountStorage:player3Name';
var PLAYER4NAME_KEY = '@MonoCountStorage:player4Name';

var Options = React.createClass({

    componentDidMount() {
        this.loadData();
    },

    cancelSettings() {
        this.props.navigator.pop();
    },

    saveData() {
        if (this.state.health !== null) {
            AsyncStorage.setItem(HEALTH_KEY, this.state.health.toString());
        } else {
            AsyncStorage.setItem(HEALTH_KEY, "20");
        }

        if (this.state.player1Name !== null) {
            AsyncStorage.setItem(PLAYER1NAME_KEY, this.state.player1Name);
        } else {
            AsyncStorage.setItem(PLAYER1NAME_KEY, "");
        }

        if (this.state.player2Name !== null) {
            AsyncStorage.setItem(PLAYER2NAME_KEY, this.state.player2Name);
        } else {
            AsyncStorage.setItem(PLAYER2NAME_KEY, "");
        }

        if (this.state.player3Name !== null) {
            AsyncStorage.setItem(PLAYER3NAME_KEY, this.state.player3Name);
        } else {
            AsyncStorage.setItem(PLAYER3NAME_KEY, "");
        }

        if (this.state.player4Name !== null) {
            AsyncStorage.setItem(PLAYER4NAME_KEY, this.state.player4Name);
        } else {
            AsyncStorage.setItem(PLAYER4NAME_KEY, "");
        }


        this.props.navigator.pop();
    },

    loadData() {
        AsyncStorage.getItem(HEALTH_KEY)
            .then((value) => {
                if (value !== null) {
                    this.setState({health:parseInt(value)});
                } else {
                    this.setState({health: 20});
                }
                return AsyncStorage.getItem(PLAYER1NAME_KEY);
            })
            .then((value) => {
                this.setState({player1Name:value});
                return AsyncStorage.getItem(PLAYER2NAME_KEY);
            })
            .then((value) => {
                this.setState({player2Name:value});
                return AsyncStorage.getItem(PLAYER3NAME_KEY);
            })
            .then((value) => {
                this.setState({player3Name:value});
                return AsyncStorage.getItem(PLAYER4NAME_KEY);
            })
            .then((value) => {
                return this.setState({player4Name:value});
            })
            .done();
    },

    getInitialState() {
        return {
            player1Name: '',
            player2Name: '',
            player3Name: '',
            player4Name: '',
            health: 20
        };
    },

    render() {
        return (
                <View style={styles.container}>

                <Text style={styles.label}>Player 1</Text>
                <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({player1Name: text})}
            value={this.state.player1Name}
                />

                <Text style={styles.label}>Player 2</Text>
                <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({player2Name: text})}
            value={this.state.player2Name}
                />

                <Text style={styles.label}>Player 3</Text>
                <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({player3Name: text})}
            value={this.state.player3Name}
                />

                <Text style={styles.label}>Player 4</Text>
                <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({player4Name: text})}
            value={this.state.player4Name}
                />

                <View>
                <Text style={styles.label}>Starting Health</Text>
                <Text style={styles.label}>{this.state.health}</Text>
                </View>
                <SliderIOS
            style={styles.slider}
            onValueChange={(value) => this.setState({health: Math.round(value)})}
            minimumValue = {0}
            maximumValue = {100}
            value={this.state.health}/>

                <View style={styles.buttonContainer}>
                <TouchableHighlight
            style={styles.button}
            onPress={this.saveData}
            underlayerColor="white">
                <Text style={styles.buttonText}> Save </Text>
                </TouchableHighlight>

                <TouchableHighlight
            style={styles.button}
            onPress={this.cancelSettings}
            underlayerColor="white">
                <Text style={styles.buttonText}> Cancel </Text>
                </TouchableHighlight>

                </View>
                </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C090A',
        padding: 20
    },
    textInput: {
        height: 36,
        borderColor: 'gray',
        borderWidth: 1,
        color: 'white',
        fontFamily: 'Avenir Next',
    },

    label: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Avenir Next',
    },
    slider: {
        height: 10,
        margin: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#0C090A',
        padding: 15,
    },
    buttonText: {
        fontSize: 17,
        color: 'white',
        fontFamily: 'Avenir Next',
        textAlign: 'center'
    }
});


module.exports = Options;

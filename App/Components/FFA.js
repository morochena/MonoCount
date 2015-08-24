const React = require('react-native');

const {
    View,
    StyleSheet,
    AsyncStorage,
} = React;

const Player = require('./Player');
const GameMenu = require('./GameMenu');

const HEALTH_KEY = '@MonoCountStorage:health';
const PLAYER1NAME_KEY = '@MonoCountStorage:player1Name';
const PLAYER2NAME_KEY = '@MonoCountStorage:player2Name';
const PLAYER3NAME_KEY = '@MonoCountStorage:player3Name';
const PLAYER4NAME_KEY = '@MonoCountStorage:player4Name';


var FFA = React.createClass({

    getInitialState() {
        return {
            health: 20,
            player1Name: '',
            player2Name: '',
            player3Name: '',
            player4Name: ''
        };
    },
    componentDidMount() {
        this.loadData();
    },

    loadData() {

        var lHealth;
        var lP1;
        var lP2;
        var lP3;
        var lP4;

        AsyncStorage.getItem(HEALTH_KEY)
            .then((value) => {
                if (value !== null) {
                    lHealth = parseInt(value);
                } else {
                    lHealth = 20;
                }
                return AsyncStorage.getItem(PLAYER1NAME_KEY);
            })
            .then((value) => {
                lP1 = value;
                return AsyncStorage.getItem(PLAYER2NAME_KEY);
            })
            .then((value) => {
                lP2 = value;
                return AsyncStorage.getItem(PLAYER3NAME_KEY);
            })
            .then((value) => {
                lP3 = value;
                return AsyncStorage.getItem(PLAYER4NAME_KEY);
            })
            .then((value) => {
                lP4 = value;
            })
            .done(() => {
                if (this.isMounted()) {
                    this.setState({
                        health: lHealth,
                        player1Name: lP1,
                        player2Name: lP2,
                        player3Name: lP3,
                        player4Name: lP4
                    });
                }
            });
    },

    render: function() {
        return(
                <View style={styles.container}>
                    <GameMenu styles={styles.gameMenu} navigator={this.props.navigator} />
                    <Player
                        name={this.state.player1Name}
                        FFA={true}
                    />
                    <Player
                        name={this.state.player2Name}
                        FFA={true}
                    />
                    <Player
                        name={this.state.player3Name}
                        FFA={true}
                    />
                </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C090A'
    }
});

module.exports = FFA;
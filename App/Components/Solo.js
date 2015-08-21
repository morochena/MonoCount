var React = require('react-native');

var {
	View,
	StyleSheet,
	AsyncStorage,
	StatusBarIOS
} = React;

var Player = require('./Player');
var GameMenu = require('./GameMenu');

var HEALTH_KEY = '@MonoCountStorage:health';
var PLAYER1NAME_KEY = '@MonoCountStorage:player1Name';


var Solo = React.createClass({

	resetHealth() {
        this.refs.player1.resetHealth();
    },

	getInitialState() {
		return {
			health: 20,
			player1Name: ''
		};
	},

	componentDidMount() {
		this.loadData();
	},

	loadData() {

		var lHealth;
		var lP1;

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
		})
		.done(() => {
			if (this.isMounted()) {
				this.setState({
					health: lHealth,
					player1Name: lP1
				});
			}
		});
	},

	render: function() {
		StatusBarIOS.setHidden(true);
		return(
			<View style={styles.container}>
			<GameMenu navigator={this.props.navigator} resetHealth={this.resetHealth} />
			<Player name={this.state.player1Name} ref={'player1'}/>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0C090A',
		justifyContent: 'space-between',
		paddingBottom: 20,
		paddingTop: 20
	},
	buffer: {
		margin: 15
	}
});

module.exports = Solo;

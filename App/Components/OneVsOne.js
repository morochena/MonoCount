var React = require('react-native');

var {
    View,
    Text,
    StyleSheet
} = React;

var Player = require('./Player');
var GameMenu = require('./GameMenu');


var OneVsOne = React.createClass({
    render: function() {
        return(
                <View style={styles.container}>
                <Player isReversed={true} />
                <GameMenu navigator={this.props.navigator} />
                <Player  />
                </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: '#0C090A'
    }
});

module.exports = OneVsOne;

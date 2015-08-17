var React = require('react-native');

var {
    View,
    Text,
    StyleSheet
} = React;

var Player = require('./Player');

var OneVsOne = React.createClass({
    render: function() {
        return(
                <View style={styles.container}>
                <Player isReversed={true} />
                <Player  />
                </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 65
    }
});

module.exports = OneVsOne;

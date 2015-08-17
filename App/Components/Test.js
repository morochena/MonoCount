var React = require('react-native');

var {
    Text,
    View,
    StyleSheet
} = React;

var Test = React.createClass({
    render: function() {
        return(
                <View style={styles.mainContainer}>
                <Text>Yeah Man</Text>
                </View>
        );
    }
});

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#48BBEC'
    }
});


module.exports = Test;

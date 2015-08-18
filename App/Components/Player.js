var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Animated,
  AsyncStorage
} = React;

var HEALTH_KEY = '@MonoCountStorage:health';

var Player = React.createClass({

    componentDidMount() {
        this.loadData();
    },

    loadData() {
        AsyncStorage.getItem(HEALTH_KEY)
            .then((value) => {
                if (value !== null) {
                    this.setState({health: parseInt(value)});
                } else {
                    this.setState({health: 20});
                }
            }
        ).done();
    },


    increment() {
        this.setState({
            health: this.state.health + 1
        });

        this.state.bounceValue.setValue(1.5);

        Animated.spring(
            this.state.bounceValue,
            {
                toValue: 1.0,
                friction: 1
            }).start();
        },

    decrement() {
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

      getInitialState() {
        return {
          health: 20,
          bounceValue: new Animated.Value(1),
        };
      },

      render: function() {
        return(
          <View style={
            [
                this.props.FFA && styles.containerFFA,
              styles.container,
                this.props.isReversed && styles.reversed,
            ]}>

                <Animated.Text style={
                    [styles.health,
                     {transform: [{scale: this.state.bounceValue}]},
                     this.props.FFA && styles.healthFFA,
                    ]}>{this.state.health}</Animated.Text>
            <Text style={styles.name}>{this.props.name}</Text>

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
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end'
          },
          containerFFA: {
              transform: [{scale: 0.75}]
          },
        healthContainer: {
          flexDirection: 'column'
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
          healthFFA: {
              fontSize: 70
          },
        name: {
          fontSize: 17,
          textAlign: 'center',
          color: '#E5E4E2',
          fontFamily: 'Avenir Next'
        },
          counterContainer: {
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center'
        },
        counter: {
          fontSize: 30,
          color: '#D1D0CE',
          marginLeft: 15,
          marginRight: 15
        },
        modifyButtonContainer: {
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-around'
        },
        button: {
          backgroundColor: '#0C090A',
        },
        modify: {
          fontSize: 90,
          textAlign: 'center',
          color: '#E5E4E2'
        }
      });

      module.exports = Player;

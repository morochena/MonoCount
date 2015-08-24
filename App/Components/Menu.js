const React = require('react-native');

const {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} = React;

const OneVsOne = require('./OneVsOne');
const Solo = require('./Solo');
const FFA = require('./FFA');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C090A',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#E5E4E2',
    fontFamily: 'Avenir Next',
  },
  instructions: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 10,
    fontFamily: 'Avenir Next',
  },
  colorContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  welcomeColors: {
    width: 60,
    height: 60,
    margin: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#0C090A',
    padding: 15,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#E5E4E2',
    fontFamily: 'Avenir Next',
  },
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.goSolo = this.goSolo.bind(this);
    this.go1v1 = this.go1v1.bind(this);
    this.state = {};
  }

  goSolo() {
    this.props.navigator.push({
      title: 'Solo',
      component: Solo,
    });
  }

  go1v1() {
    this.props.navigator.push({
      title: 'One vs One',
      component: OneVsOne,
    });
  }

  goFFA() {
    this.props.navigator.push({
      title: 'One vs One',
      component: FFA,
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> MonoCount </Text>

        <View style={styles.colorContainer}>
          <Image source={require('image!blue')} style={styles.welcomeColors} />
          <Image source={require('image!red')} style={styles.welcomeColors} />
          <Image source={require('image!black')} style={styles.welcomeColors} />
          <Image source={require('image!white')} style={styles.welcomeColors} />
          <Image source={require('image!green')} style={styles.welcomeColors} />
        </View>

        <Text style={styles.instructions}> Created by Marcus Orochena </Text>

        <TouchableHighlight style={styles.button} onPress={this.goSolo} ref="solo">
          <Text style={styles.buttonText}> Solo </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={this.go1v1} ref="1v1">
          <Text style={styles.buttonText}> One vs One </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Menu.propTypes = { navigator: React.PropTypes.number };

Menu.defaultProps = { navigator: 5 };

module.exports = Menu;

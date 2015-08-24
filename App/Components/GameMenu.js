const React = require('react-native');

const {
  View,
  Text,
  StyleSheet,
  AlertIOS,
  TouchableHighlight,
} = React;

const Options = require('./Options');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smcont: {
    flex: 1,
  },
  gg: {
    textAlign: 'center',
    color: '#fff',
  },
  button: {
    flex: 1,
    padding: 5,
  },
});

class GameMenu extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.goOptions = this.goOptions.bind(this);
    this.state = {};
  }

  goBack() {
    AlertIOS.alert(
      'Back to Main Menu',
      'Your current game will be lost.',
      [
        {text: 'Yes', onPress: () => this.props.navigator.pop()},
        {text: 'Cancel', onPress: () => ''},
      ]
    );
  }

  goOptions() {
    this.props.navigator.push({component: Options});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button}>
          <Text onPress={this.props.resetHealth} style={styles.gg}> Reset </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={this.goBack}>
          <Text onPress={this.goBack} style={styles.gg}> Menu </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={this.options}>
          <Text onPress={this.goOptions} style={styles.gg}> Options </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

GameMenu.propTypes = {
  navigator: React.PropTypes.number,
  resetHealth: React.PropTypes.number,
};

GameMenu.defaultProps = {
  navigator: 5,
  resetHealth: 5,
};

module.exports = GameMenu;

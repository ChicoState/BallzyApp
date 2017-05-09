import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';


class New extends React.Component {
  state = {
    title: '',
    description: '',
    price: '',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pricetitlearea}>
        <TextInput
          style={styles.titleinput}
          placeholder='Title'
          onChangeText={(text) => {
              this.setState({
                title: text,
              });
            }}
            value={this.state.title}
        />
        <View style={{flex:.3}}/>
        <TextInput
          style={styles.priceinput}
          placeholder='Price'
          onChangeText={(text) => {
              this.setState({
                price: text,
              });
            }}
            value={this.state.price}
        />
        </View>
        <Text style={{paddingLeft: 20, paddingTop:null, fontSize: 20}}>Description:</Text>
        <TextInput
          placeholder='add description .........'
          style={styles.descriptionInput}
          numberOfLines= {8}
          maxLength= {352}
          multiline={true}
          textAlignVertical = {'top'}
          onChangeText={(text) => {
              this.setState({
                description: text,
              });
            }}
            value={this.state.description}
        />

        <View style={styles.buttonarea}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Challenges', {
              chaltitle: this.state.title,
              description: this.state.description,
              price: this.state.price,

          })}>
          <Text style={styles.buttonText}>
            Post
          </Text>
          </TouchableOpacity>
        </View>


      </View>
    );
  }
}


New.propTypes = {
  search: React.PropTypes.string,
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#dcebfc'
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  pricetitlearea: {
    padding: 5,
    height: 40,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row'
  },
  buttonarea: {
    padding: 5,
    height: 40,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row'
  },
  titleinput: {
    flex:7,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
  },
  priceinput: {
    flex:2.6,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
  },
  descriptionInput: {
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    borderColor: 'black',
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  button: {
    borderRadius: 5,
    height: 40,
    width: 90,
    borderColor: '#7F8284',
    backgroundColor: '#4392f1',
    borderRadius: 10
  },
  buttonText: {
    alignSelf: 'center',
    textAlign: 'center',
    padding: 5,
    fontSize: 20,
    color: '#FFFFFF'
  },
});

export default New;

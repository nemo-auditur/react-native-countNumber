import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [sentence, setSentence] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  const displayNumbers = (sentence) => {
    return sentence
      .split(' ')
      .map(word => {if(word) return word.length})
      .join(' ')
  }

  const onClean = () => {
    setSentence('')
    setIsDisabled(true)
  }

  return (
    <View style={styles.container}>
      <Text>Entrez la phrase de votre choix</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder='Entrez votre phrase ici'
          onChangeText={sentence => {
            setSentence(sentence)
            sentence&& setIsDisabled(false)
          }}
          defaultValue={sentence}/>
      </View>
      <Text>{displayNumbers(sentence)}</Text>
        <Button
        disabled={isDisabled}
        title='Clean'
        onPress={onClean}
        accessibilityLabel="Clean sentense"
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderWidth: 1, 
    borderRadius: 4,
    minWidth: 200,
    height: 50,
    marginTop: 30,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
  }
});

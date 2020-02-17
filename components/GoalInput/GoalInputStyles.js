import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flex: 10,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderBottomColor: "black", 
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  inputButtons: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 15,
  },
  button: {
    width: '45%',
  }
});

export default styles;

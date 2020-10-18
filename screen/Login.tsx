import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInputView from '../component/TextInputView';
import Button from '../component/Button';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style={styles.container} >
            <Text style={styles.loginText} >Login</Text>
            <View style={styles.inputContainer} >
                <TextInputView 
                    property="Email" 
                    value={email} 
                    onChangeText={(text) => setEmail(text)} 
                />
                <TextInputView 
                    property="Password" 
                    value={password} 
                    onChangeText={(text) => setPassword(text)} 
                />
                <Button title="Login" onPress={() => console.log('Hello') } />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff', flex: 1
    },
    loginText:{
        fontSize: 55, marginVertical: 50, color: '#1C2DF5'
    },
    inputContainer:{
        flex: 1, 
        borderWidth: 1,
        borderRadius: 12, 
        alignItems: 'center',
        justifyContent: 'flex-start', 
        borderColor: '#0000ff'
    }
})
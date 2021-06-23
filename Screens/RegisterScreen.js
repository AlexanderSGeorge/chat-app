import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useState, useLayoutEffect } from "react";
import { StatusBar } from 'react-native'
import {KeyboardAvoidingView} from 'react-native'
import {Button, Input} from "react-native-elements"


const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [register, setRegisterL] = useState("");
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        })
    }, [navigation])

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />

            <Text h3 style ={{ marginBottom: 50 }}
            >Create a Signal Account
            </Text>
            
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Full Name"
                    autoFocus
                    type="text"
                    value={name}
                    OnChangeText={(text) => setName(text)}
                />
                <Input 
                    placeholder="Email"
                    type="email"
                    value={email}
                    OnChangeText={(text) => setEmail(text)}
                />
                <Input 
                    placeholder="Password"
                    type="password"
                    secureTextEntry
                    value={password}
                    OnChangeText={(text) => setPassword(text)}
                />
                <Input 
                    placeholder="Profile Picture URL (Optional)"
                    type="text"
                    value={imageURL}
                    OnChangeText={(text) => setImageURL(text)}
                    onSubmitEditing={register}
                />
            </View>
            <Button 
                raised 
                onPress={register} 
                title="Register" 
                />
        </KeyboardAvoidingView>
    )
}


export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300,

    },
    button: {
        width: 200, 
        marginTop: 10,
    },
    
}
);
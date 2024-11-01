import React, { useState } from "react";
import { Alert, TextInput, ToastAndroid, TouchableOpacity, View, Text, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";  // Import RNPickerSelect

const MyApp = () => {

    const [userType, setUserType] = useState("");
    const [userName, setUserName] = useState("");

    return (
        <View>
            <Text>User Type:</Text>
            <RNPickerSelect
                onValueChange={(selectedValue) => setUserType(selectedValue)}
                items={[
                    { label: 'Admin', value: 'Admin' },
                    { label: 'Guest', value: 'Guest' },
                ]}
            />

            <Text>User Name:</Text>
            <TextInput
                style={{ borderWidth: 1 }}
                onChangeText={(text) => setUserName(text)}
            />

            <Text>Password:</Text>
            <TextInput style={{ borderWidth: 1 }} />

            <Button
                title="LOG IN"
                onPress={() => {
                    const welcomeMessage = `Welcome ${userType} ${userName}`;
                    ToastAndroid.show(welcomeMessage, ToastAndroid.SHORT);
                }}
            />

            <TouchableOpacity
                onPress={() => {
                    const welcomeMessage = `Welcome ${userType} ${userName}`;
                    ToastAndroid.show(welcomeMessage, ToastAndroid.SHORT);
                }}>
                <Text>LOG IN</Text>
            </TouchableOpacity>


        </View>
    );
};

export default MyApp;

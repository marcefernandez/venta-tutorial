import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home () {
    const navigation = useNavigation();
    return (
        <>
            <RN.Text>This is the Home</RN.Text>
            <RN.Button title="go to Add Screen" onPress={() => navigation.navigate("Add")} />
        </>
    )
}

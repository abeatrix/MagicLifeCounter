import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native'

const blue = require('../assets/U.png')

const HomeScreen = () => {

    const [time, setTime] = useState(60)
    const [life, setLife] = useState(40)

    useEffect(()=>{
        // console.log(time);

        if (time < 1) {
            return;
        }

        const timer = setTimeout(() => {
            setTime(prv => prv-1)
        }, 1000);

        return()=>{
            clearTimeout(timer)
        }
    }, [time])

    return (
        <View style={styles.container}>
            <Text style={styles.counter}>{time}</Text>
            <Button onPress={()=>setTime(60)} title='Reset Time'/>
            { life < 1 ? <Text style={styles.counter}>Dead</Text> : <Text style={styles.counter}>{life}</Text>}
            <Button onPress={()=>setLife(life+1)} title='+'/><Button onPress={()=>setLife(life-1)} title='-'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    counter: {
        fontSize: 100,
    },
    pic:{
        width: 300,
        height: 300,
    }
})

export default HomeScreen;

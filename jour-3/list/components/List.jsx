
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Svg from 'react-native-svg';



export default function List() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(
            'http://restcountries.eu/rest/v2/all'
        )
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                setCountries(response);
            });
    }, []
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={countries}
                renderItem={({ item }) => {
                    return (
                        <>
                            <Text> {item.name} , {item.capital}, </Text>
                            <Image style={{ width: 150, height: 50 }} source={{ uri: `${item.flag}` }}></Image>
                           
                        </>
                    )


                }}
            />
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
});

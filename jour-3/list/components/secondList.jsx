import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";


export default class SecondList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
        };

    }

    componentDidMount() {
        fetch(`http://restcountries.eu/rest/v2/all`)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                this.setState({ countries: response });
            });
    }

    render() {
        return (
            <View>
                {this.state.countries.map((country) => {
                    return (
                        <View >
                            <FlatList
                                data={countries}
                                renderItem={({ item }) => (
                                    <Text> {item.name} , {item.capital}</Text>
                                )}
                            />
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({

})
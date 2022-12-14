import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ImageBackground, Platform, SafeAreaView, View, ActivityIndicator } from 'react-native';

import getImageForWeather from './utils/getImageForWeather';
import { fetchLocationWeather } from './utils/api';

import SearchInput from './components/SearchInput';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            location: '',
            temperature: 0,
            weather: '',
        };
    }
    componentDidMount() {
        this.handleUpdateLocation('San Francisco');
    }

    handleUpdateLocation = async city => {
        if (!city) return;

        this.setState({ loading: true }, async () => {
            try {
                const { location, weather, temperature } = await fetchLocationWeather(city);
                this.setState({
                    loading: false,
                    error: false,
                    location,
                    weather,
                    temperature,
                });
            } catch (e) {
                this.setState({
                    loading: false,
                    error: true,
                });
            }
        });
    };

    render() {
        const { loading, error, location, weather, temperature } = this.state;

        return (
            <SafeAreaView style={styles.container} behavior='padding'>
                <ImageBackground
                    source={getImageForWeather({weather})}
                    style={styles.imageContainer}
                    imageStyle={styles.image}>
                    <View style={styles.detailsContainer}>
                        <ActivityIndicator animating={loading} color="white" size="large" />

                        {!loading && (
                            <View>
                                {error && (
                                    <Text style={[styles.smallText, styles.textStyle]}>
                                        Could not load weather, please try a different city.
                                    </Text>
                                )}

                                {!error && (
                                    <View>
                                        <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
                                        <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
                                        <Text style={[styles.largeText, styles.textStyle]}>{`${Math.round(temperature)}??`}</Text>
                                        
                                    </View>
                                    )}
                                    <SearchInput
                                            placeholder="Search some good weather"
                                            onSubmit={this.handleUpdateLocation}
                                        />
                            </View>
                        )}
                    </View>
                </ImageBackground>

            </SafeAreaView>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495E',
    },
    textStyle: {
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Arial',
        color: 'white',
    },
    largeText: {
        fontSize: 44,
    },
    smallText: {
        fontSize: 18,
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: 20,
    },
});

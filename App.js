import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApolloProvider from './utils/ApolloProvider';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import {
	Provider as PaperProvider,
	DarkTheme as PaperDarkTheme,
	DefaultTheme as PaperDefaultTheme
} from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import store from './redux/store';
import { AppLoading } from 'expo';

const fetchFonts = () => {
	return Font.loadAsync({
		ubuntu          : require('./assets/fonts/Ubuntu-Regular.ttf'),
		'ubuntu-bold'   : require('./assets/fonts/Ubuntu-Bold.ttf'),
		'ubuntu-medium' : require('./assets/fonts/Ubuntu-Medium.ttf'),
		'ubuntu-light'  : require('./assets/fonts/Ubuntu-Light.ttf')
	});
};

export default function App() {
	const [
		isDarkTheme,
		setIsDarkTheme
	] = useState(false);
	const [
		fontLoaded,
		setFontLoaded
	] = useState(false);
	if (!fontLoaded) {
		return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;
	}
	const CustomDefaultTheme = {
		...NavigationDefaultTheme,
		...PaperDefaultTheme,
		colors : {
			...NavigationDefaultTheme.colors,
			...PaperDefaultTheme.colors
		}
	};

	const CustomDarkTheme = {
		...NavigationDarkTheme,
		...PaperDarkTheme,
		colors : {
			...NavigationDarkTheme.colors,
			...PaperDarkTheme.colors
		}
	};

	const theme =
		isDarkTheme ? CustomDarkTheme :
		CustomDefaultTheme;
	return (
		<ApolloProvider>
			<Provider store={store}>
				<PaperProvider theme={theme}>
					<View style={styles.container}>
						<Text>Open up App.js to start working on your app!</Text>
						<StatusBar style="auto" />
					</View>
				</PaperProvider>
			</Provider>
		</ApolloProvider>
	);
}

const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : '#fff',
		alignItems      : 'center',
		justifyContent  : 'center'
	}
});

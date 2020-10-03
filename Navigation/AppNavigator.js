import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ContactsOverviewScreen, { screenOptions } from '../screens/ContactsOverviewScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
// import ProductDetailsScreen, { productDetailsScreenOptions } from '../screens/shop/ProductDetailsScreen';
// import CartScreen, { cartScreenOptions } from '../screens/shop/CartScreen';
// import AuthScreen, { authScreenOptions } from '../screens/user/AuthScreen';

// TODO: particular screen options

// export const screenOptions = (navData) => {
// 	return {
// 		headerTitle : 'All Products',
// 		headerRight : () => (
// 			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
// 				<Item
// 					title="Cart"
// 					iconName={

// 							Platform.OS === 'android' ? 'md-cart' :
// 							'ios-cart'
// 					}
// 					onPress={() => {
// 						navData.navigation.navigate('Cart');
// 					}}
// 				/>
// 			</HeaderButtons>
// 		),

// 		headerLeft  : () => (
// 			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
// 				<Item
// 					title="Menu"
// 					iconName={

// 							Platform.OS === 'android' ? 'md-menu' :
// 							'ios-menu'
// 					}
// 					onPress={() => {
// 						navData.navigation.toggleDrawer();
// 					}}
// 				/>
// 			</HeaderButtons>
// 		)
// 	};
// };

// TODO: particular screen options

const defaltNavOptions = {
	headerStyle          : {
		backgroundColor :

				Platform.OS === 'android' ? Colors.primary :
				''
	},
	headerBackTitleStyle : {
		fontFamily : 'ubuntu'
	},
	headerTitleStyle     : {
		fontFamily : 'ubuntu-bold'
	},
	headerTintColor      :

			Platform.OS === 'android' ? 'white' :
			Colors.primary
};

const MainStackNavigator = createStackNavigator();

export const MainNavigator = () => {
	return (
		<MainStackNavigator.Navigator screenOptions={defaltNavOptions}>
			<MainStackNavigator.Screen
				name="ProductsOverview"
				component={ContactsOverviewScreen}
				options={screenOptions}
			/>
			{/* <MainStackNavigator.Screen
				name="ProductDetail"
				component={ProductDetailsScreen}
				options={productDetailsScreenOptions}
			/>
			<MainStackNavigator.Screen name="Cart" component={CartScreen} options={cartScreenOptions} /> */}
		</MainStackNavigator.Navigator>
	);
};

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
	return (
		<AuthStackNavigator.Navigator screenOptions={defaltNavOptions}>
			<AuthStackNavigator.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
			{/* <AuthStackNavigator.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} /> */}
		</AuthStackNavigator.Navigator>
	);
};

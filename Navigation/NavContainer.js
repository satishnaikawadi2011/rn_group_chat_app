import React from 'react';
import jwtDecode from 'jwt-decode';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import store from '../redux/store';
import { LOGIN, LOGOUT } from '../redux/types';
import { AuthNavigator, MainNavigator } from '../Navigation/AppNavigator';

const NavContainer = (props) => {
	const { isAuth } = store.getState().user;
	const token = AsyncStorage.getItem('token');
	if (token) {
		const decodedToken = jwtDecode(token);
		if (decodedToken.exp * 1000 < Date.now()) {
			store.dispatch({ type: LOGOUT });
		}
		else {
			store.dispatch({ type: LOGIN, payload: token });
		}
	}
	return (
		<NavigationContainer>
			{isAuth && <MainNavigator />}
			{!isAuth && <AuthNavigator />}
		</NavigationContainer>
	);
};
export default NavContainer;

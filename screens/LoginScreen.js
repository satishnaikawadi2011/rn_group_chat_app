import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Alert, ScrollView } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import Colors from '../../constants/Colors';
import RoundedButton from '../../components/UI/RoundedButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useLazyQuery } from '@apollo/client';
import { LOGIN_USER } from '../utils/graphql';

function LoginScreen(props) {
	const navigation = props.navigation;
	const dispatch = useDispatch();
	const [
		loading,
		setLoading
	] = useState(false);
	const initialUserData = {
		email    : '',
		password : ''
	};
	const [
		userData,
		setUserData
	] = useState(initialUserData);
	const [
		errors,
		setErrors
	] = useState({});
	const [
		loginUser
	] = useLazyQuery(LOGIN_USER, {
		onError(err) {
			console.log(err);
			setErrors(err.graphQLErrors[0].extensions.errors);
			setLoading(false);
		},
		onCompleted(data) {
			dispatch(login(data.login.token));
			setLoading(false);
		}
	});
	const handleChange = (e, name) => {
		setUserData({ ...userData, [name]: e.target.value });
	};
	const handleSubmit = () => {
		setLoading(true);
		loginUser({ variables: userData });
		setUserData(initialUserData);
	};
	return (
		<View style={styles.container}>
			<LinearGradient
				style={styles.gradient}
				colors={[
					'hsla(197, 100%, 64%, 1)',
					'hsla(339, 100%, 55%, 1)'
				]}
				start={[
					0,
					0
				]}
			>
				<View style={styles.form}>
					<ScrollView>
						<TextInput
							style={styles.input}
							label="Email"
							left={<TextInput.Icon name="email" />}
							value={userData.email}
							keyboardType="email-address"
							onChangeText={(e) => handleChange(e, 'email')}
							placeholder="Enter your email ..."
							underlineColor={Colors.primary}
							selectionColor={Colors.primary}
							error={

									errors.email ? true :
									false
							}
						/>
						{errors.email && (
							<HelperText
								style={{ textAlign: 'center' }}
								type="error"
								visible={

										errors.email ? true :
										false
								}
							>
								{errors.email}
							</HelperText>
						)}
						<TextInput
							style={styles.input}
							label="Password"
							value={userData.password}
							secureTextEntry
							left={<TextInput.Icon name="key-variant" />}
							onChangeText={(e) => handleChange(e, 'password')}
							placeholder="Enter your password ..."
							underlineColor={Colors.primary}
							selectionColor={Colors.primary}
							error={

									errors.password ? true :
									false
							}
						/>
						{errors.password && (
							<HelperText
								style={{ textAlign: 'center' }}
								type="info"
								visible={

										errors.password ? true :
										false
								}
							>
								{errors.password}
							</HelperText>
						)}
						<RoundedButton
							width={Dimensions.get('window').width * 0.9}
							style={styles.btn}
							loading={loading}
							title="sign in"
							onPress={

									!loading ? handleSubmit :
									() => {}
							}
						/>
						<RoundedButton
							width={Dimensions.get('window').width * 0.9}
							style={styles.btn}
							title="Register here"
							onPress={() => {

									!loading ? navigation.navigate('Signup') :
									null;
							}}
						/>
					</ScrollView>
				</View>
			</LinearGradient>
		</View>
	);
}

export default LoginScreen;

const styles = StyleSheet.create({
	container : {
		flex : 1
	},
	gradient  : {
		flex           : 1,
		justifyContent : 'center',
		alignItems     : 'center'
	},
	input     : {
		width          : '90%',
		height         : 60,
		marginVertical : 10,
		marginLeft     : 20
	},
	form      : {
		width     : '90%',
		maxHeight : 500,
		maxWidth  : 400
	},
	btn       : {
		marginTop : 20
	}
});

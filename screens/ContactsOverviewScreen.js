import React, { useState, useEffect } from 'react';
import { Platform, Image, View, Button, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import { Text } from 'react-native-paper';
import CustomBadge from '../../components/UI/CustomBadge';

function ContactsOverviewScreen(props) {
	const dispatch = useDispatch();
	const [
		errors,
		setErrors
	] = useState(null);
	// if (error) {
	// 	return (
	// 		<View style={styles.centered}>
	// 			<Text style={{ marginBottom: 7 }}>An error occured !</Text>
	// 			<Button title="Try Again" color={Colors.primary} onPress={loadScreams} />
	// 		</View>
	// 	);
	// }
	// if (loading) {
	// 	return (
	// 		<View>
	// 			<ScreamSkeleton loading={loading} />
	// 			<ScreamSkeleton loading={loading} />
	// 			<ScreamSkeleton loading={loading} />
	// 		</View>
	// 	);
	// }
	// if (!isRefreshing && screams.length === 0) {
	// 	return (
	// 		<View style={styles.centered}>
	// 			<Text style={{ fontFamily: 'ubuntu' }}>No screams found , Maybe start adding some !! </Text>
	// 		</View>
	// 	);
	// }
	// return (
	// 	<FlatList
	// 		onRefresh={loadScreams}
	// 		refreshing={isRefreshing}
	// 		keyExtractor={(item) => item._id}
	// 		data={screams}
	// 		renderItem={({ item }) => {
	// 			return <ScreamComponent scream={item} />;
	// 		}}
	// 	/>
	// );
	return <Text>Conatcts Overview Screen</Text>;
}

export default ContactsOverviewScreen;

const styles = StyleSheet.create({
	centered : {
		flex           : 1,
		justifyContent : 'center',
		alignItems     : 'center'
	}
});

export const screenOptions = (navData) => {
	return {
		headerTitle : 'SatChat',
		headerRight : () => (
			<View>
				<CustomBadge style={{ position: 'absolute', top: -10 }} />
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title="Notifications"
						iconName={

								Platform.OS === 'android' ? 'md-notifications' :
								'ios-notifications'
						}
						onPress={() => {
							// navData.navigation.navigate('Notification');
						}}
					/>
				</HeaderButtons>
			</View>
		)

		// headerLeft  : () => (
		// 	<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
		// 		<Item
		// 			title="Menu"
		// 			iconName={

		// 					Platform.OS === 'android' ? 'md-menu' :
		// 					'ios-menu'
		// 			}
		// 			onPress={() => {
		// 				navData.navigation.toggleDrawer();
		// 			}}
		// 		/>
		// 	</HeaderButtons>
		// )
	};
};

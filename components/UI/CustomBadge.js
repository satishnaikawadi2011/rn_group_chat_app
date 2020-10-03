import React from 'react';
import { Badge } from 'react-native-paper';
import { useSelector } from 'react-redux';

function CustomBadge(props) {
	const { notifications } = useSelector((state) => state.data);
	const count = notifications.length;
	const { style, size } = props;
	return (
		<Badge
			style={style}
			visible={

					count > 0 ? true :
					false
			}
			size={size}
		>
			{count}
		</Badge>
	);
}

export default CustomBadge;

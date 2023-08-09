import {StyleSheet, View, Text} from "react-native";
import {colors} from "@react-native-ui-components/color";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hey there</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.red
	}
});

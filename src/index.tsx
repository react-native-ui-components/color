import {
	Platform,
	PlatformColor,
	DynamicColorIOS,
	type ColorValue
} from "react-native";

export const DynamicColor = Platform.select({
	ios: DynamicColorIOS,
	default: () => {
		throw new Error("Platform not supported by DynamicColor yet");
	}
});

export const colors = {
	red: Platform.select<ColorValue>({
		ios: PlatformColor("systemRed"),
		android: DynamicColor({
			light: PlatformColor("@android:color/holo_red_light"),
			dark: PlatformColor("@android:color/holo_red_dark")
		}),
		default: "#F00"
	})
};

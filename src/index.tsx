import {
	Platform,
	PlatformColor,
	DynamicColorIOS,
	type ColorValue
} from "react-native";

//todo implement android and web
export const DynamicColor = Platform.select({
	ios: DynamicColorIOS,
	default: () => {
		throw new Error("Platform not supported by DynamicColor yet");
	}
});

interface PlatformSelectColor {
	ios: string;
	android: string;
	web: ColorValue;
}

export const PlatformSelectColor = (props: PlatformSelectColor) =>
	Platform.select({
		ios: PlatformColor(props.ios),
		android: PlatformColor(props.android),
		default: props.web
	});

interface DynamicPlatformSelectColorProps {
	ios: string;
	android: {
		light: string;
		dark: string;
	};
	web: {
		light: ColorValue;
		dark: ColorValue;
	};
}

export const DynamicPlatformSelectColor = (
	props: DynamicPlatformSelectColorProps
) =>
	Platform.select({
		ios: PlatformColor(props.ios),
		android: DynamicColor({
			light: PlatformColor(props.android.light),
			dark: PlatformColor(props.android.dark)
		}),
		default: DynamicColor(props.web)
	});

//todo android and web colors aren't correct
export const colors = {
	fixed: {
		transparent: PlatformSelectColor({
			ios: "clear",
			android: "",
			web: ""
		}),
		black: PlatformSelectColor({ios: "black", android: "", web: ""}),
		blue: PlatformSelectColor({ios: "blue", android: "", web: ""}),
		brown: PlatformSelectColor({ios: "brown", android: "", web: ""}),
		cyan: PlatformSelectColor({ios: "cyan", android: "", web: ""}),
		darkGray: PlatformSelectColor({
			ios: "darkGray",
			android: "",
			web: ""
		}),
		gray: PlatformSelectColor({ios: "gray", android: "", web: ""}),
		green: PlatformSelectColor({ios: "green", android: "", web: ""}),
		lightGray: PlatformSelectColor({
			ios: "lightGray",
			android: "",
			web: ""
		}),
		magenta: PlatformSelectColor({ios: "magenta", android: "", web: ""}),
		orange: PlatformSelectColor({ios: "orange", android: "", web: ""}),
		purple: PlatformSelectColor({ios: "purple", android: "", web: ""}),
		red: PlatformSelectColor({ios: "red", android: "", web: ""}),
		white: PlatformSelectColor({ios: "white", android: "", web: ""}),
		yellow: PlatformSelectColor({ios: "yellow", android: "", web: ""})
	},
	dynamic: {
		blue: DynamicPlatformSelectColor({
			ios: "systemBlue",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#00F",
				dark: "#00F"
			}
		}),
		brown: DynamicPlatformSelectColor({
			ios: "systemBrown",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#964B00",
				dark: "#964B00"
			}
		}),
		cyan: DynamicPlatformSelectColor({
			ios: "systemCyan",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#0FF",
				dark: "#0FF"
			}
		}),
		green: DynamicPlatformSelectColor({
			ios: "systemGreen",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#0F0",
				dark: "#0F0"
			}
		}),
		indigo: DynamicPlatformSelectColor({
			ios: "systemIndigo",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#4b0082",
				dark: "#4b0082"
			}
		}),
		mint: DynamicPlatformSelectColor({
			ios: "systemMint",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#aaf0d1",
				dark: "#aaf0d1"
			}
		}),
		orange: DynamicPlatformSelectColor({
			ios: "systemOrange",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#F80",
				dark: "#F80"
			}
		}),
		pink: DynamicPlatformSelectColor({
			ios: "systemPink",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#F88",
				dark: "#F88"
			}
		}),
		purple: DynamicPlatformSelectColor({
			ios: "systemPurple",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#808",
				dark: "#808"
			}
		}),
		red: DynamicPlatformSelectColor({
			ios: "systemRed",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#F00",
				dark: "#F00"
			}
		}),
		teal: DynamicPlatformSelectColor({
			ios: "systemTeal",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#088",
				dark: "#088"
			}
		}),
		yellow: DynamicPlatformSelectColor({
			ios: "systemYellow",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#FF0",
				dark: "#FF0"
			}
		}),
		gray1: DynamicPlatformSelectColor({
			ios: "systemGray",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#777",
				dark: "#777"
			}
		}),
		gray2: DynamicPlatformSelectColor({
			ios: "systemGray2",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#777",
				dark: "#777"
			}
		}),
		gray3: DynamicPlatformSelectColor({
			ios: "systemGray3",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#777",
				dark: "#777"
			}
		}),
		gray4: DynamicPlatformSelectColor({
			ios: "systemGray4",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#777",
				dark: "#777"
			}
		}),
		gray5: DynamicPlatformSelectColor({
			ios: "systemGray5",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/holo_red_dark"
			},
			web: {
				light: "#777",
				dark: "#777"
			}
		}),
		gray6: DynamicPlatformSelectColor({
			ios: "systemGray6",
			android: {
				light: "@android:color/holo_red_light",
				dark: "@android:color/system_tertiary_dark"
			},
			web: {
				light: "#777",
				dark: "#777"
			}
		})
	},
	elements: {
		label: PlatformSelectColor({
			ios: "label",
			android: "",
			web: ""
		}),
		secondaryLabel: PlatformSelectColor({
			ios: "secondaryLabel",
			android: "",
			web: ""
		}),
		tertiaryLabel: PlatformSelectColor({
			ios: "tertiaryLabel",
			android: "",
			web: ""
		}),
		quaternaryLabel: PlatformSelectColor({
			ios: "quaternaryLabel",
			android: "",
			web: ""
		}),
		systemFill: PlatformSelectColor({
			ios: "systemFill",
			android: "",
			web: ""
		}),
		secondarySystemFill: PlatformSelectColor({
			ios: "secondarySystemFill",
			android: "",
			web: ""
		}),
		tertiarySystemFill: PlatformSelectColor({
			ios: "tertiarySystemFill",
			android: "",
			web: ""
		}),
		quaternarySystemFill: PlatformSelectColor({
			ios: "quaternarySystemFill",
			android: "",
			web: ""
		}),
		placeholderText: PlatformSelectColor({
			ios: "placeholderText",
			android: "",
			web: ""
		}),
		tintColor: PlatformSelectColor({
			ios: "tintColor",
			android: "",
			web: ""
		}),
		systemBackground: PlatformSelectColor({
			ios: "systemBackground",
			android: "",
			web: ""
		}),
		secondarySystemBackground: PlatformSelectColor({
			ios: "secondarySystemBackground",
			android: "",
			web: ""
		}),
		tertiarySystemBackground: PlatformSelectColor({
			ios: "tertiarySystemBackground",
			android: "",
			web: ""
		}),
		systemGroupedBackground: PlatformSelectColor({
			ios: "systemGroupedBackground",
			android: "",
			web: ""
		}),
		secondarySystemGroupedBackground: PlatformSelectColor({
			ios: "secondarySystemGroupedBackground",
			android: "",
			web: ""
		}),
		tertiarySystemGroupedBackground: PlatformSelectColor({
			ios: "tertiarySystemGroupedBackground",
			android: "",
			web: ""
		}),
		separator: PlatformSelectColor({
			ios: "separator",
			android: "",
			web: ""
		}),
		opaqueSeparator: PlatformSelectColor({
			ios: "opaqueSeparator",
			android: "",
			web: ""
		}),
		link: PlatformSelectColor({
			ios: "link",
			android: "",
			web: ""
		}),
		darkText: PlatformSelectColor({
			ios: "darkText",
			android: "",
			web: ""
		}),
		lightText: PlatformSelectColor({
			ios: "lightText",
			android: "",
			web: ""
		})
	}
};

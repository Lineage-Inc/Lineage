async function loadResourcesAndDataAsync() {
	try {
		SplashScreen.preventAutoHideAsync();

		// Load fonts
		await Font.loadAsync({
			'Archivo-Italic': require('../assets/font/Archivo-Italic[wdth,wght].ttf'),
			Archivo: require('../assets/font/Archivo[wdth,wght].ttf'),
		});
	} catch (e) {
		// We might want to provide this error information to an error reporting service
		console.warn(e);
	} finally {
		setLoadingComplete(true);
		SplashScreen.hideAsync();
	}
}
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="findRide" options={{ headerShown: false }} />
      <Stack.Screen name="confirmRide" options={{ headerShown: false }} />
      <Stack.Screen name="bookRide" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;

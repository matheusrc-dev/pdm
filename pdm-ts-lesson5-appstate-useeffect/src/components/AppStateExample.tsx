import { View, Text, AppState, AppStateStatus } from "react-native";
import React, { useCallback, useEffect } from "react";

export default function AppStateExample() {
  // init
  useEffect(() => {
    const handleChange = (state: AppStateStatus) => {
      console.log("changed to:", state);
    };

    //me inscrevo nos eventos do AppState
    const refListener = AppState.addEventListener("change", handleChange);

    // limpeza: desincrever-se dos eventos do AppState
    return () => {
      refListener.remove();
    };
  }, []);

  return (
    <View>
      <Text>AppStateExample</Text>
    </View>
  );
}

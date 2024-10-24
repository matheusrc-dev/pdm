import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function LifecycleDemo() {
  const [text, setText] = useState("");

  // Effect de inicialização, array de deps vazio!
  useEffect(() => {
    console.log("Init");

    // retornamos uma callback de limpeza
    return () => {
      console.log("kill");
    };
  }, []);

  // Só um exemplo de useEffect que observa a variável "text"
  // useEffect(() => {
  //   console.log("text changed to: ", text);
  // }, [text]);

  //tudo o que acontece no meio é a "vida do componente"
  console.log("render");

  return (
    <View>
      <Text>LifecycleDemo</Text>
      <TextInput value={text} onChangeText={setText} />
    </View>
  );
}

import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";

type ValidationResult = {
  isValid: boolean;
  errorMessage: string;
};

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const passwordVerification = validatePassword(password);
    setPasswordIsValid(passwordVerification.isValid);
    setErrorMessage(passwordVerification.errorMessage);
  }, [password]);

  function validatePassword(password: string): ValidationResult {
    if (password.length < 6) {
      return {
        isValid: false,
        errorMessage: "A senha deve ter pelo menos 6 caracteres.",
      };
    }

    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasLetter) {
      return {
        isValid: false,
        errorMessage: "A senha deve conter pelo menos uma letra.",
      };
    }

    if (!hasNumber) {
      return {
        isValid: false,
        errorMessage: "A senha deve conter pelo menos um número.",
      };
    }

    if (!hasSpecialChar) {
      return {
        isValid: false,
        errorMessage: "A senha deve conter pelo menos um caractere especial.",
      };
    }

    return {
      isValid: true,
      errorMessage: "",
    };
  }

  return (
    <View>
      <Text>Altere sua senha</Text>
      {!passwordIsValid && !!password.length && <Text>{errorMessage}</Text>}
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        placeholder="Confirma sua senha"
        secureTextEntry={true}
      />

      <Text>{passwordIsValid}</Text>

      <Button
        title="Redefinir"
        disabled={
          !passwordIsValid ||
          !password.length ||
          password != passwordConfirmation
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});

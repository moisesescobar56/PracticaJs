import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SumaScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    // Convertir a número
    const n1 = parseFloat(num1) || 0;
    const n2 = parseFloat(num2) || 0;
    setResultado(n1 + n2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suma de Dos Números</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingrese el primer número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingrese el segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <Button title="Sumar" color="#007AFF" onPress={sumar} />

      {resultado !== null && (
        <Text style={styles.resultado}>
          Resultado: {resultado}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#111827',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#2563EB',
    fontWeight: '600',
  },
});

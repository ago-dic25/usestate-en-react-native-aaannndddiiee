import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { estiloTextos } from './misEstilos';

export default function App() {
  const[contador, setContador] = useState(0);
  const [nombre, setNombre] = setState("");
  const [mensaje, setMensaje] = setState("");
  const[listaAlumnos, setlistaAlumnos] = useState([]);

  function contarChar(){
    if(nombre.length == 0){
      setMensaje(":|");
    }
    if(nombre.length >= 1 && nombre.length <= 10){
      setMensaje("=D");
    }
    if(nombre.length >= 11 && nombre.length < 20){
      setMensaje("=O");
    }
  }

  function agregarNombre(){
    setlistaAlumnos([...listaAlumnos, nombre]);
    setNombre("");
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={estiloTextos.texto}>{mensaje}</Text>
      <TextInput placeholder = "Escribe tu nombre" value = {nombre} onChangeText = {setNombre}></TextInput>
      <Button title = "Emoji" onPress = {contarChar}></Button>
      <Button title = "Limpiar Nombre" onPress = {()=>setNombre("")}></Button>
      <Button tittle = "Agregar Alumno" onPress = {agregarNombre}></Button>
      <FlastList data = {listaAlumnos} keyExtractor = {(item, index) => index.toString()} renderItem = {({item}) => <Text>{item}</Text>}></FlastList>
      <Text>Click {contador}</Text>
      <Button title = "AUMENTAR" onPress = {()=>setContador(contador + 1)}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
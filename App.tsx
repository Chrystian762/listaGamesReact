import { FlatList, StyleSheet, Text, View } from 'react-native';
import Jogos from './componentes/games';
const jogos = [
  {id:"1",nome:"Forza Horizon",plat:"Xbox360",preco:"237,00" , imagem: require('./assets/forza.jpg')},



  {id:"2",nome:"GTA V ",plat:"Xbox360",preco:"208,18",imagem: require('./assets/gtav.jpg')},



  {id:"3",nome:"Batman Arkhan City",plat:"Xbox360",preco:"126,01",imagem: require('./assets/bat.jpg')},



  {id:"4",nome:"Tomb Raider",plat:"Xbox360",preco:"129,90",imagem: require('./assets/tr.jpg')},



  {id:"5",nome:"Red Dead Redemption",plat:"Xbox360",preco:"161,91",imagem: require('./assets/rd.jpg')},



  {id:"6",nome:"Assassin´s Creed Rogue",plat:"Xbox360",preco:"111,00",imagem: require('./assets/assc.jpg')},

  {id:"7",nome:"Skate 3",plat:"Xbox360",preco:"149,00",imagem: require('./assets/skt.jpg')},

  {id:"8",nome:"Skyrim ",plat:"Xbox360",preco:"183,00",imagem: require('./assets/sk.jpg')},

  {id:"9",nome:"Guitar Hero III",plat:"Xbox360",preco:"239,00",imagem: require('./assets/gtr.jpg')},

  {id:"10",nome:"Guitar Hero 5",plat:"Xbox360",preco:"143,00",imagem: require('./assets/gtr5.jpg')},

  {id:"11",nome:"Guitar Hero Live",plat:"Xbox360",preco:"89,00",imagem: require('./assets/gtrl.jpg')},

  {id:"12",nome:"Injustice",plat:"Xbox360",preco:"149,00",imagem: require('./assets/inj.jpg')},

  {id:"13",nome:"Watch Dogs",plat:"Xbox360",preco:"174,00",imagem: require('./assets/wtd.jpg')},
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Games Favoritos</Text>


    <View  style={styles.lista}>
        <FlatList
            data={jogos}
            keyExtractor={item=>item.id}
            renderItem={({item}) => <Jogos plat={item.plat} nome={item.nome} preco={item.preco} imagem={item.imagem}/>}
        />
    </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 

  titulo: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  lista:{
    height:500,
    width:'80%',
    marginLeft:'5%'
  }
  
});

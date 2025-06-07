import { View, Text, StyleSheet, Image} from "react-native";

interface porpsJogos{
    nome:string,
    plat:string,
    preco:string,
    imagem:any,
    
}


export default function Jogos({nome, plat, preco, imagem }:porpsJogos){

    return(
        <>
       
            <View style={styles.cartao}>
                
                <View style={styles.info}>
                        <Text style={styles.nome}>{nome}</Text>
                        <Text style={styles.plat}>Plataforma: {plat}</Text>
                        <Text style={styles.preco}>R$: {preco}</Text>
                    </View>
                    <Image source={imagem} style={styles.img}/>
            </View>
        </>
    );

}


    const styles = StyleSheet.create({
      cartao: {
        flexDirection: 'row',
        backgroundColor: "#27b348",
        padding:8,
        marginVertical:10,
        borderRadius:8,
        width:'100%'      },

      nome:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
      },

      plat:{
            fontSize: 16,
            color: "white"

      },

      img:{
        height:65,
        width:65,
        borderRadius:5,
        marginTop:2,
        marginRight:3
      },

      info: {
    flex: 1, 
    flexDirection: 'column',
  },
      preco:{
        fontSize: 17,
        fontWeight: 'bold',
        color:'black'
      },

    
});
import React from 'react';
import {
  FlatList,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../../../assets/css/style';


const DATA = [{
  id:1,
  nombre:'MEXA',
  descripcion:"Pan natural, salchicha Bratwurst (100% carne de cerdo). Aguacate, tocino y mayonesa de jalapeño.",
  precio:80,
  imagen:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com.mx%2FShowUserReviews-g150798-d10325587-r612100257-Furter_Hot_Dogs_Gourmet-Guadalajara_Guadalajara_Metropolitan_Area.html&psig=AOvVaw2lEXRO90tI2RzMeUrhMhZo&ust=1668138689835000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCS6ILbovsCFQAAAAAdAAAAABAK'
},
{
  id:2,
  nombre:'MEXA',
  descripcion:"Pan natural, salchicha Bratwurst (100% carne de cerdo). Aguacate, tocino y mayonesa de jalapeño.",
  precio:80,
  imagen:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com.mx%2FShowUserReviews-g150798-d10325587-r612100257-Furter_Hot_Dogs_Gourmet-Guadalajara_Guadalajara_Metropolitan_Area.html&psig=AOvVaw2lEXRO90tI2RzMeUrhMhZo&ust=1668138689835000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCS6ILbovsCFQAAAAAdAAAAABAK'
},
{
  id:3,
  nombre:'MEXA',
  descripcion:"Pan natural, salchicha Bratwurst (100% carne de cerdo). Aguacate, tocino y mayonesa de jalapeño.",
  precio:80,
  imagen:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com.mx%2FShowUserReviews-g150798-d10325587-r612100257-Furter_Hot_Dogs_Gourmet-Guadalajara_Guadalajara_Metropolitan_Area.html&psig=AOvVaw2lEXRO90tI2RzMeUrhMhZo&ust=1668138689835000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCS6ILbovsCFQAAAAAdAAAAABAK'
},
{
  id:4,
  nombre:'MEXA',
  descripcion:"Pan natural, salchicha Bratwurst (100% carne de cerdo). Aguacate, tocino y mayonesa de jalapeño.",
  precio:80,
  imagen:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com.mx%2FShowUserReviews-g150798-d10325587-r612100257-Furter_Hot_Dogs_Gourmet-Guadalajara_Guadalajara_Metropolitan_Area.html&psig=AOvVaw2lEXRO90tI2RzMeUrhMhZo&ust=1668138689835000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCS6ILbovsCFQAAAAAdAAAAABAK'
}

];

const Item = ({id,nombre,descripcion,precio,imagen}) => {
  return(
    <TouchableOpacity style={styles.item} activeOpacity={0.8}>
      <Text style={{fontFamily:'LilyScriptOne-Regular',textAlign:'center',color:'#A60703'}}>{nombre}</Text>
      <View style={styles.itemFood}>
         <View style={styles.itemFoodPhoto}>
            <Image style={{flex:1,width:null,height:null,borderRadius:10,}} resizeMode='contain' source={{uri:"https://pixabay.com/get/g8eaac65e73f0d9c446795b83bad842a9ff0681fc0abf2498205d4a67dfa07e8229a05a095cadc78f2daba59c5785d7e265f10b28abaca0e1f4592fa8d8105d66_1920.jpg"}} ></Image>
          </View>
          <View style={styles.itemFoodDescription}>
            
            <Text style={{fontFamily:'Lato-Bold',fontSize:12}}>{descripcion}</Text>
            <Text style={{fontFamily:'Lato-Bold',textAlign:'center',color:'#A60703'}}>{precio} MXN</Text>
          </View>
          
        
      </View>
    </TouchableOpacity>
  );
}

const MenuClient = () => {
    


    const renderItem = ({ item }) => {
      return(
        <Item id={item.id} nombre={item.nombre}  descripcion={item.descripcion}  precio={item.precio}  imagen={item.imagen}  ></Item>

      );


    }


    return (

      

      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
        
    );
  };


export default MenuClient;
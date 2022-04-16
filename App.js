import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import { AntDesign,FontAwesome5, Octicons, MaterialCommunityIcons  , Ionicons } from '@expo/vector-icons';
import { TouchableOpacity,TextInput} from 'react-native';





export default function App() {
  return (
    <View style={styles.container}>
               <StatusBar style="auto" />
      <View style={styles.status}>
        
              <TouchableOpacity>
                <AntDesign name="left" size={35} color="white" />
            </TouchableOpacity>
      
        <TextInput 
        style={styles.textinput}
        placeholder="Search"
        onChangeText={(text)=>this.filterSearch(text)}
          />
      
            <TouchableOpacity>
                <AntDesign name="bars" size={35} color="white"  />
            </TouchableOpacity>
      </View>

      <View style={styles.post}>
        <View style={styles.pic_View}>
          <Image
          style={styles.profile}
          source={require("./Mozino.jpg")}
           />
           <View style={styles.details}>
             <Text style={styles.name}>Bubuskie Moorosi</Text>
             <View style={{flexDirection:'row', alignItems:'center'}}>
               <Text style={styles.time}>3 hours Ago</Text>
               <FontAwesome5 name="globe-americas" size={20} color="gray" />
             </View>

           </View>
        </View>
        <Text style={styles.Advert}>Amazing work at Ginko Ink. We Develop websites , Android Apps,
        we design marketing equipments  and billboards</Text>
        <Text style={styles.sloggen}>#GINKO INK DOING NICE THINGS FOR NICE PEOPLE LIKE YOU!  PLEASE FOLLOW OUR PAGE</Text>

      </View>
        <Image
        style={styles.billBoard}
        source={require("./printer.webp")}
        />
        <View style={styles.sharp}>
          <TouchableOpacity>
            <AntDesign name='like1' size={28} color='#9E9E9E' />
            <Text style={styles.footerText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch}>
          <Octicons name="comment" size={28} color="#9E9E9E" />
          <Text>comment</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <MaterialCommunityIcons name="share-outline" size={28} color="#9E9E9E" />
          <Text>Share</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFD8DC',
    alignItems: 'center',
    
  },
  touch:{
    color:'blue',
  },
  status:{
    width:'100%',
    height:105,
    backgroundColor:'#0D47A1',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:5,
    paddingTop:30,
  },
  textinput:{backgroundColor:'#E3F2FD',
  height:35,
  width:'60%',
  borderRadius:10,
  borderColor:'#CE93D8',},
  
  post:{
    backgroundColor:'#fff',
    width:'95%',
    height:170,
    marginTop:10,
    
  },
  profile:{
    height:50,
    width:50,
    margin:5,
    borderRadius:30,
  },
  pic_View:{
    flexDirection:'row',
  },
  name:{fontSize:13,
    fontWeight:'bold',
    marginTop:7,
    marginLeft:2,
  },
  time:{
    fontSize:13,
    color:'gray',
    marginRight:10,
    marginLeft:2,
  },
   Advert:{
     color:'black',
     fontSize:13,
     fontWeight:'bold',
     margin:5,
   },
   sloggen:{
     fontSize:14,
     color:'#1565C0',
     margin:5,
     },
     billBoard:{
       height:300,
       width:'95%',
     },
     sharp:{
       backgroundColor:'#fff',
       height:60,
       width:'95%',
       flexDirection:'row',
       padding:10,
       justifyContent:'space-between',
     }

 
  
});

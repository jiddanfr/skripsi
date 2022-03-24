import React, { Component } from 'react';
import {View, StatusBar, Text, TextInput, FlatList} from 'react-native';

let database = [
  {bab: "THAHARAH", detail: 'lorem'},
  {bab: "SHALAT", detail: 'lorem'},
  {bab: "ADZAN",detail: 'lorem'},
  {bab: "DZIKIR DA DOA", detail: 'lorem'},
  {bab: "ZAKAT", detail: 'lorem'},
  {bab: "PUASA", detail: 'lorem'},
  {bab: "HAJI", detail: 'lorem'},
  {bab: "NIKAH", detail: 'lorem'},
  {bab: "SOSIAL BUDAYA", detail: 'lorem'},
  {bab: "MASJID DAN WAQAF", detail: 'lorem'},
  {bab: "PEMAKAMAN DAN JENAZAH", detail: 'lorem'},
  {bab: "TASAWUF DAN ETIKA", detail: 'lorem'},
  {bab: "ILMU DAN AL-QURAN", detail: 'dlorem'},
  {bab: "KEILMUAN", detail: 'lorem'},
  {bab: "MUAMALAH", detail: 'lorem'},
  {bab: "MASALAH LAIN", detail: 'lorem'},
]
class App extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          text: '',
          data: database
       };
    }
    search = () =>{
      let data = database;

      data = data.filter(item => item.bab.toLocaleLowerCase().includes(this.state.text.toLocaleLowerCase()))

      this.setState({
        data: data
      })
    }
    render() {
      return (
          <View style={{flex: 1, backgroundColor:"#FAFAFA"}}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#9D5C0D" />
            <View style={{padding: 20, backgroundColor: "#E5890A", elevation: 1 }}>
            <Text style={{textAlign: 'center', color: "#FAFAFA", fontSize: 20, fontWeight: 'bold'}}>TEST</Text>
            </View>
            <TextInput
            style={{height: 40, borderColor: 'black', borderWidth: 2,paddingLeft: 10, borderRadius: 5, marginHorizontal: 10, marginVertical: 20}}
            placeholder="Ketik untuk mencari"
            onChangeText={text => this.setState({text: text})}
            value={this.state.text}
            onKeyPress={() => this.search()}
            />
            <FlatList
            data={this.state.data}
            renderItem={({ item }) => 
            <View style={{borderWidth: 1, borderRadius: 5, marginHorizontal: 20, marginVertical: 5, padding: 9}}>
              <Text style={{fontSize:24, fontWeight: 'bold'}}>{item.bab}</Text>
              <Text style={{fontSize:19, marginTop:5}}>{item.detail}</Text>
            </View>
          }
            keyExtractor={item => item.bab}
          />

      </View>
          
          
      );
    }
  }
  
  export default App;
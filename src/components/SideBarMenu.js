// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Touchable,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const SideBarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';
  var historyRoute = props.state.history.length - 1
    if(props.state.history[historyRoute].type == 'drawer'){
      historyRoute = props.state.history.length - 2
    }
  var activeRoute = props.state.routes.filter(x => x.key === props.state.history[historyRoute].key);
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection:'row', backgroundColor:'#666', padding:5 }}>
            <View
              style={styles.sideMenuLogo}
            >
              <Image
                source={{ uri: BASE_PATH + proileImage }}
                style={styles.sideMenuLogo}
              />
            </View>
            
            <View style={{flex:1, paddingHorizontal:5 }}>
              <Text style={{ fontSize: 20, color:'#fff' }}>Stok and Inventory Online 0.9.32</Text>
            </View>
          </View>
        
        {/*Top Large Image */}
        <DrawerContentScrollView style={{ flex:1 }} {...props}>
          <DrawerItemList {...props} />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
              <Icon name="home" size={20} color="#900" />
              <View style={{ flex:1, paddingLeft:10, }}>
                <Text>Main Menu</Text>
              </View>
              <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
              <Icon name="home" size={20} color="#900" />
              <View style={{ flex:1, paddingLeft:10, }}>
                <Text>Goods</Text>
              </View>
              <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
              <Icon name="home" size={20} color="#900" />
              <View style={{ flex:1, paddingLeft:10, }}>
                <Text>Document</Text>
              </View>
              <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
              <Icon name="home" size={20} color="#900" />
              <View style={{ flex:1, paddingLeft:10, }}>
                <Text>Expenses</Text>
              </View>
              <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
              <Icon name="home" size={20} color="#900" />
              <View style={{ flex:1, paddingLeft:10, }}>
                <Text>Reports</Text>
              </View>
              <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
              <Icon name="home" size={20} color="#900" />
              <View style={{ flex:1, paddingLeft:10, }}>
                <Text>Supplier</Text>
              </View>
              <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
              <Icon name="home" size={20} color="#900" />
              <View style={{ flex:1, paddingLeft:10, }}>
                <Text>Customers</Text>
              </View>
              <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
              <Icon name="home" size={20} color="#900" />
              <View style={{ flex:1, paddingLeft:10, }}>
                <Text>Stores</Text>
              </View>
              <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
              <Icon name="home" size={20} color="#900" />
              <View style={{ flex:1, paddingLeft:10, }}>
                <Text>Settings</Text>
              </View>
              <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
              <Icon name="home" size={20} color="#900" />
              <View style={{ flex:1, paddingLeft:10, }}>
                <Text>Question or Suggestion</Text>
              </View>
              <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
              <Icon name="home" size={20} color="#900" />
              <View style={{ flex:1, paddingLeft:10, }}>
                <Text>Main Menu</Text>
              </View>
              <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
              <Icon name="home" size={20} color="#900" />
              <View style={{ flex:1, paddingLeft:10, }}>
                <Text>Your subscription</Text>
              </View>
              <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
              <Icon name="home" size={20} color="#900" />
              <View style={{ flex:1, paddingLeft:10, }}>
                <Text>Help</Text>
              </View>
              <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
              <Icon name="home" size={20} color="#900" />
              <View style={{ flex:1, paddingLeft:10, }}>
                <Text>What's New</Text>
              </View>
              <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
            </View>
          </TouchableOpacity>
        </DrawerContentScrollView>
        
        <TouchableOpacity
          onPress={() => props.navigation.navigate('MainPage')}
        >
          <View style={{ flexDirection:'row', alignContent:'center', paddingHorizontal:15, paddingVertical:5 }}>
            <View style={{ flex:1, paddingLeft:10, }}>
              <Text>Wmail@email.com</Text>
            </View>
            <Icon name="bookmark" size={20} color={activeRoute.length > 0 ? activeRoute[0].name  == 'MainScreen' ? "#900" : "#fff": "#fff" } />
          </View>
        </TouchableOpacity>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuWrap:{
    flex:1,
  },
  sideMenuLogo: {
    width: 50,
    height: 50,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SideBarMenu;

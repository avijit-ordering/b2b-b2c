import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { NavigationContainer, StyleSheet } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../src/pages/Login';
import Registration from '../src/pages/registration';
import HomeScreen from '../src/pages/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Text, TouchableOpacity, View } from 'react-native';
import ProfilePage from '../src/pages/ProfilePage';
import CartScreen from '../src/pages/CartScreen';
import Splashscreen from '../src/pages/Splashscreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from '../src/components/menu';
import Categories from '../src/pages/Categories';
import CategoriesWiseProduct from '../src/pages/CategoriesWiseProduct';
import ProductDetails from '../src/pages/ProductDetails';
import BusinessSelection from '../src/pages/BusinessSelection';
import Search from '../src/pages/Search';
import CheckoutAddressList from '../src/pages/CheckoutAddressList';
import OrderScreen from '../src/pages/OrderScreen';
import { MyContext } from '../src/context/myContext'
import Myaccount from '../src/pages/MyAccount';
import Terms from '../src/pages/Terms';
import AddressList from '../src/pages/AddressList';
import OrderList from '../src/pages/OrderList';
import MyFavourite from '../src/pages/MyFavourite';
import MyWallets from '../src/pages/MyWallets';
import Privacy from '../src/pages/Privacy';
import Aboutus from '../src/pages/Aboutus';
import Contact from '../src/pages/Contact';
import CompanyAccount from '../src/pages/CompanyAccount';
import Users from '../src/pages/Users';
import RoleList from '../src/pages/RoleList';
import MyProductReview from '../src/pages/MyProductReview';
import RequestedQuote from '../src/pages/RequestedQuote';
import CompareProducts from '../src/pages/CompareProducts';
import ProductDetailsPage from '../src/pages/ProductDetailsPage';
import { CartProvider } from '../src/context/CartContext';
import { CartContext } from "../src/context/CartContext";
import CheckoutPage from '../src/pages/CheckoutPage';
import CheckoutForGuest from '../src/pages/CheckoutForGuest';
import ProductList from '../src/pages/ProductList';
import OrderDetailsPage from '../src/pages/OrderDetailsPage';
import ForgotPassword from '../src/pages/ForgotPassword';
import ProductDetailsB2B from '../src/pages/ProductDetailsB2B';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



const ScreenWithDrawer = () => {


  const Stack = createNativeStackNavigator();
  const context = useContext(MyContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEdgeWidth: 0,
        drawerStyle: {
          width: 280,
          height: 900
        }
      }}
      drawerContent={(props) => <Menu props={props} />}
    // initialRouteName="Home"
    >
      <Drawer.Screen
        name=" "
        options={{
          swipeEnabled: false,
          unmountOnBlur: true,
          headerShown: false,
          drawerItemStyle: { display: "none" },
          // drawerIcon: ({ color }) => (
          //     <FontAwesome5 name="calculator" size={20} color={color} />
          // ),
          drawerLabel: 'Purchase Menu',
          drawerLabelStyle: { fontSize: 16, paddingLeft: 6 },
          title: " ",

          // headerTitleAlign: 'center',
          // headerStyle: { backgroundColor: '#f5a756' }
        }}
      >
        {() => (
          <Stack.Navigator initialRouteName='Home'
            screenOptions={{ gestureEnabled: false }}
          >
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{ headerShown: false }}

            />


          </Stack.Navigator>
        )}
      </Drawer.Screen>

    </Drawer.Navigator>
  );
};

const CategoryWithDrawer = () => {


  const Stack = createNativeStackNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEdgeWidth: 0,
        drawerStyle: {
          width: 280,
          height: 900
        }
      }}
      drawerContent={(props) => <Menu props={props} />}
    // initialRouteName="Home"
    >
      <Drawer.Screen
        name=" "
        options={{
          swipeEnabled: false,
          unmountOnBlur: true,
          headerShown: false,
          drawerItemStyle: { display: "none" },
          // drawerIcon: ({ color }) => (
          //     <FontAwesome5 name="calculator" size={20} color={color} />
          // ),
          drawerLabel: 'Purchase Menu',
          drawerLabelStyle: { fontSize: 16, paddingLeft: 6 },
          title: " ",

          // headerTitleAlign: 'center',
          // headerStyle: { backgroundColor: '#f5a756' }
        }}
      >
        {() => (
          <Stack.Navigator initialRouteName='Categories'
            screenOptions={{ gestureEnabled: false }}
          >
            <Stack.Screen
              name='Categories'
              component={Categories}
              options={{ headerShown: false }}

            />


          </Stack.Navigator>
        )}
      </Drawer.Screen>

    </Drawer.Navigator>
  );
};

const OrdersWithDrawer = () => {


  const Stack = createNativeStackNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEdgeWidth: 0,
        drawerStyle: {
          width: 280,
          height: 900
        }
      }}
      drawerContent={(props) => <Menu props={props} />}
    // initialRouteName="Home"
    >
      <Drawer.Screen
        name=" "
        options={{
          swipeEnabled: false,
          unmountOnBlur: true,
          headerShown: false,
          drawerItemStyle: { display: "none" },
          // drawerIcon: ({ color }) => (
          //     <FontAwesome5 name="calculator" size={20} color={color} />
          // ),
          drawerLabel: 'Purchase Menu',
          drawerLabelStyle: { fontSize: 16, paddingLeft: 6 },
          title: " ",

          // headerTitleAlign: 'center',
          // headerStyle: { backgroundColor: '#f5a756' }
        }}
      >
        {() => (
          <Stack.Navigator initialRouteName='OrdersListFooter'
            screenOptions={{ gestureEnabled: false }}
          >
            <Stack.Screen
              name='OrdersListFooter'
              component={OrderList}
              options={{ headerShown: false }}

            />


          </Stack.Navigator>
        )}
      </Drawer.Screen>

    </Drawer.Navigator>
  );
};

const TermsWithDrawer = () => {


  const Stack = createNativeStackNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEdgeWidth: 0,
        drawerStyle: {
          width: 280,
          height: 900
        }
      }}
      drawerContent={(props) => <Menu props={props} />}
    // initialRouteName="Home"
    >
      <Drawer.Screen
        name=" "
        options={{
          swipeEnabled: false,
          unmountOnBlur: true,
          headerShown: false,
          drawerItemStyle: { display: "none" },
          // drawerIcon: ({ color }) => (
          //     <FontAwesome5 name="calculator" size={20} color={color} />
          // ),
          drawerLabel: 'Purchase Menu',
          drawerLabelStyle: { fontSize: 16, paddingLeft: 6 },
          title: " ",

          // headerTitleAlign: 'center',
          // headerStyle: { backgroundColor: '#f5a756' }
        }}
      >
        {() => (
          <Stack.Navigator initialRouteName='Terms'
            screenOptions={{ gestureEnabled: false }}
          >
            <Stack.Screen
              name='Terms'
              component={Terms}
              options={{ headerShown: false }}

            />


          </Stack.Navigator>
        )}
      </Drawer.Screen>

    </Drawer.Navigator>
  );
};

// const PrivacyWithDrawer = () => {


//   const Stack = createNativeStackNavigator();

//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         swipeEdgeWidth: 0,
//         drawerStyle: {
//           width: 280,
//           height: 900
//         }
//       }}
//       drawerContent={(props) => <Menu props={props} />}
//     // initialRouteName="Home"
//     >
//       <Drawer.Screen
//         name=" "
//         options={{
//           swipeEnabled: false,
//           unmountOnBlur: true,
//           headerShown: false,
//           drawerItemStyle: { display: "none" },
//           // drawerIcon: ({ color }) => (
//           //     <FontAwesome5 name="calculator" size={20} color={color} />
//           // ),
//           drawerLabel: 'Purchase Menu',
//           drawerLabelStyle: { fontSize: 16, paddingLeft: 6 },
//           title: " ",

//           // headerTitleAlign: 'center',
//           // headerStyle: { backgroundColor: '#f5a756' }
//         }}
//       >
//         {() => (
//           <Stack.Navigator initialRouteName='Privacy'
//             screenOptions={{ gestureEnabled: false }}
//           >
//             <Stack.Screen
//               name='Privacy'
//               component={Privacy}
//               options={{ headerShown: false }}

//             />


//           </Stack.Navigator>
//         )}
//       </Drawer.Screen>

//     </Drawer.Navigator>
//   );
// };

// const AboutusWithDrawer = () => {


//   const Stack = createNativeStackNavigator();

//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         swipeEdgeWidth: 0,
//         drawerStyle: {
//           width: 280,
//           height: 900
//         }
//       }}
//       drawerContent={(props) => <Menu props={props} />}
//     // initialRouteName="Home"
//     >
//       <Drawer.Screen
//         name=" "
//         options={{
//           swipeEnabled: false,
//           unmountOnBlur: true,
//           headerShown: false,
//           drawerItemStyle: { display: "none" },
//           // drawerIcon: ({ color }) => (
//           //     <FontAwesome5 name="calculator" size={20} color={color} />
//           // ),
//           drawerLabel: 'Purchase Menu',
//           drawerLabelStyle: { fontSize: 16, paddingLeft: 6 },
//           title: " ",

//           // headerTitleAlign: 'center',
//           // headerStyle: { backgroundColor: '#f5a756' }
//         }}
//       >
//         {() => (
//           <Stack.Navigator initialRouteName='Aboutus'
//             screenOptions={{ gestureEnabled: false }}
//           >
//             <Stack.Screen
//               name='Aboutus'
//               component={Aboutus}
//               options={{ headerShown: false }}

//             />


//           </Stack.Navigator>
//         )}
//       </Drawer.Screen>

//     </Drawer.Navigator>
//   );
// };

// const ContactWithDrawer = () => {


//   const Stack = createNativeStackNavigator();

//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         swipeEdgeWidth: 0,
//         drawerStyle: {
//           width: 280,
//           height: 900
//         }
//       }}
//       drawerContent={(props) => <Menu props={props} />}
//     // initialRouteName="Home"
//     >
//       <Drawer.Screen
//         name=" "
//         options={{
//           swipeEnabled: false,
//           unmountOnBlur: true,
//           headerShown: false,
//           drawerItemStyle: { display: "none" },
//           // drawerIcon: ({ color }) => (
//           //     <FontAwesome5 name="calculator" size={20} color={color} />
//           // ),
//           drawerLabel: 'Purchase Menu',
//           drawerLabelStyle: { fontSize: 16, paddingLeft: 6 },
//           title: " ",

//           // headerTitleAlign: 'center',
//           // headerStyle: { backgroundColor: '#f5a756' }
//         }}
//       >
//         {() => (
//           <Stack.Navigator initialRouteName='Contact'
//             screenOptions={{ gestureEnabled: false }}
//           >
//             <Stack.Screen
//               name='Contact'
//               component={Contact}
//               options={{ headerShown: false }}

//             />


//           </Stack.Navigator>
//         )}
//       </Drawer.Screen>

//     </Drawer.Navigator>
//   );
// };



const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const context = useContext(MyContext);

  //console.log('cartData')

  //console.log(context?.cartData)

  function ButtomTab() {
    const { totalCart } = useContext(CartContext);
    console.log('cart1111')
    console.log(totalCart)

    return (
      <Tab.Navigator
        screenOptions={{
          lazy: true, // Ensures screens are loaded only when accessed for the first time
        }}
      >
        <Tab.Screen
          name="ScreenWithDrawer"
          component={ScreenWithDrawer}
          listeners={{
            tabPress: e => {
              context?.setCurrentRoute('main')
            },
          }}
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "#008E97", fontWeight: 500, fontSize: 11 }}>{context?.allDisctionary && context?.allDisctionary[0] && context?.allDisctionary[0][0] || 'Home'}</Text>
              ) : (
                <Text style={{ color: "#000", fontWeight: 500, fontSize: 11 }}>{context?.allDisctionary && context?.allDisctionary[0] && context?.allDisctionary[0][0] || 'Home'}</Text>
              ),
            tabBarStyle: { height: 60 },
            tabBarLabelStyle: { color: "#008E97", fontSize: 13 },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#008E97" />
              ) : (
                <Entypo name="home" size={24} color="black" />
              ),
          }}

        />

        <Tab.Screen
          name="CategoryWithDrawer"
          component={CategoryWithDrawer}
          listeners={{
            tabPress: e => {
              context?.setCurrentRoute('categories')
            },
          }}
          options={{

            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "#008E97", fontWeight: 500, fontSize: 11 }}>{context?.allDisctionary && context?.allDisctionary[7] && context?.allDisctionary[7][0] || 'Categories'}</Text>
              ) : (
                <Text style={{ color: "#000", fontWeight: 500, fontSize: 11 }}>{context?.allDisctionary && context?.allDisctionary[7] && context?.allDisctionary[7][0] || 'Categories'}</Text>
              ),
            tabBarStyle: { height: 60 },
            tabBarLabelStyle: { color: "#008E97", fontSize: 13 },
            headerShown: false,

            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="category" size={24} color="#008E97" />
              ) : (
                <MaterialIcons name="category" size={24} color="black" />
              ),
          }}
        />


        <Tab.Screen
          name="Cart"
          component={CartScreen}
          listeners={{
            tabPress: e => {
              context?.setCurrentRoute('cart')
            },
          }}
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "#008E97", fontWeight: 500, fontSize: 11, display: 'none' }}>Cart</Text>
              ) : (
                <Text style={{ color: "#000", fontWeight: 500, fontSize: 11, display: 'none' }}>Cart</Text>
              ),
            tabBarStyle: { height: 60 },
            tabBarLabelStyle: { display: 'none' },

            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <>
                  <View style={{
                    backgroundColor: 'red',
                    padding: 10,
                    borderRadius: 50,
                    position: 'relative',
                    top: -5,
                    alignItems: 'center',
                    width: 49,
                    height: 49
                  }}>
                    <AntDesign name="shoppingcart" size={24} color="white" />
                    {totalCart.length > 0 && totalCart[0].cart_items.length > 0 && totalCart[0].total_qty && (
                      <View
                        style={{
                          position: 'absolute',
                          top: -5,

                          backgroundColor: 'red',
                          borderRadius: 10,
                          paddingHorizontal: 6,
                          paddingVertical: 2,
                        }}
                      >
                        <Text style={{ color: 'white', fontSize: 12 }}>{parseInt(totalCart[0].total_qty)}</Text>
                      </View>
                    )}
                  </View>
                </>
              ) : (
                <>
                  <View style={{
                    backgroundColor: 'red',
                    padding: 10,
                    borderRadius: 50,
                    position: 'relative',
                    top: -5,
                    alignItems: 'center',
                    width: 49,
                    height: 49
                  }}>
                    <AntDesign name="shoppingcart" size={24} color="white" />
                    {totalCart.length > 0 && totalCart[0].cart_items.length > 0 && totalCart[0].total_qty && (
                      <View
                        style={{
                          position: 'absolute',
                          top: -5,

                          backgroundColor: 'red',
                          borderRadius: 10,
                          paddingHorizontal: 6,
                          paddingVertical: 2,
                        }}
                      >
                        <Text style={{ color: 'white', fontSize: 12 }}>{parseInt(totalCart[0].total_qty)}</Text>
                      </View>
                    )}
                  </View>

                </>
              ),
          }}
        />

        <Tab.Screen
          name="OrdersWithDrawer"
          component={OrdersWithDrawer}
          listeners={{
            tabPress: e => {
              context?.setCurrentRoute('order')
            },
          }}
          options={{

            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "#008E97", fontWeight: 500, fontSize: 11 }}>{context?.allDisctionary && context?.allDisctionary[18] && context?.allDisctionary[18][0] || 'Orders'}</Text>
              ) : (
                <Text style={{ color: "#000", fontWeight: 500, fontSize: 11 }}>{context?.allDisctionary && context?.allDisctionary[18] && context?.allDisctionary[18][0] || 'Orders'}</Text>
              ),
            tabBarStyle: { height: 60 },

            headerShown: false,

            tabBarIcon: ({ focused }) =>
              focused ? (

                <AntDesign name="clockcircleo" size={24} color="#008E97" />

              ) : (

                <AntDesign name="clockcircleo" size={24} color="black" />

              ),
          }}
        />


        {context?.user?.id ? (

          <Tab.Screen
            name="Profile"
            component={ProfilePage}
            initialParams={{ pageFrom: 'profile' }}
            listeners={{
              tabPress: e => {
                context?.setCurrentRoute('profile')
              },
            }}
            options={{
              headerShown: context?.user?.id ? true : false,
              tabBarLabel: ({ focused }) =>
                focused ? (
                  <Text style={{ color: "#008E97", fontWeight: 500, fontSize: 13 }}>{context?.allDisctionary && context?.allDisctionary[19] && context?.allDisctionary[19][0] || 'Profile'}</Text>
                ) : (
                  <Text style={{ color: "#000", fontWeight: 500, fontSize: 13 }}>{context?.allDisctionary && context?.allDisctionary[19] && context?.allDisctionary[19][0] || 'Profile'}</Text>
                ),
              tabBarStyle: { height: 60 },
              tabBarLabelStyle: { fontSize: 13 },


              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={24} color="#008E97" />
                ) : (
                  <Ionicons name="person" size={24} color="black" />
                ),
            }}
          />
        ) : (
          <Tab.Screen
            name="Profile"
            component={LoginScreen}
            initialParams={{ pageFrom: 'profile' }}
            listeners={{
              tabPress: e => {
                context?.setCurrentRoute('profile')
              },
            }}
            options={{
              tabBarStyle: { display: 'none' },
              headerShown: context?.user?.id ? true : false,
              tabBarLabel: ({ focused }) =>
                focused ? (
                  <Text style={{ color: "#008E97", fontWeight: 500, fontSize: 13 }}>{context?.allDisctionary && context?.allDisctionary[19] && context?.allDisctionary[19][0] || 'Profile'}</Text>
                ) : (
                  <Text style={{ color: "#000", fontWeight: 500, fontSize: 13 }}>{context?.allDisctionary && context?.allDisctionary[19] && context?.allDisctionary[19][0] || 'Profile'}</Text>
                ),
              //tabBarStyle: { height: 60 },
              tabBarLabelStyle: { fontSize: 13 },


              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={24} color="#008E97" />
                ) : (
                  <Ionicons name="person" size={24} color="black" />
                ),
            }}
          />
        )}




        <Tab.Screen
          name="CategoriesWiseProduct"
          component={CategoriesWiseProduct}
          options={{
            unmountOnBlur: true,
            tabBarItemStyle: { display: 'none' },
            headerShown: false,
            tabBarStyle: { height: 60 },
          }}

        />


        {/* <Tab.Screen
          name="ProductDetailsPage"
          component={ProductDetailsPage}
          options={{
            tabBarItemStyle: { display: 'none' },
            headerShown: false,
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "#008E97", fontWeight: 500 }}>Orders</Text>
              ) : (
                <Text style={{ color: "#000", fontWeight: 500 }}>Orders</Text>
              ),
            tabBarStyle: { height: 60 },
            tabBarLabelStyle: { fontSize: 13 },


            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="clockcircleo" size={24} color="#008E97" />
              ) : (
                <AntDesign name="clockcircleo" size={24} color="black" />
              ),
          }}
        /> */}

        {/* <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarItemStyle: { display: 'none' },
            headerShown: false,
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "#008E97", fontWeight: 500 }}>Orders</Text>
              ) : (
                <Text style={{ color: "#000", fontWeight: 500 }}>Orders</Text>
              ),
            tabBarStyle: { height: 60 },
            tabBarLabelStyle: { fontSize: 13 },


            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="clockcircleo" size={24} color="#008E97" />
              ) : (
                <AntDesign name="clockcircleo" size={24} color="black" />
              ),
          }}
        /> */}

        <Tab.Screen
          name="CheckoutAddressList"
          component={CheckoutAddressList}
          options={{
            tabBarItemStyle: { display: 'none' },
            tabBarStyle: { display: 'none' },
            headerShown: false,

          }}
        />

        {/* <Tab.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{
            tabBarItemStyle: { display: 'none' },
            tabBarStyle: { display: 'none' },
            headerShown: false,

          }}
        /> */}

        {/* <Tab.Screen
          name="Registration"
          component={Registration}
          options={{
            tabBarItemStyle: { display: 'none' },
            tabBarStyle: { display: 'none' },
            headerShown: false,

          }}
        /> */}

        {/* <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarItemStyle: { display: 'none' },
            tabBarStyle: { display: 'none' },
            headerShown: false,

          }}
        /> */}






        <Tab.Screen
          name="TermsWithDrawer"
          component={TermsWithDrawer}
          listeners={{
            tabPress: e => {
              context?.setCurrentRoute('terms')
            },
          }}
          options={{

            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "#008E97", fontWeight: 500 }}>Categories</Text>
              ) : (
                <Text style={{ color: "#000", fontWeight: 500 }}>Categories</Text>
              ),

            tabBarLabelStyle: { color: "#008E97", fontSize: 13 },
            headerShown: false,

            tabBarItemStyle: { display: 'none' },
            tabBarStyle: { display: 'none' },
            headerShown: false,

            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="category" size={24} color="#008E97" />
              ) : (
                <MaterialIcons name="category" size={24} color="black" />
              ),
          }}
        />


        {/* <Tab.Screen
          name="PrivacyWithDrawer"
          component={PrivacyWithDrawer}
          listeners={{
            tabPress: e => {
              context?.setCurrentRoute('terms')
            },
          }}
          options={{

            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "#008E97", fontWeight: 500 }}>Categories</Text>
              ) : (
                <Text style={{ color: "#000", fontWeight: 500 }}>Categories</Text>
              ),

            tabBarLabelStyle: { color: "#008E97", fontSize: 13 },
            headerShown: false,

            tabBarItemStyle: { display: 'none' },
            tabBarStyle: { display: 'none' },
            headerShown: false,

            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="category" size={24} color="#008E97" />
              ) : (
                <MaterialIcons name="category" size={24} color="black" />
              ),
          }}
        /> */}

        {/* <Tab.Screen
          name="AboutusWithDrawer"
          component={AboutusWithDrawer}
          listeners={{
            tabPress: e => {
              context?.setCurrentRoute('terms')
            },
          }}
          options={{

            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "#008E97", fontWeight: 500 }}>Categories</Text>
              ) : (
                <Text style={{ color: "#000", fontWeight: 500 }}>Categories</Text>
              ),

            tabBarLabelStyle: { color: "#008E97", fontSize: 13 },
            headerShown: false,

            tabBarItemStyle: { display: 'none' },
            tabBarStyle: { display: 'none' },
            headerShown: false,

            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="category" size={24} color="#008E97" />
              ) : (
                <MaterialIcons name="category" size={24} color="black" />
              ),
          }}
        /> */}

        {/* <Tab.Screen
          name="ContactWithDrawer"
          component={ContactWithDrawer}
          listeners={{
            tabPress: e => {
              context?.setCurrentRoute('terms')
            },
          }}
          options={{

            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "#008E97", fontWeight: 500 }}>Categories</Text>
              ) : (
                <Text style={{ color: "#000", fontWeight: 500 }}>Categories</Text>
              ),

            tabBarLabelStyle: { color: "#008E97", fontSize: 13 },
            headerShown: false,

            tabBarItemStyle: { display: 'none' },
            tabBarStyle: { display: 'none' },
            headerShown: false,

            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="category" size={24} color="#008E97" />
              ) : (
                <MaterialIcons name="category" size={24} color="black" />
              ),
          }}
        /> */}



      </Tab.Navigator>
    );
  }
  return (
    <CartProvider>
      <NavigationContainer >
        <Stack.Navigator>
          {/* <Stack.Screen
           name="Login"
           component={LoginScreen}
           options={{ headerShown : false }}
        /> */}
          <Stack.Screen
            name="Splash"
            component={Splashscreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          />


          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Privacy'
            component={Privacy}
            options={{ headerShown: false }}

          />

          <Stack.Screen
            name='Contact'
            component={Contact}
            options={{ headerShown: false }}

          />

          <Stack.Screen
            name='Aboutus'
            component={Aboutus}
            options={{ headerShown: false }}

          />


          {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        /> */}
          {/* 
        <Stack.Screen
          name="Signup"
          component={Registration}
          options={{ headerShown: false }}
        /> */}
          <Stack.Screen
            name="BusinessSelection"
            component={BusinessSelection}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            //component={ButtomTab}
            component={HomeScreen}
            options={{ lazy: true, headerShown: false }}
          />

          <Stack.Screen
            name="MyAccount"
            component={Myaccount}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddressList"
            component={AddressList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OrderList"
            component={OrderList}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MyFavourite"
            component={MyFavourite}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MyWallets"
            component={MyWallets}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="CompanyAccount"
            component={CompanyAccount}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Users"
            component={Users}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RoleList"
            component={RoleList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyProductReview"
            component={MyProductReview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RequestedQuote"
            component={RequestedQuote}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CompareProducts"
            component={CompareProducts}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CheckoutPage"
            component={CheckoutPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CheckoutForGuest"
            component={CheckoutForGuest}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductList"
            component={ProductList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetailsB2B"
            component={ProductDetailsB2B}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfilePage"
            component={ProfilePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OrderListPage"
            component={OrderList}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="OrderDetailsPage"
            component={OrderDetailsPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CartPage"
            component={CartScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='TermsPage'
            component={Terms}
            options={{ headerShown: false }}

          />
          <Stack.Screen
            name='OrderScreen'
            component={OrderScreen}
            options={{ headerShown: false }}

          />
           <Stack.Screen
            name='ForgotPassword'
            component={ForgotPassword}
            options={{ headerShown: false }}

          />
          {/* <Stack.Screen
          name="ScreenWithDrawer"
          component={ScreenWithDrawer}
          options={{
            headerShown: false,
            animation: 'slide_from_right'
          }}
        /> */}

        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default StackNavigator;


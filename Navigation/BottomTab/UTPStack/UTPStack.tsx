import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LawyersConn from './LawyersConn'
import NgoConn from './NgoConn'
import Logouts from './Logouts'
import RehabProg from './RehabProg'
import {Personalcard, Buildings2, Activity, Logout} from 'iconsax-react-native'

const Tab = createBottomTabNavigator();

function UTPStack() {
    return(
        <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: '#000', 
        
        tabBarStyle: {
           paddingBottom: 5,
           paddingTop: 10,
            height: 60
        },
        tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold'
        }
        }}>
            <Tab.Screen name='Lawyer' component={LawyersConn} options={{
                tabBarIcon: (tabInfo) => {
                    return(
                        <Personalcard size="32" color={tabInfo.focused ? '#000' : 'gray'}/>
                    )
                }
            }} />
            <Tab.Screen name='Ngo' component={NgoConn} options={{
                tabBarIcon: (tabInfo) => {
                    return(
                        <Buildings2 size="32" color={tabInfo.focused ? '#000' : 'gray'}/>
                    )
                }
            }}/>
            <Tab.Screen name='Rehab-Prog' component={RehabProg} options={{
                tabBarIcon: (tabInfo) => {
                    return(
                        <Activity size="32" color={tabInfo.focused ? '#000' : 'gray'}/>
                    )
                }
            }}/>
            <Tab.Screen name='Logout' component={Logouts} options={{
                tabBarIcon: (tabInfo) => {
                    return(
                        <Logout size="32" color={tabInfo.focused ? '#000' : 'gray'}/>
                    )
                }
            }}/>
        </Tab.Navigator>
    );
}

export default UTPStack
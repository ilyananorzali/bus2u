import React from 'react'
import { View, StyleSheet , Alert} from 'react-native'
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../slices/userSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { selectUser } from '../../slices/userSlice';



export default function CustomDrawerContent(props) {
    const paperTheme = useTheme();
   
const dispatch = useDispatch()
const selector = useSelector(selectUser)

const showAlert = () => {
return Alert.alert(
    "Are your sure you want to log out?",
   "",
    [
      // The "Yes" button
      {
        text: "Logout",
        onPress: () => {
            dispatch(logout())
            
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: "Cancel",
      },
    ]
  );
};


    return (

        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}
                                
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Ilyana Norzali</Title>
                                <Caption style={styles.caption}>@norilyanazali</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            {/* <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                        <Caption style={styles.caption}>Following</Caption>
                    </View> */}
                            <View style={styles.section}>
                                {/* <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph> */}
                             
                                <Icon
                                    name='map-marker' 
                                   
                                    />
                                 
                                <Caption style={styles.caption2}>Cyberjaya</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        {/* <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="home-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Home"
                    onPress={() => {props.navigation.navigate('Home')}}
                /> */}
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="My Account"
                            onPress={() => { props.navigation.navigate('Accounts') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="star-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Favourite"
                            onPress={() => { props.navigation.navigate('Favourite') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="information-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="About BUS2U"
                            onPress={() => { props.navigation.navigate('Setting') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="face-agent"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => { props.navigation.navigate('Support') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Log Out"
                    onPress={() => { showAlert()}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    caption2: {
        fontSize: 14,
        lineHeight: 14,
       paddingLeft: 5
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
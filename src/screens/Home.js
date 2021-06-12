import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {View, Text, Image, ImageBackground, TextInput} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

export default class Home extends React.Component{

    render(){

        return(
            <ImageBackground
            source={require('../images/back.png')} style={{
                width:"100%",
                height:"100%"
            }}
            >
                <View style={{
                    flexDirection:"row",
                    marginTop:40,
                    alignItems:"center",
                    paddingHorizontal:30
                }}> 
                <Icon name="menu" size={30} color="#a2a2db" style={{width:20}}/>
                <Icon name="account-circle" size={33} color="#a2a2db" style={{marginLeft:310}}/>
                </View>

                <View style={{
                    paddingHorizontal:40,
                    marginTop:25
                }}>
                    <Text style={{
                        fontSize:40,
                        color:"#522289",
                        fontWeight:"bold"
                    }}>
                        Hello
                        </Text>
                        <Text style={{
                            fontSize:15,
                            paddingVertical:10,
                            paddingRight:70,
                            paddingLeft:65,
                            lineHeight:22,
                            color:"#a2a2db"
                        }}>
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                        </Text>
                        <View style={{
                            flexDirection:"row",
                            backgroundColor:"#FFF",
                            borderRadius:40,
                            alignItems:"center",
                            paddingVertical:10,
                            paddingHorizontal:20,
                            marginTop:30
                        }}>
                            <Image source={require('../images/search.png')} style={{height:14, width:14}}/>
                            <TextInput
                            placeholder="Search here"
                            style={{
                                paddingHorizontal:20,
                                fontSize:15,
                                color:"#ccccef"
                            }}
                            />
                        </View>
                        <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{
                            marginRight:-40,
                            marginTop:30
                        }}
                        >
                            <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate("Detail")} 
                            style={{
                                alignItems:"center",
                                justifyContent:"center",
                                height:66,
                                width:66,
                                borderRadius:50,
                                backgroundColor:"#5facdb"
                            }}>
                                <Image source={require('../images/p.png')} style={{
                                    height:24,
                                    width:24
                                }}
                                />
                            </TouchableOpacity>
                            <View style={{
                                alignItems:"center",
                                justifyContent:"center",
                                height:66,
                                width:66,
                                borderRadius:50,
                                backgroundColor: "#ff5c83",
                                marginHorizontal:22
                            }}>
                                <Icon name="office-building" size={32} color="white"/>
                            </View>
                            <View style={{
                                alignItems:"center",
                                justifyContent:"center",
                                height:66,
                                width:66,
                                borderRadius:50,
                                backgroundColor: "#ff5c83",
                            }}>
                                <Icon name="bus" size={32} color="white"/>
                            </View>
                            <View style={{
                                alignItems:"center",
                                justifyContent:"center",
                                height:66,
                                width:66,
                                borderRadius:50,
                                backgroundColor: "#ff5c83",
                                marginLeft:22
                            }}>
                                <Icon name="dots-horizontal" size={32} color="white"/>
                            </View>
                        </ScrollView>
                        <Text style={{
                            color:"#FFF",
                            marginTop:30,
                            fontSize:17
                        }}>
                            Reommende
                        </Text>
                        <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{
                            marginLeft:-40,
                             marginTop:30
                        }}>
                            <View style={{
                                backgroundColor:"#FFF",
                                height:200,
                                width:190,
                                borderRadius:15,
                                padding:5,
                                marginHorizontal:3
                            }}>
                                <Image source={require('../images/1.jpg')}
                                style={{
                                    width:180,
                                    height:130,
                                    borderRadius:10
                                }}/>
                            
                            <View style={{
                                flexDirection:"row",
                                width:150,
                                alignItems:"center"
                            }}>
                            <View style={{
                                paddingHorizontal:5,
                                paddingVertical:5
                            }}>
                            <Text style={{
                                fontSize:15,
                                color:"#a2a2db"
                            }}>
                                Lorem impsum dolor sit amet, consectetuer adipscing elit,
                            </Text>
                            </View>
                            <Icon name="map-marker" size={25} color="#ff5c83"/>
                            </View>
                            </View>
                            <View style={{
                                backgroundColor:"#FFF",
                                height:200,
                                width:190,
                                borderRadius:15,
                                padding:5,
                                marginHorizontal:20
                            }}>
                                <Image source={require('../images/2.jpg')}
                                style={{
                                    width:180,
                                    height:130,
                                    borderRadius:10
                                }}/>
                            
                            <View style={{
                                flexDirection:"row",
                                width:150,
                                alignItems:"center"
                            }}>
                            <View style={{
                                paddingHorizontal:5,
                                paddingVertical:5
                            }}>
                            <Text style={{
                                fontSize:15,
                                color:"#a2a2db"
                            }}>
                                Lorem impsum dolor sit amet, consectetuer adipscing elit,
                            </Text>
                            </View>
                            <Icon name="map-marker" size={25} color="#5facdb"/>
                            </View>
                            </View>
                            <View style={{
                                backgroundColor:"#FFF",
                                height:200,
                                width:190,
                                borderRadius:15,
                                padding:5,
                                marginHorizontal:3
                            }}>
                                <Image source={require('../images/3.jpg')}
                                style={{
                                    width:180,
                                    height:130,
                                    borderRadius:10
                                }}/>
                            
                            <View style={{
                                flexDirection:"row",
                                width:150,
                                alignItems:"center"
                            }}>
                            <View style={{
                                paddingHorizontal:5,
                                paddingVertical:5
                            }}>
                            <Text style={{
                                fontSize:15,
                                color:"#a2a2db"
                            }}>
                                Lorem impsum dolor sit amet, consectetuer adipscing elit,
                            </Text>
                            </View>
                            <Icon name="map-marker" size={25} color="#ff5c83"/>
                            </View>
                            </View>
                        </ScrollView>
                </View>

            </ImageBackground>
        )

    }
}
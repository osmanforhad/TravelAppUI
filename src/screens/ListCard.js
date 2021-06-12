import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


export default class ListCard extends React.Component{

    render(){

        return(
            <TouchableOpacity onPress={this.props.onPress} style={{
                paddingHorizontal:36,
                alignSelf:"center",
                marginTop:20,
                backgroundColor:"#FFF",
                height:182,
                elevation:1,
                width:270,
                borderRadius:15
            }}>
                <View style={{
                    flexDirection:"row",
                    paddingTop:20,
                    alignSelf:"center"
                }}>
                    <Text style={{
                        fontWeight:"bold",
                        color:"#4b3ca7",
                        fontSize:20
                    }}>
                        NYC
                        </Text>
                        <Text style={{
                            fontSize:20,
                            color:"#a2a2db",
                            paddingHorizontal:12
                        }}>
                            - - - - - - - - - - 
                            </Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#4b3ca7",
                                fontSize:20
                            }}>
                                IDN
                                </Text>
                </View>

                <View style={{
                    flexDirection:'row',
                    marginTop:5,
                    alignItems:"center"
                }}>
                    <Text style={{
                        color:"#a2a2db",
                        fontSize:11
                    }}>
                        New York
                        </Text>
                        <Text style={{
                            fontSize:11,
                            paddingLeft:120,
                            color:"#a2a2db"
                        }}>
                            Indenosia
                        </Text>
                </View>

                <View style={{
                    flexDirection:"row",
                    marginTop:10,
                    fontSize:11,
                    alignItems:"center"
                }}>
                    <Text style={{
                        color:"#522289",
                        fontSize:16
                    }}>
                        09:00 AM
                        </Text>
                        <Text style={{
                            color:"#522289",
                            fontSize:16,
                            paddingLeft:90
                        }}>
                            21:00 PM
                        </Text>
                </View>
                
                <Text style={{
                    color:"#a2a2db",
                    fontSize:12
                }}>
                    20 JUNE, 2021
                </Text>
                <Text style={{
                    fontSize:17,
                    marginRight:-5,
                    marginVertical:8,
                    color:"#a2a2db"
                }}>
                    - - - - - - - - - - - - - - - - - - - - - - -
                </Text>
                <Text style={{
                    color:"#522289",
                    fontSize:16
                }}>
                    Lorem ipsum
                </Text>

                <View style={{
                    flexDirection:'row',
                    marginTop:-20,
                    alignItems:"center",
                    paddingLeft:86
                }}>
                    <Text style={{
                    fontWeight:"bold",
                    color:"#3b4ca7",
                    paddingLeft:75,
                    fontSize:16
                }}>
                    $400
                </Text>
                </View>

            </TouchableOpacity>
        );

    }
}
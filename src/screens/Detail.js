import React from 'react';
import {View,Text,Modal,Image,ImageBackground,Alert} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView } from "react-native-gesture-handler";

import ModalCard from '../screens/ModalCard';
import ListCard from '../screens/ListCard';



export default class Detail extends React.Component{

    state={
        modalVisible:false
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible:visible});
    }

    render(){

        const {modalVisible} = this.state;

        return(
            <ImageBackground 
            source={require('../images/back2.png')}
            style={{
                height:"100%",
                width:"100%"
            }}>
                <View style={{
                    flexDirection:"row",
                    marginTop:40,
                    alignItems:"center",
                    paddingHorizontal:20
                }}>
                    <Icon name="menu" size={30} color="#a2a2db" style={{width:20}}/>
                    <Icon name="account-circle" size={33} color="#a2a2db" style={{marginLeft:315}}/>
                </View>

                <View style={{
                    width:"100%",
                    marginTop:50,
                    marginBottom:20,
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    <View style={{
                        width:80,
                        height:80,
                        backgroundColor:"#5facdb",
                        borderRadius:50,
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                    <Image source={require('../images/p.png')} style={{
                        height:26,
                        width:26
                    }}/>
                    </View>
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    paddingHorizontal:40
                }}>
                    <Text style={{
                        fontSize:24,
                        fontWeight:"bold",
                        color:"#FFF"
                    }}>NYC</Text>
                    <Text style={{
                        fontSize:20,
                        color:"#a2a2db",
                        paddingHorizontal:15
                    }}>
                        - - - - - - - - - - - - - - - - - -
                    </Text>
                    <Text style={{
                        fontSize:24,
                        fontWeight:"bold",
                        color:"#FFF"
                    }}>
                        IDN
                    </Text>
                </View>

                <View style={{
                    flexDirection:"row",
                    paddingHorizontal:40
                }}>
                    <Text style={{
                        color:"#a2a2db"
                    }}>
                        New York
                        </Text>
                        <Text style={{
                        color:"#a2a2db",
                        paddingLeft:205
                    }}>
                        Indonesia
                        </Text>
                </View>

                <Text style={{
                    paddingHorizontal:40
                }}>
                    20 june, 2021
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    paddingHorizontal:50,
                    marginTop:60
                }}>
                    <Image source={require('../images/dots.png')} style={{width:18, height:16}}/>
                    <Image source={require('../images/filter.png')} style={{marginLeft:280, width:20, height:18}}/>
                </View>

                <ScrollView
                showsHorizontalScrollIndicator={false}
                style={{
                    marginVertical:5
                }}>
                    <ListCard onPress={()=>{this.setModalVisible(true);}}/>
                    <ListCard onPress={()=>{this.setModalVisible(true);}}/>
                    <ListCard onPress={()=>{this.setModalVisible(true);}}/>

                    <View>
                        <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={()=>{
                            Alert.alert("Modal is Closed");
                        }}>
                            <ModalCard
                            onPress={()=>{
                                this.setModalVisible(!modalVisible)
                            }}
                            />
                        </Modal>
                    </View>
                </ScrollView>

            </ImageBackground>
        )

    }
}
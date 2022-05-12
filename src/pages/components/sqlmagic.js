import React,{ Component, useState, useEffect } from 'react';
import '../App.css';
//defunct
import SQLite from 'react-native-sqlite-storage';
import { Alert } from '@mui/material';
import { set } from 'express/lib/application';

export default function SQLMagic({navigation}) {

  const [LFO, setLFO] = useState('');
  const [delay_1, setDelay_1] = useState('');
  const [rate_1, setRate_1] = useState('');
  const [waveform_1, setwaveform_1] = useState('');
  const [delay_2, setDelay_2] = useState('');
  const [rate_2, setRate_2] = useState('');
  const [waveform_2, setWaveform_2] = useState('');

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',

  },
  ()=>{},
  error=> { console.log(error) }

);

useEffect(() => {
createTable();
getData();
},
[]);

const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
    "CREATE TABLE IF NOT EXISTS "
    + "Preset "
    + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, LFO INTEGER, DELAY_1 INTEGER, RATE_1 INTEGER, WAVEFORM_1 TEXT, DELAY_2 INTEGER, RATE_2 INTEGER, WAVEFORM_2 TEXT, OSCILLATORS INTEGER, PITCH_MODULATION_1 INTEGER, PULSE_WIDTH_MODULATION_1 INTEGER, PITCH_MODULATION_2 INTEGER, PULSE_WIDTH_MODULATION_2 INTEGER);"
    )
  })
}
const getData = () => {
  try {
   // AsyncStorage.getItem('UserData')
  //  .then(value=>{
 //    if (value != null) {
 //   navigation.navigate('home');
//    }
//  })
  db.trasnaction((tx)=>{
    tx.executeSQL(
      "SELECT LFO, DELAY_1, RATE_1, WAVEFORM_1, DELAY_2, RATE_2, WAVEFORM_2 FROM Preset",
      [],
      (tx,results)=>{
        var len = results.row.length;
        if(len>0){
          var userLFO = results.rows.item(0).LFO;
          var userDELAY_1 = results.rows.item(0).DELAY_1;
          var userRATE_1 = results.rows.item(0).RATE_1;
          var userWAVEFORM_1 = results.rows.item(0).WAVEFORM_1;
          var userDELAY_2 = results.rows.item(0).DELAY_2;
          var userRATE_2 = results.rows.item(0).RATE_2;
          var userWAVEFORM_2 = results.rows.item(0).WAVEFORM_2;
          setLFO(userLFO);
          setDELAY_1(userDELAY_1);
          setRATE_1(userRATE_1);
          setWAVEFORM_1(userWAVEFORM_1);
          setDELAY_2(userDELAY_2 );
          setRATE_2(userRATE_2);
          setWAVEFORM_2(userWAVEFORM_2);

        }
      }
    )
    
  })
} catch (error) {
  console.log(error);
}
}

const setData = async () => {
  if (LFO.length == 0 || delay_1 == 0 || rate_1 == 0 || waveform_1 == 0 || delay_2 == 0 || rate_2 == 0 || waveform_2 == 0) {
    Alert.alert('Warning!', 'Please write your data.')
  }
  else {
    try {
      //var Preset = {
      //  LFO: LFO,
      //  DELAY_1: delay_1,
      //  RATE_1: rate_1,
      //  WAVEFORM_1: waveform_1,
      //  DELAY_2: delay_2,
      //  RATE_2: rate_2,
      //  WAVEFORM_2: waveform_2
      //}
      //await AsyncStorage.setItem('UserData', JSON.stringify(preset));
      await db.trasnaction((tx)=>{
      //  tx.executeSql(
      //    "INSERT INTO Preset (LFO, DELAY_1, RATE_1, WAVEFORM_1, DELAY_2, RATE_2, WAVEFORM_2) VALUES("+LFO+","+delay_1+","+rate_1+",'"+waveform_1+"',"+delay_2+","+rate_2+",'"+waveform_2+"')"
      //  );
      await tx.executeSQL(
        "INSERT INTO Preset (LFO, DELAY_1, RATE_1, WAVEFORM_1, DELAY_2, RATE_2, WAVEFORM_2) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [LFO, delay_1, rate_1, waveform_1, delay_2, rate_2, waveform_2]
      );
      })
      navigation.navigate('Home');
    } catch(error) {
      console.log(error);
    }
  }
}


}
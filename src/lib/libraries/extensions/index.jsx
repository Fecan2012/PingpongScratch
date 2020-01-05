import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';
/* 
import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';
*/
//roborisen add
import PingPongInsetIconURL from './pingpong_autocar/roborisen.png';

import pingpongAutoCarIconURL from './pingpong_autocar/pingpong_autocar.png';
import pingpongAutoCarConnectionSmallIconURL from './pingpong_autocar/pingpong_autocar-small.png';

import pingpongWormBotIconURL from './pingpong_wormbot/pingpong_wormbot.png';
import pingpongWormBotConnectionSmallIconURL from './pingpong_wormbot/pingpong_wormbot-small.png';

import pingpongDrawingBotIconURL from './pingpong_drawingbot/pingpong_drawingbot.png';
import pingpongDrawingBotConnectionSmallIconURL from './pingpong_drawingbot/pingpong_drawingbot-small.png';

import pingpongCrawlingBotIconURL from './pingpong_crawlingbot/pingpong_crawlingbot.png';
import pingpongCrawlingBotConnectionSmallIconURL from './pingpong_crawlingbot/pingpong_crawlingbot-small.png';

import pingpongG1IconURL from './pingpong_g1/pingpong_g1.png';
import pingpongG1ConnectionSmallIconURL from './pingpong_g1/pingpong_g1-small.png';

import pingpongG2IconURL from './pingpong_g2/pingpong_g2.png';
import pingpongG2ConnectionSmallIconURL from './pingpong_g2/pingpong_g2-small.png';

import pingpongG3IconURL from './pingpong_g3/pingpong_g3.png';
import pingpongG3ConnectionSmallIconURL from './pingpong_g3/pingpong_g3-small.png';

import pingpongG4IconURL from './pingpong_g4/pingpong_g4.png';
import pingpongG4ConnectionSmallIconURL from './pingpong_g4/pingpong_g4-small.png';

export default [
    /*{
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },*/
    // roborisen replace
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
            defaultMessage="PingPong Auto Car"
                description="Name for the PingPongAutoCar extension"
                id="gui.extension.PingPongAutoCar.name"
            />
        ),
        extensionId: 'PingPongAutoCar',
        collaborator: 'Robo Risen',
        iconURL: pingpongAutoCarIconURL,
        insetIconURL: PingPongInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Programming Auto Car"
                description="Description for the 'Auto Car' extension"
                id="gui.extension.PingPongAutoCar.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        //connectionIconURL: pingpongConnectImagefuture,
        connectionSmallIconURL: pingpongAutoCarConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting..."
                description="Message to help people connect to PingPong."
                id="gui.extension.PingPong.connectingMessage"
            />
        ),
        helpLink: 'https://roborisen.com'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="PingPong Worm Bot"
                description="Name for the PingPongWormBot extension"
                id="gui.extension.PingPongWormBot.name"
            />
        ),
        extensionId: 'PingPongWormBot',
        collaborator: 'Robo Risen',
        iconURL: pingpongWormBotIconURL,
        insetIconURL: PingPongInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Programming Worm Bot"
                description="Description for the 'worm bot' extension"
                id="gui.extension.PingPongWormBot.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        //connectionIconURL: pingpongConnectImagefuture,
        connectionSmallIconURL: pingpongWormBotConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting..."
                description="Message to help people connect to PingPong."
                id="gui.extension.PingPong.connectingMessage"
             />
        ),
        helpLink: 'https://roborisen.com'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="PingPong Drawing Bot"
                description="Name for the PingPongDrawingBot extension"
                id="gui.extension.PingPongDrawingBot.name"
            />
        ),
        extensionId: 'PingPongDrawingBot',
        collaborator: 'Robo Risen',
        iconURL: pingpongDrawingBotIconURL,
        insetIconURL: PingPongInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Programming Drawing Bot"
                description="Description for the 'drawing bot' extension"
                id="gui.extension.PingPongDrawingBot.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        //connectionIconURL: pingpongConnectImagefuture,
        connectionSmallIconURL: pingpongDrawingBotConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting..."
                description="Message to help people connect to PingPong."
                id="gui.extension.PingPong.connectingMessage"
             />
        ),
        helpLink: 'https://roborisen.com'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="PingPong Crawling Bot"
                description="Name for the PingPongCrawlingBot extension"
                id="gui.extension.PingPongCrawlingBot.name"
            />
        ),
        extensionId: 'PingPongCrawlingBot',
        collaborator: 'Robo Risen',
        iconURL: pingpongCrawlingBotIconURL,
        insetIconURL: PingPongInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Programming Crawling Bot"
                description="Description for the 'crawling bot' extension"
                id="gui.extension.PingPongCrawlingBot.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        //connectionIconURL: pingpongConnectImagefuture,
        connectionSmallIconURL: pingpongCrawlingBotConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting..."
                description="Message to help people connect to PingPong."
                id="gui.extension.PingPong.connectingMessage"
             />
        ),
        helpLink: 'https://roborisen.com'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="PingPong One Cube"
                description="Name for the PingPongG1i extension"
                id="gui.extension.PingPongG1i.name"
        />
        ),
        extensionId: 'PingPongG1i',
        collaborator: 'Robo Risen',
        iconURL: pingpongG1IconURL,
        insetIconURL: PingPongInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Programming One Cube"
                description="Description for the 'G1i' extension"
                id="gui.extension.PingPongG1i.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        //connectionIconURL: pingpongConnectImagefuture,
        connectionSmallIconURL: pingpongG1ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting..."
                description="Message to help people connect to PingPong."
                id="gui.extension.PingPong.connectingMessage"
             />
        ),
        helpLink: 'https://roborisen.com'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="PingPong Two Cubes"
                description="Name for the PingPongG2i extension"
                id="gui.extension.PingPongG2i.name"
            />
        ),
        extensionId: 'PingPongG2i',
        collaborator: 'Robo Risen',
        iconURL: pingpongG2IconURL,
        insetIconURL: PingPongInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Programming Two Cubes"
                description="Description for the 'PingPong G2i' extension"
                id="gui.extension.PingPongG2i.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        //connectionIconURL: pingpongConnectImagefuture,
        connectionSmallIconURL: pingpongG2ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting..."
                description="Message to help people connect to PingPong."
                id="gui.extension.PingPong.connectingMessage"
            />
        ),
        helpLink: 'https://roborisen.com'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="PingPong Three Cubes"
                description="Name for the PingPongG3i extension"
                id="gui.extension.PingPongG3i.name"
            />
        ),
        extensionId: 'PingPongG3i',
        collaborator: 'Robo Risen',
        iconURL: pingpongG3IconURL,
        insetIconURL: PingPongInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Programming Three Cubes"
                description="Description for the 'PingPong G3i' extension"
                id="gui.extension.PingPongG3i.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        //connectionIconURL: pingpongConnectImagefuture,
        connectionSmallIconURL: pingpongG3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting..."
                description="Message to help people connect to PingPong."
                id="gui.extension.PingPong.connectingMessage"
            />
        ),
        helpLink: 'https://roborisen.com'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="PingPong Four Cubes"
                description="Name for the PingPongG4i extension"
                id="gui.extension.PingPongG4i.name"
            />
        ),
        extensionId: 'PingPongG4i',
        collaborator: 'Robo Risen',
        iconURL: pingpongG4IconURL,
        insetIconURL: PingPongInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Programming Four Cubes"
                description="Description for the 'PingPong G4i' extension"
                id="gui.extension.PingPongG4i.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        //connectionIconURL: pingpongConnectImagefuture,
        connectionSmallIconURL: pingpongG4ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting..."
                description="Message to help people connect to PingPong."
                id="gui.extension.PingPong.connectingMessage"
            />
        ),
        helpLink: 'https://roborisen.com'
    }
];

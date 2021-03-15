import {Config} from 'remotion';
const os = require('os');

Config.Output.setCodec('h264');
Config.Output.setImageSequence(false);
Config.Rendering.setImageFormat('jpeg');
Config.Rendering.setConcurrency(1);
Config.Output.setOverwriteOutput(true)

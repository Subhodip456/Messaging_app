const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const ejs = require('ejs');

dotenv.config({path : 'config.env'})
const uri = process.env.MONGODB_URI;
const port = process.env.PORT;
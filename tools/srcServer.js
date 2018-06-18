/* eslint-disable import/no-extraneous-dependencies,prefer-destructuring */
import express from 'express';
import compression from 'compression';
import pug from 'pug';
import path from 'path';
import webpack from 'webpack';
import open from 'open';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

import config from '../webpack.dev';


/* eslint-disable no-console */

const port = 3009;
const app = express();

app.use(compression());

const compiler = webpack(config);
//  Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'email'));

app.use(express.static(path.join(__dirname, 'email')));
app.use(express.static(path.join(__dirname, '../gallery')));
app.use(express.static(path.join(__dirname, '../img')));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.com',
  port: 587,
  secure: false, // secure:true for port 465, secure:false for port 587
  auth: {
    user: 'info@01reklama.kz',
    pass: '123654Fd+'
  }
});



app.get('/email', (req, res) => {


  const phone = '123123';
  const price = 123123;
  const options = [
    {
      name: 'Гирлянды',
      price: 120,
      amount: 1
    },
    {
      name: 'Ёлка',
      price: 500,
      amount: 1
    },
    {
      name: 'Шапочки',
      price: 400,
      amount: 1
    },
    {
      name: 'Шарики',
      price: 100,
      amount: 1
    },
    {
      name: 'Леденцы',
      price: 50,
      amount: 1
    },
    {
      name: 'Носки',
      price: 120,
      amount: 1
    }

  ];

  res.render('index', { phone, price, options });

});

app.post('/sendemail', (req, res) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  console.log(req.body)
  const phone = req.body.phone;
  const name = req.body.name;


  const emailTemplate = pug.renderFile(path.join(__dirname, 'email/index.pug'), {
    phone,
    name
  });


  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Empresa 🎈" <info@01reklama.kz>', // sender address
    to: 'info@01reklama.kz', // list of receivers
    subject: 'Заявка с сайта ✔', // Subject line
    text: 'Новый лид 💰', // plain text body
    html: emailTemplate // html body
  };
  console.log(mailOptions)
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error != null) {
      console.log(error);
      return false;
    }
    res.sendStatus(200);
    console.log('Message %s sent: %s', info.messageId, info.response);
    return true;

  });

  res.end('{"success" : "Sent Successfully", "status" : 200}');

});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.log(`http://localhost:${port}`);
  }
});


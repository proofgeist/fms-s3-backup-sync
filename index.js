const schedule = require('node-schedule');
const sync = require('./sync')
const express = require('express');

const app = express()
 
const rule = new schedule.RecurrenceRule();
rule.second = 15;
let j
 
//const j = schedule.scheduleJob(rule, sync);

app.get('/backup/now', (req, res)=>{
  sync()
  res.send('ok')
})

app.get('/backup/start', (req, res)=>{
  j = schedule.scheduleJob(rule, sync);
  res.send('backups sceheduled');
})

app.get('/backup/stop', (req, res)=>{
  j.cancel();
  res.send('backups stoped');
})

app.listen(3100 , (e)=>{

  console.log('...listening')
})

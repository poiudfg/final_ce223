//Open Call Express
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine' , 'ejs')

app.get('',(req,res) => {
    res.render('index')
})

app.get('/credits',(req,res) => {
    res.render('credits')
})
app.get('/add_midmar',(req, res) => {   
    res.render('add_midmar')
})
app.get('/add_earlyapril',(req, res) => {   
    res.render('add_earlyapril')
})
app.get('/add_midapril',(req, res) => {   
    res.render('add_midapril')
})

//MySQL Connect phpMyAdmin
const pool = mysql.createPool({
    connectionLimit : 10,
    connectTimeout : 20,
    host : 'localhost', //www.google.com/sql or Server IP Address
    user : 'root',
    password : '',
    database : 'nodejs_lottery' //Connect Database from beers.sql (Import to phpMyAdmin)
})

var obj = {} //Global Variable

//เช็ค 16 มีนา
app.get('/check_midmar',(req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log("connected id : ?" ,connection.threadId) //ให้ print บอกว่า Connect ได้ไหม
        connection.query('SELECT * FROM midmar', (err, rows) => { 
            connection.release();
            if(!err){ //ถ้าไม่ error จะใส่ในตัวแปร rows
                console.log(rows)
                obj = {midmar : rows, Error : err}
                res.render('check_midmar',obj)
            } else {
                console.log(err)
            }
         }) 
    })
})
//เช็ค 1 เมษา
app.get('/check_earlyapril',(req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log("connected id : ?" ,connection.threadId) //ให้ print บอกว่า Connect ได้ไหม
        connection.query('SELECT * FROM earlyapril', (err, rows) => { 
            connection.release();
            if(!err){ //ถ้าไม่ error จะใส่ในตัวแปร rows
                console.log(rows)
                obj = {earlyapril : rows, Error : err}
                res.render('check_earlyapril',obj)
            } else {
                console.log(err)
            }
         }) 
    })
})
//เช็ค 16 เมษา
app.get('/check_midapril',(req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log("connected id : ?" ,connection.threadId) //ให้ print บอกว่า Connect ได้ไหม
        connection.query('SELECT * FROM midapril', (err, rows) => { 
            connection.release();
            if(!err){ //ถ้าไม่ error จะใส่ในตัวแปร rows
                console.log(rows)
                obj = {midapril : rows, Error : err}
                res.render('check_midapril',obj)
            } else {
                console.log(err)
            }
         }) 
    })
})

//เพิ่ม 16 มีนาคม
app.use(bodyParser.urlencoded({extended: false})) 
//สร้าง Path ของเว็บไซต์ additem
app.post('/add_midmar',(req, res) => {
    pool.getConnection((err, connection) => { //pool.getConnection สำหรับใช้เชื่อมต่อกับ Database 
        if(err) throw err
            const params = req.body
                //Check 
                pool.getConnection((err, connection2) => {
                    connection2.query(`SELECT COUNT(id) AS count FROM midmar WHERE id = ${params.id}`, (err, rows) => {
                        if(!rows[0].count){
                            connection.query('INSERT INTO midmar SET ?', params, (err, rows) => {
                                connection.release()
                                if(!err){
                                    //res.send(`${params.name} is complete adding item. `)
                                    obj = {Error:err, mesg : `Success adding data ${params.name}`}                                   
                                    res.render('add_midmar', obj)
                                }else {
                                    console.log(err)
                                    }
                                }) 
                        } else {
                            //res.send(`${params.name} do not insert data`)
                            obj = {Error:err, mesg : `Can not adding data ${params.name}`}                                   
                            res.render('add_midmar', obj)
                            }
                        })
                    })
                })
            })

//เพิ่ม 1 เมษายน
app.use(bodyParser.urlencoded({extended: false})) 
//สร้าง Path ของเว็บไซต์ additem
app.post('/add_earlyapril',(req, res) => {
    pool.getConnection((err, connection) => { //pool.getConnection สำหรับใช้เชื่อมต่อกับ Database 
        if(err) throw err
            const params = req.body
                //Check 
                pool.getConnection((err, connection2) => {
                    connection2.query(`SELECT COUNT(id) AS count FROM earlyapril WHERE id = ${params.id}`, (err, rows) => {
                        if(!rows[0].count){
                            connection.query('INSERT INTO earlyapril SET ?', params, (err, rows) => {
                                connection.release()
                                if(!err){
                                    //res.send(`${params.name} is complete adding item. `)
                                    obj = {Error:err, mesg : `Success adding data ${params.name}`}                                   
                                    res.render('add_earlyapril', obj)
                                }else {
                                    console.log(err)
                                    }
                                }) 
                        } else {
                            //res.send(`${params.name} do not insert data`)
                            obj = {Error:err, mesg : `Can not adding data ${params.name}`}                                   
                            res.render('add_earlyapril', obj)
                            }
                        })
                    })
                })
            })

//เพิ่ม 16 เมษายน
app.use(bodyParser.urlencoded({extended: false})) 
//สร้าง Path ของเว็บไซต์ additem
app.post('/add_midapril',(req, res) => {
    pool.getConnection((err, connection) => { //pool.getConnection สำหรับใช้เชื่อมต่อกับ Database 
        if(err) throw err
            const params = req.body
                //Check 
                pool.getConnection((err, connection2) => {
                    connection2.query(`SELECT COUNT(id) AS count FROM midapril WHERE id = ${params.id}`, (err, rows) => {
                        if(!rows[0].count){
                            connection.query('INSERT INTO midapril SET ?', params, (err, rows) => {
                                connection.release()
                                if(!err){
                                    //res.send(`${params.name} is complete adding item. `)
                                    obj = {Error:err, mesg : `Success adding data ${params.name}`}                                   
                                    res.render('add_midapril', obj)
                                }else {
                                    console.log(err)
                                    }
                                }) 
                        } else {
                            //res.send(`${params.name} do not insert data`)
                            obj = {Error:err, mesg : `Can not adding data ${params.name}`}                                   
                            res.render('add_midapril', obj)
                            }
                        })
                    })
                })
            })


            
app.listen(port, () =>
    console.log("listen on port : ", port)    
)
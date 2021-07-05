const express = require('express')
const app = express()
const port = 8000

app.get('/',  (req, res)=> (res.send('Hello World !')))
app.get('/board',  (req, res)=>(res.send('Board 입니다.')))
app.get('/login',  (req, res)=>(res.send('Login 입니다.')))
app.get('/signUp',  (req, res)=>(res.send('SignUp 입니다.')))

app.listen(port)

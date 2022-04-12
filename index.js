const express = require('express')
const app = express()
const engine = require('express-handlebars').engine

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res)=>{
    res.send('salutafion')
})
app.get('/login', (req, res)=>{
    res.render('home')
})
app.get('/submit/:username/:password', (req, res)=>{
    console.log(req.params)
    res.redirect('/')
})
app.post('/submitData', function (req, res) {
    res.send(`${req.body.mail}, ${req.body.pass}`)
    console.log('okkkki doki', req.body)
  });
  
app.listen(3000)
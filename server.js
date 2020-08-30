const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));




// mongodb pw b9uT5_n$5Vd@c*5
//public key: djteqehm
mongoose.connect('mongodb+srv://pduser:pduser@cluster0.zpxp4.mongodb.net/voteDB?',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});




const voteSchema = {
  email: String,
  choice: String
};
const Vote = mongoose.model("Vote", voteSchema);



app.get('/hey', (req,res) => res.send("ho!"));


app.get('/votes', (req,res) => {
  Vote.find({}, (err, foundVotes) => {
    if (err) {
      console.log(err)
    } else if (!err) {
      let voteTotals = {
        React: 0,
        Angular: 0,
        Vue: 0,
        Ember: 0
      };


      foundVotes.forEach(el => {
        switch (el.choice) {
          case 'React':
            voteTotals.React++;
            break;
          case 'Angular':
            voteTotals.Angular++
            break;
          case 'Vue':
            voteTotals.Vue++;
            break;
          case 'Ember':
            voteTotals.Ember++;
            break;
          default:
            break;
        }

      })
      res.send(voteTotals);
    }
  })


})




app.post('/votes', (req,res) => {

  console.log('email passed to createVote post route: ' + req.body.email)


  Vote.create({
    email: req.body.email,
    choice: req.body.choice
  })
})



app.listen(8080);

import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import styles from './Modal.module.css';
import axios from 'axios';



class Modal extends Component {

  state = {
    email: '',
    choice: 'React'
  }


  emailChangeHandler = (event) => {
    this.setState({email: event.target.value})
  };

  choiceChangeHandler = (event) => {
    this.setState({choice: event.target.value})
  };


  afterSubmission = (event) => {
    event.preventDefault();

    let voteData = {
      email: this.state.email,
      choice: this.state.choice
    }


    axios.get('/hey')
    .then(response => {
      console.log(response.data)
    })


    // axios.post('/didVote', this.state)
    // .then(response => {
    //   console.log('This person already voted. true or false:')
    //   console.log(response.data);
    // })


    // axios.post('/votes', this.state)
    // .then(response => {
    //   console.log(response.data);
    // });

  }


  render(){
    return(
      <div className={styles.Modal}
        style={{transform: this.props.state.voting ? 'translateY(0)' : 'translateY(-100vh)',
                opavity: this.props.voting ? '1' : '0'}}>
        {this.props.children}
        <form className={styles.voteform} onSubmit={this.afterSubmission}>
          <label>Enter your email address:</label><br/>
          <input type="text" class="email" onChange={this.emailChangeHandler}></input><br/><br/>
          <label>Which framework do you choose?</label><br/>
          <select onChange={this.choiceChangeHandler}>
            <option>React</option>
            <option>Angular</option>
            <option>Vue</option>
            <option>Ember</option>
          </select><br/>
          <button class={styles.enterbtn} onClick={() => this.props.cast(this.state)}>Cast my vote!</button>
        </form>
      </div>
    )
  }
}


export default Modal;

import React from 'react';
import Aux from '../../../hoc/Aux';
import styles from './Modal.module.css';


const modal = (props) => (
    <div className={styles.Modal}
      style={{transform: props.state.voting ? 'translateY(0)' : 'translateY(-100vh)',
              opavity: props.voting ? '1' : '0'}}>
      {props.children}
      <form className={styles.voteform}>
        <label>Enter your email address:</label><br/>
        <input type="text" class="email"></input><br/><br/>
        <label>Which framework do you choose?</label><br/>
        <select>
          <option>React</option>
          <option>Angular</option>
          <option>Vue</option>
          <option>Ember</option>
        </select><br/>
        <button type="submit" class={styles.enterbtn}>Cast my vote!</button>
      </form>
    </div>
)



export default modal;

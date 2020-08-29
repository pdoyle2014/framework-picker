import React from 'react';
import Aux from '../../../hoc/Aux';
import styles from './CastVoteBtn.module.css';

const castVoteBtn = (props) => {

  return (
    <Aux>
      <div className={styles.buttondiv}>
        <button onClick={props.clicked}>Click to Pick One!</button>
      </div>
    </Aux>
)
}

export default castVoteBtn;

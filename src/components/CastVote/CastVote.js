import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './CastVote.module.css';

const castVote = (props) => {

  return (
    <Aux>
      <div className={styles.buttondiv}>
        <button>Click to Pick One!</button>
      </div>
    </Aux>
)
}

export default castVote;

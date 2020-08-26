import React from 'react';
import Aux from '../../../hoc/Aux';
import styles from './FrameworkCard.module.css';

const frameworkCard = (props) => (
  <Aux>
    <div className={styles.card}>
      <h1> {props.framework.name} </h1>
      <p> Watchers: {props.framework.watchers} </p>
      <p> Commits: {props.framework.commits} </p>
      <p> Issues: {props.framework.issues} </p>
    </div>
  </Aux>
)



export default frameworkCard;

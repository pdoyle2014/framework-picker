import React from 'react';
import Aux from '../../hoc/Aux';
import FrameworkCard from './FrameworkCard/FrameworkCard';
import styles from './FrameworkCards.module.css';


const frameworkCards = (props) => (
  <Aux>
    <div className={styles.cardbar}>
      <FrameworkCard
        framework={props.data.react}
      />
      <FrameworkCard
        framework={props.data.angular}
      />
      <FrameworkCard
        framework={props.data.vue}
      />
      <FrameworkCard
        framework={props.data.ember}
      />
    </div>
  </Aux>
    // {props.data.map(frmwrk => (
    //   <FrameworkCard
    //     // key={frmwrk.name}
    //     name={frmwrk.name}
    //     watchers={frmwrk.watchers}
    //     commits={frmwrk.commits}
    //     issues={frmwrk.issues}
    //   />
    // ))}

)




export default frameworkCards;

import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './FrameworkTable.module.css';




const frameworkTable = (props) => {

  const frameworks = [props.data.react, props.data.angular, props.data.ember, props.data.vue];
  let sortedFrameworks = [...frameworks];

  sortedFrameworks.sort((a, b) => {
    if(a.name>b.name){return 1}
    if(b.name>a.name){return -1}
    return 0;
  })


  return(
    <Aux>
      <table className={styles.table}>
        <caption>Framework Stats</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subscribers</th>
            <th>Commits in past year</th>
            <th>Open Issues</th>
          </tr>
        </thead>
        <tbody>
          {frameworks.map(el => (
            <tr>
              <td>{el.name}</td>
              <td>{el.watchers}</td>
              <td>{el.commits}</td>
              <td>{el.issues}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </Aux>
  )
}




export default frameworkTable;

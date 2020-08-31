import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

import styles from './FrameworkTable.module.css';



class FrameworkTable extends Component {

//props.frameworks will be an array of objects, sorted according to which

  // state = {
  //   column: 'name'
  // }



  sortTable = () => {
    let sortParam = this.props.state.sortColumn;

    console.log('the sorting parameter is: ' + sortParam);

  }



render(){


  // this.sortTable()

  return(

    <Aux>
      <table className={styles.table}>
        <caption>Framework Stats</caption>
        <thead>
          <tr>
            <th>
              <button type="button" onClick={() => this.props.clicked('name')}>
              Name
              </button>
            </th>
            <th>
              <button type="button" onClick={() => this.props.clicked('watchers')}>
              Subscribers
              </button>
            </th>
            <th>
              <button type="button" onClick={() => this.props.clicked('commits')}>
              Commits in past year
              </button>
            </th>
            <th>
              <button type="button" onClick={() => this.props.clicked('issues')}>
              Open Issues
              </button>
            </th>
          </tr>
        </thead>
          <tr>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
          </tr>
        <tbody>


        </tbody>
      </table>
    </Aux>

  )
}

};

export default FrameworkTable;

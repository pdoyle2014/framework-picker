import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import styles from './TableHeader.module.css';



class TableHeader extends Component {



render(){

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
      </table>
      </Aux>
    )
  }
}


export default TableHeader;

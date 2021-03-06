import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import styles from './FrameworkTable.module.css';




class FrameworkTable extends Component {

  state = {
    sortParam: 3,
    sortAsc: true,
    dispOrder: ['react', 'angular', 'vue', 'ember']
  };



  sortedArray = [];



  tableSortHandler = (param) => {

    console.log('tableSortHandler within FrameworkTable.js has executed');

    let sortParamArray = [];
    let sortedArray = [];

    switch (param){
      case 0:
        console.log('clicked the name column')
        sortParamArray = [this.props.state.react.name, this.props.state.angular.name, this.props.state.vue.name, this.props.state.ember.name];
        (this.state.sortAsc === true) ? (sortedArray = sortParamArray.sort()) : (sortedArray = sortParamArray.reverse());
        console.log(sortedArray);
        break;

      case 1:
        sortParamArray = [this.props.state.react.watchers, this.props.state.angular.watchers, this.props.state.vue.watchers, this.props.state.ember.watchers];
        (this.state.sortAsc === true) ? (sortedArray = sortParamArray.sort(function(a,b){return a-b})) : (sortedArray = sortParamArray.sort(function(a,b){return b-a}))
        break;

      case 2:
        sortParamArray = [this.props.state.react.commits, this.props.state.angular.commits, this.props.state.vue.commits, this.props.state.ember.commits];
        (this.state.sortAsc === true) ? (sortedArray = sortParamArray.sort(function(a,b){return a-b})) : (sortedArray = sortParamArray.sort(function(a,b){return b-a}))
        break;

      default:
        sortParamArray = [this.props.state.react.issues, this.props.state.angular.issues, this.props.state.vue.issues, this.props.state.ember.issues];
        (this.state.sortAsc === true) ? (sortedArray = sortParamArray.sort(function(a,b){return a-b})) : (sortedArray = sortParamArray.sort(function(a,b){return b-a}))
        break;
    }

    // this.state.sortAsc === true ? console.log(sortParamArray.sort())  : console.log(sortParamArray.reverse())

    console.log(sortedArray);
  }


  // sortedFrameworks = [];





  // sortFramworks( (param) => {
  //
  //   let paramArray =[];
  //
  //   frameworks.forEach(el => {
  //     paramArray.push(el.param);
  //   })
  //
  //   console.log(paramArray)
  // })

  // class ChildComponent2{
  //       render(){
  //         const { onClick } = this.props // destructure
  //         return (<Button onClick={()=>onClick(param)}>SomeButton</Button>)
  //       }
  // }

  // clickSort = props.onSort;



  render (){

    let frameworks = [this.props.state.react, this.props.state.angular, this.props.state.ember, this.props.state.vue];
    console.log(frameworks);

  return(
    <Aux>
      <table className={styles.table}>
      <thead>
        <th>Name</th>
        <th>Subscribers</th>
        <th>Commits in Past Year</th>
        <th>Open Issues</th>
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

};



export default FrameworkTable;

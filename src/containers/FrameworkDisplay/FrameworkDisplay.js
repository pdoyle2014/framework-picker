import React, {Component} from 'react';
import FrameworkCards from '../../components/FrameworkCards/FrameworkCards';
import FrameworkTable from '../../components/FrameworkTable/FrameworkTable';
import CastVoteBtn from '../../components/CastVote/CastVoteBtn/CastVoteBtn';
import Modal from '../../components/UI/Modal/Modal';
import Header from '../../components/FrameworkTable/TableHeader/TableHeader';
import Body from '../../components/FrameworkTable/TableBody/TableBody';
import Aux from '../../hoc/Aux';
import axios from 'axios';






class FrameworkDisplay extends Component {
  state = {
    // frameworks: [
    //   {name: "React", repoName: "react", owner: "facebook", watchers: 0, commits: 0, issues: 0},
    //   {name: "Angular", repoName: "angular.js", owner: "angular", watchers: 0, commits: 0, issues: 0},
    //   {name: "Ember", repoName:"ember.js", owner:"emberjs", watchers: 0, commits: 0, issues: 0},
    //   {name: "Vue", repoName:"vue", owner:"vuejs", watchers: 0, commits: 0, issues: 0}
    // ],
    react: {
      name:'React',
      watchers: 0,
      commits: 0,
      issues: 0
    },
    angular: {
      name:"Angular",
      watchers:0,
      commits: 0,
      issues: 0
    },
    ember: {
      name:"Ember",
      watchers:0,
      commits: 0,
      issues: 0
    },
    vue: {
      name:"Vue",
      watchers:0,
      commits: 0,
      issues: 0
    },
    voting: false,
    voteCast: false,
    votesArray: [],
    sortColumn: 'name',
    dispSeq: ['react', 'angular', 'ember', 'vue']
  };




  dispSeq = [];

//   frameworkSorter = () => {
//     let sortArray = [];
//     let sortedKeyArray = [];
//     let sortedArray = [];
//     // let dispSeq = [];
//     let frameworkObjArray = [this.state.react, this.state.angular, this.state.vue, this.state.ember];
//
//
//     switch (this.state.sortColumn){
//       case('name'):
//         sortArray = [this.state.react.name, this.state.angular.name, this.state.ember.name, this.state.vue.name];
//         sortedArray = sortArray.sort();
//         // this.setState({dispSeq: sortedArray});
//         console.log('The frameworks, sorted by sortby parameter, are: ' + sortedArray);
//         return(
//           <Body
//             seq={sortedArray}
//             state={this.state} />
//         )
//         break;
//
//
//       case('watchers'):
//         sortArray = [this.state.react.watchers, this.state.angular.watchers, this.state.ember.watchers, this.state.vue.watchers];
//         sortedArray = sortArray.sort(function(a,b){return b-a});
//
//         sortedArray.forEach(el => {
//           this.dispSeq.push( frameworkObjArray.find(x => x.watchers === el).name );
//         })
//         // this.setState({dispSeq: dispSeq});
//         console.log('The frameworks, sorted by sortby parameter, are: ' + this.dispSeq);
//         return(
//           <Body
//             seq={dispSeq}
//             state={this.state} />
//           );
//         break;
//
//
//       case('commits'):
//         sortArray = [this.state.react.commits, this.state.angular.commits, this.state.ember.commits, this.state.vue.commits];
//         sortedArray = sortArray.sort(function(a,b){return b-a});
//
//         sortedArray.forEach(el => {
//           dispSeq.push( frameworkObjArray.find(x => x.commits === el).name );
//         })
//         // this.setState({dispSeq: dispSeq});
//         console.log('The frameworks, sorted by sortby parameter, are: ' + dispSeq);
//         return(
//           <Body
//             seq={dispSeq}
//             state={this.state} />
//         );
//         break;
//
//
//       default:
//         sortArray = [this.state.react.issues, this.state.angular.issues, this.state.ember.issues, this.state.vue.issues];
//         sortedArray = sortArray.sort(function(a,b){return b-a});
//         sortedArray.forEach(el => {
//           dispSeq.push( frameworkObjArray.find(x => x.issues === el).name );
//         })
//         // this.setState({dispSeq: dispSeq});
//         console.log('The frameworks, sorted by sortby parameter, are: ' + dispSeq);
//         return(
//           <Body
//             seq={dispSeq}
//             state={this.state} />
//         );
//         break;
//
//   };
// };










  body = {};








  sortColumnHandler = (column) => {
    console.log('The new sort-by column is: ' + column);
    // this.setState({sortColumn: column});
    // this.frameworkSorter();


    let sortArray = [];
    let sortedKeyArray = [];
    let sortedArray = [];
    let dispSeq = [];
    let frameworkObjArray = [this.state.react, this.state.angular, this.state.vue, this.state.ember];


    switch (column){
      case('name'):
        sortArray = [this.state.react.name, this.state.angular.name, this.state.ember.name, this.state.vue.name];
        sortedArray = sortArray.sort();
        // this.setState({dispSeq: sortedArray});
        console.log('The frameworks, sorted by sortby parameter, are: ' + sortedArray);
        this.dispSeq = sortedArray;
        break;


      case('watchers'):
        sortArray = [this.state.react.watchers, this.state.angular.watchers, this.state.ember.watchers, this.state.vue.watchers];
        sortedArray = sortArray.sort(function(a,b){return b-a});

        sortedArray.forEach(el => {
          this.dispSeq.push( frameworkObjArray.find(x => x.watchers === el).name );
        })
        // this.setState({dispSeq: dispSeq});
        console.log('The frameworks, sorted by sortby parameter, are: ' + this.dispSeq);
        break;


      case('commits'):
        sortArray = [this.state.react.commits, this.state.angular.commits, this.state.ember.commits, this.state.vue.commits];
        sortedArray = sortArray.sort(function(a,b){return b-a});

        sortedArray.forEach(el => {
          this.dispSeq.push( frameworkObjArray.find(x => x.commits === el).name );
        })
        // this.setState({dispSeq: dispSeq});
        console.log('The frameworks, sorted by sortby parameter, are: ' + this.dispSeq);
        break;


      default:
        sortArray = [this.state.react.issues, this.state.angular.issues, this.state.ember.issues, this.state.vue.issues];
        sortedArray = sortArray.sort(function(a,b){return b-a});
        sortedArray.forEach(el => {
          this.dispSeq.push( frameworkObjArray.find(x => x.issues === el).name );
        })
        // this.setState({dispSeq: dispSeq});
        console.log('The frameworks, sorted by sortby parameter, are: ' + this.dispSeq);
        break;

    };




  }











  voteHandler = () => {
    //By updating the value of "voting" within the state, this function effectively shows or hides the voting modal.
  this.setState({voting: true});
  }


  voteCastHandler = (voteData) => {

    console.log('the voteData is: ' + voteData);

    this.setState({voteCast: true});
    console.log("vote was cast! email is: " + voteData.email)

    //Checks to see if the email address voting now is present in the state object.
    //If this email address is present, then the user has already voted during this session and the vote is rejected.
    if(this.state.votesArray.includes(voteData.email)) {
      alert('This user already voted.')
    } else {
      let voteObj = {
        email: voteData.email,
        choice: voteData.choice
      };

      axios.post('/votes', voteObj)
      .then(response => {
        console.log(response.data);
      });
    }

    //Hide the voting modal and add the email address to the array of those who have voted during current browser session.
  this.setState({voting: false});
  this.setState({votesArray: this.state.votesArray + voteData.email});

  }





  getRepoData = () => {
    //This function reaches out to various endpoints within Github's API and updates the component's state to contain fetched data.
    let newReact = {
      name: 'React',
      watchers: 0,
      issues: 0,
      commits: 0
    };

    let newAngular = {
      name: 'Angular',
      watchers: 0,
      issues: 0,
      commits: 0
    };

    let newVue = {
      name: 'Vue',
      watchers: 0,
      issues: 0,
      commits: 0
    };

    let newEmber = {
      name: 'Ember',
      watchers: 0,
      issues: 0,
      commits: 0
    };

    axios.get('https://api.github.com/repos/facebook/react')
    .then(response => {
      newReact.watchers = response.data.subscribers_count;

      axios.get(`https://api.github.com/repos/facebook/react/stats/participation`)
      .then(response => {
        let totCommits=0;
        response.data.all.forEach(el => {totCommits += el});
        newReact.commits = totCommits;

        axios.get('https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:open&per_page=1')
          .then(response => {
            newReact.issues = response.data.total_count;
            this.setState({react: newReact});
          });
        });
      });


    axios.get('https://api.github.com/repos/angular/angular.js')
    .then(response => {
      newAngular.watchers = response.data.subscribers_count;

      axios.get(`https://api.github.com/repos/angular/angular.js/stats/participation`)
        .then(response => {
          let totCommits=0;
          response.data.all.forEach(el => {totCommits += el});
          newAngular.commits = totCommits;

          axios.get('https://api.github.com/search/issues?q=repo:angular/angular.js+type:issue+state:open&per_page=1')
          .then(response => {
            newAngular.issues = response.data.total_count;
            this.setState({angular: newAngular})
          })
        })
    });


    axios.get('https://api.github.com/repos/emberjs/ember.js')
    .then(response => {
      newEmber.watchers = response.data.subscribers_count;

      axios.get(`https://api.github.com/repos/emberjs/ember.js/stats/participation`)
        .then(response => {
          let totCommits=0;
          response.data.all.forEach(el => {totCommits += el});
          newEmber.commits = totCommits;

          axios.get('https://api.github.com/search/issues?q=repo:emberjs/ember.js+type:issue+state:open&per_page=1')
          .then(response => {
            newEmber.issues = response.data.total_count;
            this.setState({ember: newEmber})
          })
        })
    });

    axios.get('https://api.github.com/repos/vuejs/vue')
    .then(response => {
      newVue.watchers = response.data.subscribers_count;

      axios.get(`https://api.github.com/repos/vuejs/vue/stats/participation`)
        .then(response => {
          let totCommits=0;
          response.data.all.forEach(el => {totCommits += el});
          newVue.commits = totCommits;

          axios.get('https://api.github.com/search/issues?q=repo:vuejs/vue+type:issue+state:open&per_page=1')
          .then(response => {
            newVue.issues = response.data.total_count;
            this.setState({vue: newVue})
          })
        })
    });
  };



  componentDidUpdate(){
    this.sortColumnHandler();
  }


  componentDidMount(){
    this.getRepoData();
    // setInterval(this.getRepoData, 30000);
  }



  // <FrameworkTable clicked={this.sortColumnHandler} state={this.state}/>


  render(){

    let body = <Body seq={this.dispSeq} state={this.state} />


    return(
      <Aux>
        <FrameworkCards data={this.state} />
        <Modal state={this.state} cast={this.voteCastHandler} collect={this.voteCollectHandler}/>
        <FrameworkTable state={this.state}/>
        <CastVoteBtn clicked={this.voteHandler}/>
      </Aux>
    )
  }

}


export default FrameworkDisplay;

import React, {Component} from 'react';
import FrameworkCards from '../../components/FrameworkCards/FrameworkCards';
import FrameworkTable from '../../components/FrameworkTable/FrameworkTable';
import CastVote from '../../components/CastVote/CastVote';
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
  };




  getRepoData = () => {

    // this.state.frameworks.forEach(el => {
    //
    //   axios.get(`https://api.github.com/repos/${el.owner}/${el.repoName}`)
    //   .then(response => {
    //     console.log(`Results for ${el.name} printed below:`)
    //     console.log('Number of subscribers: ' + response.data.subscribers_count)
    //     el.watchers = response.data.subscribers_count;
    //
    //     console.log('Number of open issues: ' + response.data.open_issues)
    //     el.issues = response.data.open_issues;
    //
    //   })
    //
    //   axios.get(`https://api.github.com/repos/${el.owner}/${el.repoName}/stats/participation`)
    //   .then(response => {
    //     // console.log(response)
    //
    //     let totCommits = 0;
    //     response.data.all.forEach(el => {totCommits += el});
    //
    //     console.log('Total commits over the past year: ' + totCommits)
    //     el.commits=totCommits;
    //   })
    //
    // })

    axios.get('https://api.github.com/repos/facebook/react')
    .then(response => {
      console.log('Number of subscribers to React: ' + response.data.subscribers_count);
      console.log('Number of open issues in React: ' + response.data.open_issues);
      let newReact = {
        name:'React',
        watchers: response.data.subscribers_count,
        issues: response.data.open_issues,
        commits: 0
      };

      axios.get(`https://api.github.com/repos/facebook/react/stats/participation`)
        .then(response => {
          let totCommits=0;
          response.data.all.forEach(el => {totCommits += el});

          newReact.commits = totCommits;
          this.setState({react: newReact})
        })
    });


    axios.get('https://api.github.com/repos/angular/angular.js')
    .then(response => {
      console.log('Number of subscribers to angular: ' + response.data.subscribers_count);
      console.log('Number of open issues in angular: ' + response.data.open_issues);
      let newAngular = {
        name:'Angular',
        watchers: response.data.subscribers_count,
        issues: response.data.open_issues,
        commits: 0
      };

      axios.get(`https://api.github.com/repos/angular/angular.js/stats/participation`)
        .then(response => {
          let totCommits=0;
          response.data.all.forEach(el => {totCommits += el});

          newAngular.commits = totCommits;
          this.setState({angular: newAngular})
        })
    });


    axios.get('https://api.github.com/repos/emberjs/ember.js')
    .then(response => {
      console.log('Number of subscribers to ember: ' + response.data.subscribers_count);
      console.log('Number of open issues in ember: ' + response.data.open_issues);
      let newEmber = {
        name:'Ember',
        watchers: response.data.subscribers_count,
        issues: response.data.open_issues,
        commits: 0
      };

      axios.get(`https://api.github.com/repos/emberjs/ember.js/stats/participation`)
        .then(response => {
          let totCommits=0;
          response.data.all.forEach(el => {totCommits += el});

          newEmber.commits = totCommits;
          this.setState({ember: newEmber})
        })
    });

    axios.get('https://api.github.com/repos/vuejs/vue')
    .then(response => {
      console.log('Number of subscribers to vue: ' + response.data.subscribers_count);
      console.log('Number of open issues in vue: ' + response.data.open_issues);
      let newVue = {
        name:'Vue',
        watchers: response.data.subscribers_count,
        issues: response.data.open_issues,
        commits: 0
      };

      axios.get(`https://api.github.com/repos/vuejs/vue/stats/participation`)
        .then(response => {
          let totCommits=0;
          response.data.all.forEach(el => {totCommits += el});

          newVue.commits = totCommits;
          this.setState({vue: newVue})
        })
    });




  };



  componentDidMount(){

    // let newFrameworks = this.state.frameworks.map((el, index) => {
    //
    //   axios.get(`https://api.github.com/repos/${el.owner}/${el.repoName}`)
    //   .then(response => {
    //     console.log(`Results for ${el.name} printed below:`)
    //     console.log('Number of subscribers: ' + response.data.subscribers_count)
    //     el.watchers = response.data.subscribers_count;
    //
    //
    //     console.log('Number of open issues: ' + response.data.open_issues)
    //     el.issues = response.data.open_issues;
    //
    //   })
    //
    //   axios.get(`https://api.github.com/repos/${el.owner}/${el.repoName}/stats/participation`)
    //   .then(response => {
    //     // console.log(response)
    //
    //     let totCommits = 0;
    //     response.data.all.forEach(el => {totCommits += el});
    //
    //     console.log('Total commits over the past year: ' + totCommits)
    //     el.commits=totCommits;
    //   })
    //
    // })
    //
    // this.setState({frameworks: newFrameworks})

     this.getRepoData();
  }




  render(){

    // const frameworks = this.state.frameworks.map(framework => {
    //   return (<FrameworkCard
    //           name={framework.name}
    //           watchers={framework.watchers}
    //           commits={framework.commits}
    //           issues={framework.issues}/>);
    // })


    return(
      <Aux>
        <FrameworkCards data={this.state} />
        <FrameworkTable data={this.state}/>
        <CastVote/>
      </Aux>
    )
  }

}


export default FrameworkDisplay;

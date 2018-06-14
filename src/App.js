import React, { Component } from 'react';
import Categories from './components/categories';
import logo from './shan.jpeg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }  
  fetchFirst(url) {
    if (url) {
      fetch('http://localhost:3001/api/v1/' + url, {
        method: 'get',
        dataType: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(response =>response.json()).then(response => {
        this.setState({categories:response})
      });
    }
  }  
  componentDidMount() {
    this.fetchFirst("categories");
  }
  
  render() {
    if(!this.state.categories) return <p> Loading..... </p>
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">POS</h1>
        </header>
        <p className="App-intro">
        </p>
        <Categories categories={this.state.categories}/>
      </div>
    );
  }
}

export default App;

















// import React, { Component } from 'react';
// import logo from './shan.jpeg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to POS</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

import {routes} from '../Routes';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: props.match.url
    }
  }
  navigate = (url) => {
    console.log(url)
    this
      .props
      .history
      .push(url)
    this.setState({url})
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    let {url} = this.state
    return (
      <nav className="panel">
      <p className="panel-heading">
  
  </p>
      {routes.map(({path ,icon="new-text-box",title})=> 
        <a className={`panel-block ${path==url? 'is-active':''}`}
           onClick={e=>this.navigate(path)}>
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          {title}
        </a>
      
       )}
      </nav>
    );
  }
}
export default withRouter(Navbar)

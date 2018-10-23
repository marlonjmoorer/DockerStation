import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Menu, MenuItem} from '@blueprintjs/core';
import {routes} from '../Navigation';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state={
      url:props.match.url
    }
  }
  navigate=(url)=>{
    console.log(url)
    this.props.history.push(url)
    this.setState({url})
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    let {url}=this.state
    return (
      <Menu>
        {routes.map(({path ,icon="new-text-box",title})=> 
          <MenuItem active={path==url} icon={icon} onClick={e=>this.navigate(path)} text={title}/> )
        }
      </Menu>
    );
  }
}
export default withRouter(Navbar)

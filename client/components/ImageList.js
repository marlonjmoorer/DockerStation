import React, {Component} from 'react'
import {connect} from 'react-redux';
import {loadImages} from '../actions/image.actions';

 

class ImageList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.load()
    }
    render() {
        console.log(this.props)
        let images=this.props.images||[]
        return (

            <nav className="panel">
                <p className="panel-heading">
                Images
                </p>
                {renderItems(images)}
            </nav>
        )
    }
}
export default connect(
    state => ({
        ...state.image
    }), dispatch => ({
        load: () => dispatch(loadImages())
    })
)(ImageList)

const renderItems=images=>
images.map(image=>
    <a className="panel-block is-active">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"></i>
    </span>
    bulma
  </a>
   
)
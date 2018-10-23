import React, {Component} from 'react'
import {connect} from 'react-redux';
import {loadImages} from '../actions/image.actions';
class ImagesList extends Component {

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
         <h3>
              {renderItems(images)}
         </h3>
        )
    }
}
export default connect(
    state => ({
        ...state.image
    }), dispatch => ({
        load: () => dispatch(loadImages())
    })
)(ImagesList)

const renderItems=images=>
images.map(image=><h3>L</h3>)
import React, {Component} from 'react'
import {connect} from 'react-redux';

import ContainerListItem from './ContainerListItem';
import {getContainers}from '../actions/container.actions';

 

class ContainerList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.load()
    }
    render() {
        console.log(this.props)
        let containers=this.props.containers||[]
        return (

            <nav className="panel">
                <p className="panel-heading">
                Containers
                </p>
                {renderItems(containers)}
            </nav>
        )
    }
}
export default connect(
    state => ({
        ...state.container
    }), dispatch => ({
        load: () => dispatch(getContainers())
    })
)(ContainerList)

const renderItems=containers=>
containers.map(container=>
    <ContainerListItem container={container}/ >
)
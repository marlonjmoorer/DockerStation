import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ContainerListItem from './ContainerListItem';
import * as containerActions from '../actions/container.actions';


class ContainerList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.fetchDockerContainers()
    }
    openContainer=(id)=>{
        this.props.openContainer(id)
    }
    render() {
        console.log(this.props)
        let containers=this.props.containers||[]
        return (

            <nav className="panel">
                <p className="panel-heading">
                Containers 
               
                <a class="button is-primary is-pulled-right">
                    <span class="icon">
                        <i class="far fa-plus-square"></i>
                    </span>
                    <span>Create</span>
                </a>
                </p>
                {containers.map(container=><ContainerListItem key={container.Id} onClick={this.openContainer} container={container}/>)}
            </nav>
        )
    }
}
export default connect(
    state => ({
        ...state.container
    }), dispatch => ({
        ...bindActionCreators(containerActions, dispatch)
    })
)(ContainerList)

const renderItems=containers=>
containers.map(container=>
    <ContainerListItem key={container.Id} container={container}/ >
)
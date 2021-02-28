import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class toDoList extends React.Component {
    
    render() {
        return (
            <div className="toDoContainer">
                <div className="title">
                    <h3>Tasks</h3>
                </div>
                <div className="content">
                    <ul id="list">
                        <li className="item">
                            <FontAwesomeIcon icon="check-square" />
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                            <FontAwesomeIcon icon={['fa', 'plus-circle']} />
                            <p className="itemName">Test Item</p>
                        </li>
                    </ul>
                </div>
                <div className="add-to-do">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    <input type="text" id="input" placeholder="Add a to-do"></input>
                </div>
            </div>
        );   
    }    
}


export default toDoList;


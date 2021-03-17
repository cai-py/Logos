import React from 'react'
import '../css/notes.css'

class Notes extends React.Component {
    render() {
        return (
            <div className="notesContainer">
                <div className="grey textboxContainer">
                    <textarea className='docTitle'></textarea>
                    <textarea className='docText'></textarea>
                </div>
            </div>
        );   
    }
}


export default Notes;

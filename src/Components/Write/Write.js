import React from 'react';
import './Write.css';

const Write = (props)=>{
    return (
        <div className="write">
            <div className="card-body">
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        rows="3" 
                        placeholder="What are you thinking?"
                        onChange = {props.onChange}/>
                    <input type="file" accept = "image/*" className="file-input"/>
                </div>
                <div className="btn-group">
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick = {props.onClick}>게시</button>
                </div>
            </div>
        </div>
    )
}

export default Write;
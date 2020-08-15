import React from 'react';
import Typography from '@material-ui/core/Typography';
export default function dashboard(){
    return(
        <div>{/* React components must have a wrapper node/element */}
				<h1>A Simple React Component Example</h1>
				<div className="form-group"> {/* class is reserved in JS, so className must be used */}
					 { /* Notice no quotes ("") for the src expression */ }
				</div>
				<div className="form-group">
					<label htmlFor="simpleInput">Simple Label</label> {/* for is reserved in JS, so htmlFor must be used */}
					<input type="text" className="form-control" id="simpleInput" />
				</div>
				<div className="form-group">
					<button type="button" className="btn btn-primary" disabled={true}>Submit</button> {/* Some form attributes use an expression to set true or false: they include disabled, required, checked and readOnly */}
				</div>
				<p className="help-block" dangerouslySetInnerHTML={{__html: 'I\'m some <span class="text-danger">dangerous</span> helper text.'}} />{/* This inserts raw HTML and is also a self-closing tag */}
			</div>
    )
}
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
function Navigationbar(){
    return(
        <Navbar bg="transparent" variant="dark">
    <Navbar.Brand href="#" style={{color:'black'}}>
      <img
        alt=""
        src="/logo192.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Kofta
    </Navbar.Brand>
    <div className="row col-11 d-flex justify-content-end text-white" >
            <button className="btn btn-default">Login</button>
            </div>
  </Navbar>
    )
}
export default Navigationbar;
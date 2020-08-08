import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
function Navigationbar(){
    return(
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
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
            <span className="h3">Login</span>
            </div>
  </Navbar>
    )
}
export default Navigationbar;
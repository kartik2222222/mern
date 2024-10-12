import React from 'react'
import { useState } from 'react';

import {Modal,Button} from "react-bootstrap"

function Rooms({rooms}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (

   


    <div className='row bs'>
        <div className='col-md-4'>

             
        </div>
        <h1>{rooms.name || 'N/A'}</h1>
        <b>
         {""}
         <p>max count : {rooms.maxcount}</p>
         <p>phone number : {rooms.phonenumber}</p>
         <p>type : {rooms.type}</p>


        </b>

        <div style={{float : "right"}}>

              <button className='btn btn-primary'>view details</button>

        </div>

        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      
    </div>
  )
}

export default Rooms

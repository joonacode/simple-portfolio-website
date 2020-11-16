import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModalImage({show, handleClose, detail}) {
  return (
    <Modal show={show} animation={false} size="lg" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{detail.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-polio">
          <img src={detail.image} alt={detail.name} className="img-thumbnail mb-3" />
          <p className="title">Nama</p>
          <p className="sub-title">{detail.name}</p>
          <p className="title">Tech Stack</p>
          <p className="sub-title">{detail.madeWith}</p>
          <p className="title">Type</p>
          <p className="sub-title">{detail.type}</p>
          <p className="title">Description</p>
          <p className="sub-title">{detail.description}</p>
          <p className="title">Tags</p>
          <p className="sub-title">{detail.tags.join(', ')}</p>
          <a href={detail.demo} rel="noreferrer" target="_blank" className={`btn btn-sm btn-primary mr-2${!detail.demo ? ' disabled' : ''}`}>Demo</a>
          <a href={detail.github} rel="noreferrer" target="_blank" className={`btn btn-sm btn-success ${!detail.github ? ' disabled' : ''}`}>Repo Github</a>
          
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalImage

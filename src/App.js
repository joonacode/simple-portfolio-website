import { useState } from 'react'
import projects from './data'
import './App.css'
import ModalImage from './ModalImage'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {

  const [show, setShow] = useState(false);
  const [detailProject, setDetailProject] = useState({tags:[]});
  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setDetailProject(project)
    setShow(true)
  };

  return (
    <div className="min-vh-100 my-5 d-flex align-items-center">
      <div className="container">
        <div className="text-center mb-3">
          <h5 className="mb-4">Hallo nama saya Cep Guna Widodo</h5>
          <a rel="noreferrer" href="https://github.com/joonacode" target="_blank" className="mr-2">Github</a>
          <a rel="noreferrer" href="https://instagram.com/cepguna20" target="_blank">Instagram</a>

        </div>
        <div className="row">
          {
            projects.map((project, i) => (
              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="position-relative">
                    <LazyLoadImage
                      src={project.image}
                      alt={project.name}
                      effect="blur"
                      className="img-fluid cursor-pointer" 
                      onClick={() => handleShow(project)}
                     />
                    <div className="tags">
                      <span className="badge badge-secondary">{project.madeWith}</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="font-weight-bold">{project.name}</p>
                    <button className="btn btn-sm btn-primary" onClick={() => handleShow(project)}>Detail</button>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
      <ModalImage show={show} handleClose={handleClose} detail={detailProject} />
    </div>
  );
}

export default App;

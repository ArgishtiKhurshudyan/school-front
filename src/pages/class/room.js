import React, {useEffect, useState} from 'react';
import './class.scss'
import {useDispatch, useSelector} from "react-redux";
import {classDeleteStart, getClassStart} from "../../redux/room/actions";
import RoomModal from "../../bootstrap/modal/room/romModal";
import Button from "react-bootstrap/Button";
import {Toastify} from "../../components/toasterror";
import Swal from "sweetalert2";
import usePrevious from "../../hooks/usePrevious";

const Room = () => {
  const [showModal, setShowModal] = useState(false)
  const {data, isClassDeletedSuccess, errorMessage} = useSelector(state => state.room)
  const dispatch = useDispatch()
  const prevIsClassDeleteSuccess = usePrevious(isClassDeletedSuccess)
  const [isOpen, setIsOpen] = useState(false)
  const [isId, setIsId] = useState()

  useEffect(() => {
    if (errorMessage) {
      Toastify(errorMessage, 'error')
    }
    if (isClassDeletedSuccess && prevIsClassDeleteSuccess === false) {
      Swal.fire('Class deleted!')
    }
  }, [isClassDeletedSuccess,prevIsClassDeleteSuccess, errorMessage])


  useEffect(() => {
    dispatch(getClassStart())
  }, [dispatch])

  const handleShow = () => {
    setShowModal(true)
    setIsOpen(false)
  }

  const handleDelete = async (id) => {
    dispatch(classDeleteStart({id:id}))
  }

  const handleEdit = (id) => {
    setIsOpen(true)
    setShowModal(true)
    setIsId(id)

  }

  return (
    <div className="room-container">
      <div className="room-section">
        <h4>Rooms</h4>
        <div className="items">
          {
            data.map((item) =>
                <div  className="rooms-name">
                  <div className="delete" > <span onClick={() => handleDelete(item.id)}>X</span>   </div>
                  {/*<h1 onClick={() => handleEdit(item.id)}>{item.class_type}</h1>*/}
                  <Button style={{width: "150px"}} onClick={() => handleEdit(item.id)}>{item.class_type}</Button>
              </div>
            )
          }
        </div>
      </div>
      <div className="show-btn-create">
        <Button variant="primary" onClick={handleShow }>
          Create class room
        </Button>

        <RoomModal
          show={showModal}
          onHide={() => setShowModal(false)}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isId={isId}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default Room;
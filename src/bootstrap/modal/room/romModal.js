import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {classStartCreate, classUpdateStart, findRoomRequest, getClassStart} from "../../../redux/room/actions";
import {Toastify} from "../../../components/toasterror";
import Swal from "sweetalert2";
import usePrevious from "../../../hooks/usePrevious";
import {findTeacherRequest, getTeacherStart, teacherUpdateStart} from "../../../redux/teacher/actions";
import Select from 'react-select';

const RoomModal = (props) => {
  const {isOpen, setIsOpen, setShowModal, isId, show} = props;
  const [formData, setFormData] = useState({
    class_type: '',
    teacher: [],
  })
  const [error, setError] = useState(false)
  const {oneRoom, isClassCreatedSuccess, isClassUpdatedSuccess, errorMessage} = useSelector(state => state.room)
  const {data} = useSelector(state => state.teacher)
  const dispatch = useDispatch()
  const prevIsCreateClass = usePrevious(isClassCreatedSuccess)
  const prevIsUpdatedClass = usePrevious(isClassUpdatedSuccess)


  useEffect(() => {
    dispatch(getTeacherStart())

  }, [dispatch])

  useEffect(() => {
    if (isOpen) {
      dispatch(findRoomRequest(isId))
      console.log(oneRoom)
    }
    if (!isOpen) {
      formData.class_type = ""
    }

  }, [dispatch, isId, isOpen])

  useEffect(() => {
    if (isOpen) {
      setFormData({
        ...formData,
        class_type: oneRoom.class_type,
      })
    }
    dispatch(getClassStart())
  }, [dispatch, oneRoom])


  useEffect(() => {
    if (errorMessage) {
      Toastify(errorMessage, 'error')
    }
    if (isClassCreatedSuccess && prevIsCreateClass === false) {
      Swal.fire('class created success!')
      // setIsClick('')
    }
    if (isClassUpdatedSuccess && prevIsUpdatedClass === false) {
      Swal.fire("class updated")
    }
  }, [errorMessage, isClassCreatedSuccess, prevIsCreateClass, isClassUpdatedSuccess, prevIsUpdatedClass])


  const handleCreate = () => {
    const payload = {
      class_type: formData.class_type,
      teacher: formData.teacher
    }
    if (formData.class_type === '') {
      setError(true)

    } else {
      setShowModal(false)
      dispatch(classStartCreate(payload))
    }
    formData.class_type = ""
    formData.teacher = []

  }

  const handleUpdate = () => {
    const payload = {
      id: isId,
      class_type: formData.class_type,
    }
    dispatch(classUpdateStart(payload))
    setShowModal(false)
  }

  const handleChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }))
  }

  const handleSelectChange = (data) => {
    console.log(data.map(i => i.value))
    setFormData(prevState => {
      return {
        ...prevState,
        teacher: data.map(i => i.value)
      }
    })
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {!isOpen ? "Create class room" : "update class room"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Room name</Form.Label>
            <Form.Control
              type="text"
              isInvalid={formData.class_type !== '' ? false : error}
              placeholder="enter name"
              value={formData['class_type']}
              onChange={(e) => handleChange('class_type', e.target.value)}
            />
            <div>
              {!isOpen ?
         <>

           <h1>select teacher</h1>
           <Select options={data.map(i => ({label: i.name, value: i.id}))} onChange={handleSelectChange}
                   isMulti/></>:

                <><span>teachers</span> {oneRoom?.teacher?.map(item => <h3>{item.name}</h3>)}


                </>
              }
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={isOpen ? handleUpdate : handleCreate}>Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RoomModal;



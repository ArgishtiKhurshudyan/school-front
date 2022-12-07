import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import usePrevious from "../../hooks/usePrevious";
import {Toastify} from "../../components/toasterror";
import Swal from "sweetalert2";
import {findTeacherRequest, getTeacherStart, teacherStartCreate, teacherUpdateStart} from "../../redux/teacher/actions";
import {getSubjectStart} from "../../redux/subject/actions";
import './style.scss'

function TeacherCreate({isOpen, isId, setModalShow}) {
  const [formData, setFormData] = useState({
    name: '',
    gender_id: '',
    topic_id: '',
    images: ''
  })

  const [isClick, setIsClick] = useState('')
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const {
    errorMessage,
    isTeacherCreatedSuccess,
    oneTeacher,
    isTeacherUpdatedSuccess,
  } = useSelector(state => state.teacher)
  const {dataSubjects} = useSelector(state => state.subject)
  const prevIsCreateTeacher = usePrevious(isTeacherCreatedSuccess)
  const prevIsUpdatedTeacher = usePrevious(isTeacherUpdatedSuccess)

  useEffect(() => {
    if (isOpen) {
      dispatch(findTeacherRequest(isId))
    }
  }, [dispatch, isId])

useEffect(() => {
 if (isOpen){
   setFormData({
     ...formData,
     name: oneTeacher.name,
     gender_id: oneTeacher.gender_id,
     topic_id: oneTeacher.topic_id
   })
 }
}, [oneTeacher])



  useEffect(() => {
    if (errorMessage) {
      Toastify(errorMessage, 'error')
    }
    if (isTeacherCreatedSuccess && prevIsCreateTeacher === false) {
      Swal.fire('teacher created success!')
      setIsClick('')
    }
    if (isTeacherUpdatedSuccess && prevIsUpdatedTeacher === false) {
      Swal.fire("Teacher updated")
    }
  }, [errorMessage, isTeacherCreatedSuccess, prevIsCreateTeacher, isTeacherUpdatedSuccess, prevIsUpdatedTeacher])

  useEffect(() => {
    dispatch(getTeacherStart())
  }, [dispatch])

  useEffect(() => {
    dispatch(getSubjectStart())
  }, [dispatch])

  const handleCreate = () => {
    const form = new FormData()
    form.append('name', formData.name)
    form.append('gender_id', formData.gender_id)
    form.append('topic_id', formData.topic_id)
    form.append('filePath', formData.images)
    dispatch(teacherStartCreate(form))
    if (formData.name === '' || formData.gender_id === '' || formData.images === "" || formData.topic_id === '') {
      setError(true)
    } else {
      setModalShow(false)
    }
  }


  const handleUpdate = () => {
    const payload = {
      id: isId,
      name: formData.name,
      gender_id: formData.gender_id,
      topic_id: formData.topic_id,
      filepath: formData.images[0]
    }
    dispatch(teacherUpdateStart(payload))
    setModalShow(false)
  }

  const handleChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }))
  }
  const handleCheck = (e) => {
    formData.gender_id = e.target.id
  }

  const handleAddSubject = (e, value, field) => {
    formData.topic_id = e.target.value
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }))
    if (e.target) {
      setIsClick(e.target.id)
    }
  }

  const handleOnClick = () => {
    if (isOpen) {
      handleUpdate()
    } else {
      handleCreate()
    }
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Teacher name</Form.Label>
        <Form.Control
          type="text"
          isInvalid={formData.name !== '' ? false : error}
          placeholder="enter name"
          value={formData['name']}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Choose file</Form.Label>
        <Form.Control
          type="file"
          isInvalid={formData.images !== '' ? false : error}
          // value={ formData['images']}
          onChange={(e) => handleChange('images', e.target.files[0])}
        />
      </Form.Group>
      <Form.Label>Gender</Form.Label>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            isInvalid={formData.gender_id !== '' ? false : error}
            inline
            label="male"
            name="group1"
            type={type}
            checked={formData.gender_id == "0" ? true : null}
            id="0"
            onChange={(e) => handleCheck(e)}
          />
          <Form.Check
            isInvalid={formData.gender_id !== '' ? false : error}
            inline
            label="female"
            name="group1"
            type={type}
            checked={formData.gender_id == 1 ? true : null}
            id="1"
            onChange={(e) => handleCheck(e)}
          />
        </div>
      ))}
      <div className="subjects-list">
        <Form.Label>Topic</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={formData.topic_id}
          onChange={(e) => handleAddSubject(e)}
          isInvalid={formData.topic_id !== '' ? false : error}
        >
          <option>Select subject</option>
          {
            dataSubjects.map((item) =>
              <option value={item.id}>{item.name}</option>
            )
          }
        </Form.Select>
      </div>
      <div className="submit">
        <Button onClick={handleOnClick}>Submit</Button>
      </div>
    </Form>
  );
}

export default TeacherCreate;
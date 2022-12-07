import React, {useEffect, useState} from 'react';
import './teacher.scss'
import {useDispatch, useSelector} from "react-redux";
import {findTeacherRequest, getTeacherStart, teacherDeleteStart, teacherEdit} from "../../redux/teacher/actions";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import MyVerticallyCenteredModal from "../../bootstrap/modal/modal";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import usePrevious from "../../hooks/usePrevious";
import Confirmation from "../../components/confirmation";
import {Toastify} from "../../components/toasterror";
import {useParams} from "react-router-dom";

const Teacher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isId, setIsId] = useState('')
  const dispatch = useDispatch()
  const {id} = useParams();
  const {
    errorMessage,
    data,
    isTeacherCreatedSuccess,
    isTeacherDeletedSuccess,
    oneTeacher
  } = useSelector(state => state.teacher)
  const [modalShow, setModalShow] = React.useState(false);
  const prevIsTeacherDeleteSuccess = usePrevious(isTeacherDeletedSuccess)

  // useEffect(() => {
  //   dispatch(findTeacherRequest(id))
  // }, [dispatch, id])


  useEffect(() => {
    dispatch(getTeacherStart())
    if (isTeacherCreatedSuccess) {
      setModalShow(false)
    }
  }, [dispatch, isTeacherCreatedSuccess])

  useEffect(() => {
    if (errorMessage) {
      Toastify(errorMessage, 'error')
    }
    if (isTeacherDeletedSuccess && prevIsTeacherDeleteSuccess === false) {
      Swal.fire('Teacher deleted!')

    }
  }, [isTeacherDeletedSuccess, errorMessage])


  // const handleConfirm = (isConfirm, value) => {
  //   if (isConfirm) {
  //     dispatch(teacherDeleteStart({id: value}))
  //   }
  // }

  const handleDelete = async (id) => {
    // setIsOpen(true)
    dispatch(teacherDeleteStart({id: id}))
  }

  const handleEdit = (id) => {

    dispatch(teacherEdit())
    setIsOpen(true)
    setModalShow(true)
    setIsId(id)
  }

  const onClickShow = () => {
    setIsOpen(false)
    setModalShow(true)
  }

  return (
    <div className="teacher-container">
      <div className="teacher-navbar">
        <img src="https://icon-library.com/images/icon-softwares/icon-softwares-20.jpg"/>
      </div>
      <h1>Teachers</h1>
      <div className="teacher-list-container">
        {
          data?.map((item) =>
            <div className="teachers">
              <div className="img-main">
                <img src={`${process.env.REACT_APP_API_URL}/${item.filePath}`}/>
              </div>
              <h1>{item.name}</h1>
              <span>Gender:&nbsp;&nbsp;<small>{item['Gender.name']}</small></span>
              <span>Profession:&nbsp;&nbsp;<small>{item['Topic.name']}</small></span>
              <div className="icons">
                <DeleteForeverIcon style={{color: "red", cursor: "pointer"}} onClick={() => handleDelete(item.id)}/>
                <EditIcon id={item.id} style={{cursor: "pointer"}} onClick={() => handleEdit(item.id)}/>
              </div>
            </div>
          )
        }
        {/*<div className={isOpen ? "confirm" : ''}>*/}
        {/*  <Confirmation handleConfirm={handleConfirm} isOpen={isOpen} setIsOpen={setIsOpen} value={oneTeacher.id}/>*/}
        {/*</div>*/}
      </div>
      <div className="create-form">
        <>
          <Button variant="primary" onClick={onClickShow }>
            Create Teacher
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isId={isId}
            setModalShow={setModalShow}
          />
        </>

      </div>

    </div>
  );
};

export default Teacher;


{/*<div className="img-main">*/
}
{/*  <img src="https://static.vecteezy.com/system/resources/previews/001/200/141/non_2x/books-png.png"/>*/
}
{/*</div> */
}
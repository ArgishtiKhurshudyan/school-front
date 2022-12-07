import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TeacherCreate from "../form/create-teacher";
import {useDispatch, useSelector} from "react-redux";
import {findTeacherRequest, teacherCreateFailureClear} from "../../redux/teacher/actions";
import {useEffect, useState} from "react";

const MyVerticallyCenteredModal = (props) => {
  const dispatch = useDispatch()
  const {isOpen, setIsOpen, isId,setModalShow} = props;

  const onClick = () => {
    dispatch(teacherCreateFailureClear())
    props.onHide()
    setIsOpen(false)
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
          {isOpen ? "Update teacher" : " Create teacher"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <TeacherCreate setModalShow={setModalShow} isOpen={isOpen} isId={isId}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClick}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default  MyVerticallyCenteredModal
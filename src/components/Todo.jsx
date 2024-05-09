import React, { useContext, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { Button } from "@mui/material";
import { Remove, Update_data } from "../redux/actions/action";



const Todo = () => {
  const { User_data } = useSelector((state) => state.todoreducers);



  const dispatch = useDispatch();
  console.log(User_data);
  const [showeye, setShoweye] = useState(false);
  const [showeyeval, setShoweyeval] = useState("");

  const remove = (id) => {
    dispatch(Remove(id));
    setDlttask(true)
  };
  const usertask_update = () => {
    dispatch(Update_data(update, ind));
    handleClose();
  };
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState("");
  const [ind, setInd] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (el) => {
    setShow(true);
    setUpdate(el);
  };

  return (
    <>
      <div className="todo-data col-lg-5 mx-auto mt-2">
        {User_data.map((ele, k) => {
          return (
            <>
              <div
                className="todo-container mb-2 d-flex justify-content-between align-items-center px-2"
                key={k}
                style={{
                  background: "#dcdde1",
                  borderRadius: "3px",
                  height: "45px",
                }}
              >
                <li style={{ listStyle: "none" }}>{ele}</li>
                <div className="edit col-lg-3 py-2 d-flex justify-content-between align-items-center ">
                  <EditIcon
                    onClick={() => {
                      handleShow(ele);
                      setInd(k);
                    }}
                    style={{ color: "#3c40c6", cursor: "pointer" }}
                  />
                  <DeleteIcon
                    onClick={() => remove(k)}
                    style={{ color: "#red", cursor: "pointer" }}
                  />
                  <RemoveRedEyeIcon
                    onClick={() => {
                      setShoweye(true);
                      setShoweyeval(ele);
                    }}
                    style={{ color: "#1dd1a1", cursor: "pointer" }}
                  />
                </div>
              </div>
            </>
          );
        })}

        <Modal show={showeye}>
          <h1 className="text-center">{showeyeval}</h1>
          <Modal.Footer></Modal.Footer>
        </Modal>
        <Modal show={show} onHide={handleClose}>
          <h3 className="text-center mt-3">Update Your Task</h3>
          <Modal.Header>
            <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
              <input
                name="task"
                value={update}
                onChange={(e) => setUpdate(e.target.value)}
                className="form-control col-lg-5 mt-2"
              />
            </div>
          </Modal.Header>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => usertask_update()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Todo;

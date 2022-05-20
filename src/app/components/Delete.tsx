import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch  } from 'react-redux';
import { deletePicture } from "../../feature/picturesSlice"

type idType = {
  id : number
}
const Delete = ({ id } : idType )  => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    axios.delete("http://localhost:5000/pictures/" + id);
    dispatch(deletePicture(id))
  };
  return (
    <div className="delete-icon" onClick={() => handleDelete()}>
      <AiOutlineDelete />
    </div>
  );
};

export default Delete;

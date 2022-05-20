import axios from "axios";
import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { addPictures, Ipicture } from "../../feature/picturesSlice"
import { v4 as uuid } from 'uuid';


const Form = () => {
  const dispatch = useDispatch()
  const inputArt = useRef<HTMLInputElement>(null);
  const inputYear = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: Ipicture = {
      artist: (inputArt.current as HTMLInputElement).value,
      year: Number((inputYear.current as HTMLInputElement).value),
      photo: `https://picsum.photos/400/${Math.round(
        Math.random() * 200 + 300
      )}`,
      id: uuid()
    };
    dispatch(addPictures(data))

    axios.post("http://localhost:5000/pictures", data)
      .then(() => { (formRef.current as HTMLFormElement).reset(); })


  };

  return (
    <div className="form-container">
      <div className="form">
        <h3>Enregistrer une nouvelle photo</h3>
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
          <input type="text" placeholder="Artiste" required ref={inputArt} />
          <input type="text" placeholder="Année" ref={inputYear} required pattern="[0-9]{4}" />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default Form;

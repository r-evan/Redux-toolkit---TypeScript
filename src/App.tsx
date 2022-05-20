import { useEffect } from "react";
import axios from "axios";
import Form from "./app/components/Form";
import PicCard from "./app/components/PicCard";
import { setPicturesData, Ipicture} from "./feature/picturesSlice";
import { useSelector, useDispatch  } from 'react-redux';



const App = () => {
  const dispatch = useDispatch()
  const pictures = useSelector(({pictures} : any) => pictures.pictures);

  useEffect(() => {
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => dispatch(setPicturesData(res.data)));
  }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form />
      <div className="cards-container">
        {pictures?.map((pic : Ipicture, index : number) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;

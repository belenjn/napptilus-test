import {React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchGetOompaLoompas} from "../features/oompaLoompasSlice";


export const Home = () => {

  const dispatch = useDispatch();

  const { oompaLoompas } = useSelector((state) => state.oompaLoompas);

  useEffect(() => {
    dispatch(fetchGetOompaLoompas());
  }, [dispatch]);
  
  return (
  <>
{
  oompaLoompas.map(oompaLoompa => {
    return (
      <div 
      key={oompaLoompa.id}
      style={{
        background: `url(${oompaLoompa.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
        marginBottom: "20px",
        marginLeft: "1%",
        marginRight: "1%",
        height: "350px",
        width: "240px",
      }}
      >
        
      </div>
    )
  })
}    
  </>);
};

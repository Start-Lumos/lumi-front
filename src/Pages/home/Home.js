import { useEffect, useState } from "react";
import CardLine from "../../Components/CardService/CardLine/CardLine";
import {Main} from "./Style.Home";

//Axios
import { axiosInstance } from "../../service/axios";


function Home(){

    const [servidores, setServidores] = useState([]);

    useEffect(() => {
        axiosInstance.get("/user/list").then((res) => {
            setServidores(res.data.user);
            console.log(res.data.user)
        })
    }, [])

    return(
        <Main style={{flexDirection: "column"}}>
            {/* {servidores.map(servidor => {
                return(<p>{servidor}</p>)
            })} */}
            {servidores.map((servidor) => (  
                
                <CardLine nome={servidor.userFirstName} servico={servidor.userServico} descricao={servidor.userServDescricao}/>  
            ))}
        </Main>
    )
}

export default Home;
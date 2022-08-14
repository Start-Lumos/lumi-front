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
                <div key={servidor.userCPF}>
                    <CardLine dados={servidor}/>  
                </div>
            ))}
        </Main>
    )
}

export default Home;
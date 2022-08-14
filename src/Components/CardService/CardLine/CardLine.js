import React from "react";

//Style
import {Service, Picture, About, ServName, ServFunction, Description, LampIcon} from "./Style.CardLine";

//Icon
import {MdLightbulbOutline} from "react-icons/md";

function CardLine({nome, servico, descricao}){
    
    const url = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHx1c2VyfGVufDB8fHx8MTY1OTE3MjI5OA&ixlib=rb-1.2.1&q=80&w=1080";

    {console.log(nome)}

    return(
        <Service>
            
            <Picture src={url} alt="" />
            
            <About>
                <ServName>{nome}</ServName>
                <ServFunction>{servico}</ServFunction>
            </About>

            <Description>
                {descricao}
            </Description>
            
            <LampIcon><MdLightbulbOutline/></LampIcon>
            
        </Service>
    )
}

export default CardLine;
import React, { useEffect, useState } from 'react'
import styles from './Player.module.css'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'


export default function Player() {
    const [video, setVideo] = useState();
    const parametros = useParams();
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/abnerugeda/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])


    return (
        <>
        <Banner imagem="player"/>
        <Titulo>
            <h1>
                {video == null ? "HAHA VOCÊ ENCONTROU O EGG" : "Player"}
            </h1>
        </Titulo>
        <section className={styles.container}>
        <iframe 
            width="100%" 
            height="100%" 
            src={video == null ? "https://www.youtube.com/embed/Zd8bNW4DG5E" : video.link}
            title={video == null ? "Você encontrou o Egg" : video.titulo} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
        </section>
        
      

        </>
    )
}

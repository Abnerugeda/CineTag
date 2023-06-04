import React from 'react'
import styles from './Player.module.css'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import videos from 'json/db.json';
import { useParams } from 'react-router-dom'


export default function Player() {
    const parametros = useParams();
    var video;
    parametros.id === '999'? video = null :
    video = videos.find((video) =>{
        return video.id === Number(parametros.id)
    })

    console.log(video)
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

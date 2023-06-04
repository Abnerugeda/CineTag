import Banner from 'components/Banner'
import Cabecalho from 'components/Cabecalho'
import Card from 'components/Card'
import Rodape from 'components/Rodape'
import Titulo from 'components/Titulo'
import React from 'react'
import Videos from 'json/db.json'
import styles from "./Initial.module.css"

export default function Initial() {
  return (
    <>
   
      <Banner imagem="home"/>
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {Videos.map((video) => {
            return <Card {...video} key={video.id}/>
        })}
      </section>

    </>
  )
}

import Layout from "@/components/layout";
import Image from "next/image";
import styles from '../styles/nosotros.module.css';

export default function Nosotros() {
  return (
    <Layout
      title="nosotros"
      description="Sobre nosotros, guitarLA, tienda de musica"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            alt="Imagen sobre Nosotros"
            width={1000}
            height={800}
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
              risus egestas, ornare felis sit amet, tincidunt arcu. Nullam
              cursus massa et felis condimentum, vel ultrices arcu molestie.
              Proin et lorem dapibus, scelerisque ex id, egestas nunc. Ut non
              leo vitae lorem varius convallis.
            </p>

            <p>
              Etiam eget leo feugiat, consequat eros et, facilisis velit.
              Aliquam eget tellus a libero lacinia feugiat. In hac habitasse
              platea dictumst. In vestibulum tortor arcu, nec malesuada orci
              condimentum vulputate. Praesent id erat eget quam ultricies
              lobortis ac in felis. Pellentesque sed ligula convallis elit
              blandit semper. Donec eget viverra felis. Etiam vehicula quis diam
              sit amet rhoncus. Etiam luctus nibh arcu, ac tristique purus porta
              vel. 
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

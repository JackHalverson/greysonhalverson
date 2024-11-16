// src/app/page.js
import Head from 'next/head';

const photos = [
  '/photo1.jpeg',
  '/photo2.jpeg',
  '/photo3.jpeg',
  '/photo4.jpeg',
  '/photo5.jpeg',
  '/photo6.jpeg',
  '/photo7.jpeg',
  '/photo8.jpeg',
  '/photo9.png',
  '/photo10.png',
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Embarrassing Moments of Greyson Halverson</title>
        <meta name="description" content="A collection of fun and embarrassing photos of Greyson Halverson." />
      </Head>
      <div className="container">
        <h1 className="title">Embarrassing Moments of Greyson Halverson</h1>
        <div className="bentoGrid">
          {photos.map((photo, index) => (
            <div className="photoCard" key={index}>
              <img src={photo} alt={`Embarrassing moment ${index + 1}`} className="photo" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
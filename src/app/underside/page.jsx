/* eslint-disable react/jsx-key */
import Image from "next/image";
export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const data = await res.json();
  return {
    title: data[0].name,
    description: `loves the color ${data[0].favouriteColor}`,
  };
}
export default async function Underside() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const data = await res.json();
  return (
    <main>
      {data.map((dog) => (
        <div>
          <Image src={dog.image.url} alt="" width={dog.image.width} height={dog.image.height} priority={true} 	
      sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             400px"/>
          <h1>{dog.name}</h1>
          <h2>{dog.age}</h2>
          <p>{dog.favouriteColor}</p>
        </div>
      ))}
    </main>
  );
}

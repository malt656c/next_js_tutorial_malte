/* eslint-disable react/jsx-key */
export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const data = await res.json();
  return{
    title: data[0].name,
    description: `loves the color ${data[0].favouriteColor}`
  }
}
export default async function Underside() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const data = await res.json();
  return (
    <main>
      {data.map((dog) => (
        <div>
          <img src={dog.image.url} alt="" width="250" />
          <h1>{dog.name}</h1>
          <h2>{dog.age}</h2>
          <p>{dog.favouriteColor}</p>
        </div>
      ))}
    </main>
  );
}

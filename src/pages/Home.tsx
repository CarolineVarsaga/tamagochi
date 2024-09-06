import useAnimals from "../hooks/useAnmials"

const Home = () => {
  const { animals, error, fetched } = useAnimals(); 

  if (!fetched) return <p>Hämtar djuren...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>Välj ditt djur</h1>
      <section className="animals">
        {animals.slice(0, 6).map((animal) => {
          return (
            <div key={animal.id} className="animal-container">
              <h2>{animal.name}</h2>
              <picture>
                <img src={animal.imageUrl} alt={animal.name} width={300} height={300} className="animal-img"/>
              </picture>
            </div>
          );
        })}
      </section> 
    </>
  )
}

export default Home
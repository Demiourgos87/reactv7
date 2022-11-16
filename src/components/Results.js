import Pet from "./Pet";

export default function Results({ pets }) {
  return (
    <div className="pets">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(({ name, animal, breed, id, images, city, state }) => (
          <Pet
            name={name}
            animal={animal}
            breed={breed}
            key={id}
            images={images}
            location={`${city}, ${state}`}
            id={id}
          />
        ))
      )}
    </div>
  );
}

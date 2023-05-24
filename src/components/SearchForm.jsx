import React, { useContext } from "react";
import AdoptedPetContext from "../context/AdoptedPetContext";

const SearchForm = ({ setAnimal, setRequestParams, BREEDS, ANIMALS }) => {
  const [adoptedPet] = useContext(AdoptedPetContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
          animal: formData.get("animal") ?? "",
          breed: formData.get("breed") ?? "",
          location: formData.get("location") ?? "",
        };
        setRequestParams(obj);
      }}
    >
      {adoptedPet && (
        <div className="pet image-container">
          <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
        </div>
      )}
      <label htmlFor="location">
        Location
        <input id="location" name="location" placeholder="Location" />
      </label>

      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          name="animal"
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="breed">
        Breed
        <select id="breed" disabled={!BREEDS.length} name="breed">
          <option />
          {BREEDS.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Results from "./components/Results";
import SearchForm from "./components/SearchForm";
import fetchSearch from "./requests/fetchSearch";
import useBreedList from "./requests/useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const [animal, setAnimal] = useState("");
  const [BREEDS] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <SearchForm
        setRequestParams={setRequestParams}
        setAnimal={setAnimal}
        BREEDS={BREEDS}
        ANIMALS={ANIMALS}
      />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

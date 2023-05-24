async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  const URL = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;

  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error(`pet search not okay ${animal}, ${location}, ${breed}`);
  }

  return response.json();
}

export default fetchSearch;

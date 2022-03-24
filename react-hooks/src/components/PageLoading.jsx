import useFetch from "../patterns/useFetch";
import withLoader from "../patterns/withLoader";

const DisplayData = withLoader(({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
});

const PageLoading = () => {
  const response = useFetch("https://rickandmortyapi.com/api/character");
  return <DisplayData {...response} />;
};

export default PageLoading;

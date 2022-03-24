export default function withLoader(Component) {
  return ({ loading, error, ...props }) => (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>Error: {error}</span>}
      <Component {...props} />
    </>
  );
}

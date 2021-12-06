import React from "react";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  const api = "https://jsonplaceholder.typicode.com/todos/1";

  React.useEffect(() => {
    if (!data) {
      setLoading(true);
      fetch(api)
        .then((response) => {
          if (response.ok && response.status === 200) {
            return response.json();
          } else {
            setError(response.status);
            setLoading(false);
          }
        })
        .then((json) => {
          setData(json);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [data]);

  return (
    <div>
      {loading && <div>loading...</div>}
      {data && !loading && <div>{data.title}</div>}
      {error && !loading && <div>error!</div>}
    </div>
  );
}

export default App;
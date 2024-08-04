import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Londo", "Tokyo"];

  const handleSelectItem = (item) => console.log(item);

  return (
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
  );
}

export default App;

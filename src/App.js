import categories from "./categories.json"
import Directory from "./components/categories/Directory";

function App() {
  return (
    <div className="App">
      <Directory categories = {categories} />
    </div>
  )
}

export default App;


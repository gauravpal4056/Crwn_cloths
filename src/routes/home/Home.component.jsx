import categories from "../../categories.json"
import Directory from "../../components/categories/Directory";

function Home() {
  return (
    <div className="App">
      <Directory categories = {categories} />
    </div>
  )
}

export default Home;

import { useContext } from "react";
import { Context } from "../../Context/index.jsx";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail/index.jsx";

function Home() {
  const context = useContext(Context);
  const { items, searchByTitle, filteredItems } = context;
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusiv Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4"
        onChange={(e) => {
          context.setSearchByTitle(e.target.value);
        }}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {searchByTitle?.length > 0 ? (
          filteredItems?.length > 0 ? (
            filteredItems.map((item) => <Card key={item.id} data={item} />)
          ) : (
            <div>{"We don't have anything"}</div>
          )
        ) : (
          items?.map((item) => <Card key={item.id} data={item} />)
        )}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;

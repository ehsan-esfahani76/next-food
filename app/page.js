import Header from "@/components/layout/Header";
import Products from "@/features/home-menu/FoodsMenu";

async function getProducts(params) {
  const data = await fetch('http://localhost:8000/api/products/products-tabs' , {next:"no-store"})
  const res = await data.json()
  return res?.data
}

export default async function Home() {
  const data = await getProducts()
  return (
    <>
    <Header/>
    <div className="flex justify-center my-8">
      {/* {data && <Products data={data}/>} */}
    </div>
    </>
  )
}

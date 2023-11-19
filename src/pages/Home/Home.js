import Product from '../../components/Product/Product';
import './Home.css';

function Home() {
  const click = (message) =>{
    alert(message)
  }

  const data = {
    name: "mohamad",
    photoUrl: 'https://static5.depositphotos.com/1006446/519/i/450/depositphotos_5197208-stock-photo-rural-landscape.jpg',
    products:[
      {
        name: "test product 1",
        price: 29,
        description:"this is a test product"
      }, {
        name: "test product 2",
        price: 14,
        description:"this is a test product"
      }, {
        name: "test product 3",
        price: 36,
        description:"this is a test product"
      }
    ]
  }
  
  return (
    <div className="Home">
      <header>
      </header>
      <h1>hello</h1>
      <button onClick={()=>{click("hello"); console.log(data)}} >{data.name}</button>
      <button onClick={()=>window.location.href="/shop"} >Shop</button>
      <button onClick={()=>window.location.href="/car"} >Car</button>
       <img src={data.photoUrl}></img>
       <div className='products'>
        {data.products.map((v)=>(
          <Product name={v.name} price={v.price} description={v.description}/>
        ))}
        {/* <Product name="lonely" price={20} description="standalone"/> */}
       </div>
    </div>
  );
}

export default Home;

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


const arr =[
  { name: "Тур в бразилию" , price: 124000 },
  { name: "Тур в мексику" , price: 124000 },
];


function App() {
  return (
    <div className="wrapper clear">

      <Drawer />

      <Header />
      <div className="content p-40">
        <div className="mb-40 align-centre justify-between d-flex">
          <h1>Все ваши любимые туры</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <Card
            title="Тур в бразилию"
            price={125000}
            imageURL="/img/brazilia.jpg"
           />
           <Card
            title="Тур в Мексику"
            price={250000}
            imageURL="/img/brazilia.jpg"
           />
{/*           {arr.map((obj) => (
            <Card/>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default App;

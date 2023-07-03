
import './styles/App.css';
import Main from './components/Main';
import Body from './components/Body';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Banner3 from './components/Banner3';
import Banner4 from './components/Banner4';

const bannerMaterialOne = {
  title:"black jacket",
  content: "guess??",
  bgColor: "cyan",
  fontColor: "white"
};

const bannerMaterialTwo = {
  title:"tiee short",
  content: "roam the unknown",
  bgColor: "gray",
  fontColor: "orange"
};


function App() {
  return (
   <>
   <Main/>
   <Body />
   <Banner 
      title="blue sweater" 
      content="I wear white shoes"
      bgColor="blue"
      fontColor= "white" />
   <Banner 
      title="Jeans" 
      content="I wear a lab coat" 
      bgColor="pink"
      fontColor="orange"/>
   <Banner 
        title="Shirt"   
        content="I wear big shirts" 
        bgColor="green"
        fontColor= "yellow"/>
    <Banner2 info={bannerMaterialOne} />
    <Banner3 data={bannerMaterialTwo} />
    <Banner4 
        howMany={3}
        shirt="puma"
        data={bannerMaterialOne}/>
   <Footer/>
   
   
   </>
  );
}

export default App;

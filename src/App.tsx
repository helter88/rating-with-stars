import {ReactComponent as Star1} from './img/star-icon.svg'
import {ReactComponent as FiveStars} from './img/gwiazdki.svg'
// import Rating from './rating'
import './App.css';
import DisplayNStars from './display-n-stars';
import  Star from './star';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Starting!</h1>
        {/* <div className='container5'>
        <Star id="8" fillPercent='50%'/>
      </div> */}
        <p>Next</p>
      </div>
      {/* <div className='conteinter2'>
      </div>  */}
      <div className='container3'>
        {/* <Rating /> */}
      </div>
      <div className='container4'>
        <DisplayNStars score={2.7} quantity={5} fillColor='red' stroke='red' emptyColor='white' />
      </div>
      

       
    </div>
  );
}

export default App;

import './style.css'
import Hoc from './Component/Hoc';
import SimpleCompo from './Component/compo';
import PureComp from './Component/Purecompo';
function App() {
  return (<>
    <div className='main'>
      <div>
      
      <Hoc data={SimpleCompo}/>   
      <hr/>  
      </div>
     
      <div>
        
        <PureComp/>
      </div>
      </div>
      </>
      
  );
}

export default App;

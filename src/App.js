import logo from './logo.svg';
import './App.css';
import { Card } from 'primereact/card';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="card">
      <Card title="Title"> 
         <p className='p'>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed 
             consequuntur error repudiandae 
             numquam deserunt quisquam repellat libero asperiores earum nam nobis, 
            culpa ratione quam perferendis esse, cupiditate neque quas!
         </p>
      </Card>
    </div>
  );
}

export default App;

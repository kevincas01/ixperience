import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import BookInput from './BookInput';
import BookTable from './BookTable';

function App() {
  return (
    
      <div className="container mt-5">
        <div className="card card-body ">
          <h1 className="display-1 ">Add Book:</h1>
          
          <BookInput></BookInput>
          <BookTable></BookTable>

        </div>

      </div>

  );
}

export default App;

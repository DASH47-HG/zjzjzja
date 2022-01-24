import './App.css';
import { File } from './File';

function App() {
  return (
    <div className="App">
      <File name ="Mazen" lastname ="Haggui"/>
      <form>
        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>
<button type="button" class="btn btn-danger">submit</button>

      </form>
      
    </div>
  );
}

export default App;

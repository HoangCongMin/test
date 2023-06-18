import './App.css';
import element from'./useRouterElemen/index'

function App() {

  const useRouter = element()

  return (
    <div className="App">
      {useRouter}
    </div>
  );
}

export default App;

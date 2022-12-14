import TaskList from './components/TaskList';
import { ToastContainer } from 'react-toastify';
export const URL = 'http://localhost:5000';

function App() {
  return (
    <div className='app'>
      <div className='task-container'>
        <TaskList />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import ToggleFunc from './component/ToggleFunc';
import RoutingCheck from './component/RoutingCheck';
import UserList from './component/UserList';
import DataFetch from './component/DataFetch';
import Hooks from './component/Hooks';
import ContextAPI from './component/ContextAPI';
import EmiCalculator from './component/EMICalculator';

const Home = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // eslint-disable-next-line react/prop-types
  const CodeSnippet = ({ code }) => (
    <pre><code>{code}</code></pre>
  );

  return (
    <div className="home-container">
      <h1>Welcome to the My React Practice Webpage</h1>
      <p>Current time: {time.toLocaleTimeString()}</p>
      
      <section className="react-concepts">
        <h2>Key React Concepts</h2>
        <div className="concept">
          <h3>Functional Components</h3>
          <p>Functional components are the modern way to write React components. They are JavaScript functions that return JSX.</p>
          <CodeSnippet code={`
const MyComponent = (props) => {
  return <div>{props.message}</div>;
};
          `}/>
        </div>
        <div className="concept">
          <h3>Hooks</h3>
          <p>Hooks let you use state and other React features without writing a class.</p>
          <CodeSnippet code={`
const [state, setState] = useState(initialState);
          `}/>
        </div>
      </section>
      
      <section className="interactive-section">
        <h2>Interactive Demo</h2>
        <p>Click count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </section>
      
      <section className="feature-section">
        <h2>Explore React Features</h2>
        <ul>
          <li>Routing: Navigate between pages seamlessly</li>
          <li>State Management: Handle application state efficiently</li>
          <li>Data Fetching: Learn how to fetch data from APIs</li>
          <li>Context API: Manage global state without prop drilling</li>
        </ul>
      </section>
      
      <section className="best-practices">
        <h2>React Best Practices</h2>
        <ol>
          <li>Keep components small and focused</li>
          <li>Use functional components and hooks</li>
          <li>Lift state up when necessary</li>
          <li>Use keys in lists correctly</li>
          <li>Avoid unnecessary renders with React.memo</li>
        </ol>
      </section>
      
      <section className="cta-section">
        <h2>Ready to dive deeper?</h2>
        <button onClick={() => alert('Start exploring the navbar links!')}>Explore Features</button>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/routingcheck" element={<RoutingCheck />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/togglefunc" element={<ToggleFunc />} />
            <Route path="/datafetch" element={<DataFetch />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/contextapi" element={<ContextAPI />} />
            <Route path="/emicalculator" element={<EmiCalculator />} />
          </Routes>
        </main>
        <footer>
          <p>© 2024 Akshat Mehta. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
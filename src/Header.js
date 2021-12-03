import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </header>
    );
};
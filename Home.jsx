import { Link } from 'react-router-dom';

function Home() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20%' }}>
        <h1>Home</h1>
        <Link to="/game">
          <button>Play</button>
        </Link>
      </div>
    );
  }
  
  export default Home;
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header.jsx'
import Body from './layout/Body.jsx'
import Footer from './layout/Footer.jsx'
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>

        {/* <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button> */}
      </>
    </div>
  );
}

export default App;
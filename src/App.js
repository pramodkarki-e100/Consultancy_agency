import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Switch, Route } from 'react-router-dom';

import { Home, About, Service, Testimonials, ContactUs } from './pages';
import { Navbar } from './components';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Testimonials />
      <ContactUs />

      <Switch>
        <Route exact path='/home' component={Home} />

        <Route exact path='/about' component={About} />

        <Route exact path='/service' component={Service} />

        <Route exact path='/testimonials' component={Testimonials} />

        <Route exact path='/contact' component={ContactUs} />
      </Switch>
    </div>
  );
};

export default App;

import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import routes from './config/routes';
import { Footer } from './components/footer';

//"start": "node server/server.js",
//"start": "react-scripts start",

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Switch>
        {routes.map((route, index) => {
          return(
            <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
            />
          )
        })}
      </Switch>
      <Footer showSubscribeForm="true" />
    </div>
  );
}

export default App;

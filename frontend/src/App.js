import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Mentions from './pages/Mentions/Mentions';
import Quote from './pages/Quote/Quote';
import Quote_1 from './pages/Quote_1/Quote_1';
import Quote_2 from './pages/Quote_2/Quote_2';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/Mentions']} component={Mentions} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
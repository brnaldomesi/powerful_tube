import * as React from 'react';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import NavBar from 'components/NavBar';
import Player from 'components/Player';
import HomePage from 'containers/HomePage';
import Settings from 'containers/Settings';
import * as colors from 'utils/colors';
import injectSaga from 'utils/injectSaga';
import { PageContainer } from './styles';
import saga from './saga';

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <MuiThemeProvider theme={colors.theme}>
        <div>
          <NavBar title="TubeTop" />

          <PageContainer>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </PageContainer>

          <Player />
        </div>
      </MuiThemeProvider>
    );
  }
}

const withSaga = injectSaga('App', saga);

export default compose(
  withSaga,
)(App);

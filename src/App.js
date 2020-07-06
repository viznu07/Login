import React from 'react';

//HOC's
import AppAuth from './App.auth';
import AppTheme from './App.theme';
import AppGQLClient from './App.gqlclient';
import AppAlert from './App.alert';
import AppErrorBoundary from './App.error_boundry';
import RouterApp from './router';

function App() {
  return <AppAuth>
    <AppErrorBoundary>
      <AppTheme>
        <AppGQLClient>
          <AppAlert>
            <RouterApp />
          </AppAlert>
        </AppGQLClient>
      </AppTheme>
    </AppErrorBoundary>
  </AppAuth>
}

export default App;

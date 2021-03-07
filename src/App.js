import React, { Suspense } from 'react';
import {Route, Switch, withRouter,Redirect} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Contacts from './containers/Contact/Contact'
import Dashboard from './containers/Dashboard/Dashboard'
import Files from './containers/File/File'
import Timer from './containers/Timer/Timer'
import DataManagement from './containers/DataMangement/DataMangement'
import PeriodManagement from './containers/PeriodManagement/PeriodManagement'
import Settings from './containers/Settings/Setting'



const app = (props) => {


    let routes = (
      <Switch>
            <Route path="/contact"  exact component={Contacts} />
            <Route path="/files"  component={Files} />
            <Route path="/timer"  component={Timer} />
            <Route path="/datamanagement"  component={DataManagement} />
            <Route path="/period"  component={PeriodManagement} />
            <Route path="/setting"  component={Settings} />
            <Route path="/"  component={Dashboard} />
            <Redirect to="/contact" />
      </Switch>);

    return (
      <div>
       <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
       </Layout>
      </div>
    );
  }



export default withRouter(app);

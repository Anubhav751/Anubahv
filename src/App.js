import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Project from './Components/Project';
import Dropdown from './Components/Dropdown';
import CreateProject from './Components/CreateProject'
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import DashboardDetails from './Components/dashboardDetails';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';
import Screen3 from './Components/Screen3';
import Screen4 from './Components/Screen4';
import Screen5 from './Components/Screen5';
import Screen6 from './Components/Screen6';
import TableData from './Components/table';
import TableDetails from './Components/tableDetails'
import CardDashboards from './Components/cardDashboard'
import MyApproval from './Components/myApproval'
import MyApprovalTableList from './Components/myApprovalTableList'
import {Route, Switch } from 'react-router-dom';
import StatusCard from './Components/statusCard'


function App() {
  return (
    <> 
    <Header/>
     <Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route exact path='/project' component={Project}/>
    <Route exact path='/createproject' component={CreateProject}/>
    <Route exact path='/dashboarddetails' component={DashboardDetails}/>
    <Route exact path='/screen1' component={Screen1}/>
    <Route exact path='/screen2' component={Screen2}/>
    <Route exact path='/screen3' component={Screen3}/>
    <Route exact path='/screen4' component={Screen4}/>
    <Route exact path='/screen5' component={Screen5}/>
    <Route exact path='/screen6' component={Screen6}/>
    <Route exact path='/carddashboards' component={CardDashboards}/>
    <Route exact path='/myapproval' component={MyApproval}/>
    <Route exact path='/myapprovaltablelist' component={MyApprovalTableList}/>
    <Route exact path='/statuscard' component={StatusCard}/>
    <Route exact path='/tabledata' component={TableData}/>
    <Route exact path='/tabledetails' component={TableDetails}/>

    </Switch> 
    </> 
  );
}

export default App;

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CoursePage from './components/CoursePage'
import CreateCoursePage from './components/CreateCoursePage'
import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFoundPage'

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/course/:slug" component={CoursePage} />
        <Route path="/create-course" component={CreateCoursePage} />
        <Route component={NotFoundPage} />
      </Switch>

    </div>
  );
}

export default App;

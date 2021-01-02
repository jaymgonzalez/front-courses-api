import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CoursePage from './components/CoursePage'
import CreateCoursePage from './components/CreateCoursePage'
import HomePage from './components/HomePage'
import UpdateCoursePage from './components/UpdateCoursePage'
import NotFoundPage from './components/NotFoundPage'

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/course/:slug" component={CoursePage} />
        <Route path="/create-course" component={CreateCoursePage} />
        <Route path="/update-course" component={UpdateCoursePage} />
        <Route component={NotFoundPage} />
      </Switch>

    </div>
  );
}

export default App;

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CoursePage from './components/CoursePage'
import CreateCoursePage from './components/CreateCoursePage'
import HomePage from './components/HomePage'
import CreateAuthorPage from './components/CreateAuthorPage'
import AuthorPage from './components/AuthorPage'
import AuthorsPage from './components/AuthorsPage'
import NotFoundPage from './components/NotFoundPage'
import LoginPage from './components/LoginPage'

function App() {

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/authors" component={AuthorsPage} />
          <Route path="/course/:slug" component={CoursePage} />
          <Route path="/author/:id" component={AuthorPage} />
          <Route path="/create-course" component={CreateCoursePage} />
          <Route path="/update-course/:slug" component={CreateCoursePage} />
          <Route path="/create-author" component={CreateAuthorPage} />
          <Route path="/update-author/:id" component={CreateAuthorPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </>
  )
}

export default App

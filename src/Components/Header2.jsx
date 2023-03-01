import React from 'react'

export default function Header2() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
              <Route path="/" component={App}>
              <Route path="login" component={Login} />
              <Route path="logout" component={Logout} />
              <Route path="about" component={About} />
              <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
        </Route>
        </Routes>
      </BrowserRouter>
  </div>
  )
}

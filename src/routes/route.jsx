

function routePath() {
  return (
         [
        {
          name: "Home",
          path: "/home",
          element: <Home />,
        },
        {
          name: "About",
          path: "/about",
          element: <AboutPage />,
        },
        {
          name: "Gallery",
          path: "/gallery",
          element: <CardDin />,
        },
        {
          name: "Contact",
          path: "/contact",
        //   element: <Contact />,
        },
      ]
    
  )
}

export default routePath
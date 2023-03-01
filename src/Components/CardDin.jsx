import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
   
  export default function CardDin() {
    const images = [
        {
         image: "/images/1756080.jpg"
        },
        {
          image: "/images/212811.jpg",
        },
        {
          image: "/images/Jtj5S2.jpg"
        },
        {
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        },
        {
          image: "/images/veera.jpg"
        },
        {
          image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
          image: "/images/wp2218303-macos-wallpapers.jpg"
        },
        {
          image: "/images/5FK7Xo.jpg"
        },
        {
          image: "/images/10-14-Day.jpg"
        },
    ]

    return (
      <div className="card bg-fixed bg-cover bg-center pb-5" id="gallery">
          <h1 className="flex flex-col items-center mx-auto text-6xl font-bold text-dark sm:text-7xl">
           Gallery
          </h1>
          
        <div className="container mb-4 mt-2 flex flex-col items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3 grid lg:grid-cols-3 " >
          {images.map(
            ({ image }, key) =>
              <Card className="w-96">
                {/* <CardHeader floated={false} className="h-90">
                  <img src={image} alt="profile-picture" />
                </CardHeader> */}
                <CardBody className="text-center">
                <img src={image} className="rounded-xl" alt="profile-picture" />
                  {/* <Typography variant="h4" color="blue-gray" className="mb-2">
                    Natalie Paisley
                  </Typography>
                  <Typography color="blue" className="font-medium" textGradient>
                    CEO / Co-Founder
                  </Typography> */}
                </CardBody>
                {/* <CardFooter className="flex justify-center gap-7 pt-2">
                  <Tooltip content="Like">
                    <Typography
                      as="a"
                      href="#facebook"
                      variant="lead"
                      color="blue"
                      textGradient
                    >
                      <i className="fab fa-facebook" />
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#twitter"
                      variant="lead"
                      color="light-blue"
                      textGradient
                    >
                      <i className="fab fa-twitter" />
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#instagram"
                      variant="lead"
                      color="purple"
                      textGradient
                    >
                      <i className="fab fa-instagram" />
                    </Typography>
                  </Tooltip>
                </CardFooter> */}
              </Card>
          )}
        </div>
      </div>
    );
  }
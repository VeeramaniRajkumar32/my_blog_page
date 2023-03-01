import React, { Fragment, useState } from "react";
import { ModalBody, About } from "tailgrids-react";
export default function AboutPage() {
	// [modalOpen, setModalOpen] = useState(false);
  return (
	<div className='about bg-fixed bg-cover bg-center flex flex-wrap items-center justify-between pb-5' id='about'>
		<h1 className="mt-4 flex mx-auto text-6xl font-bold text-dark sm:text-7xl">
                About Us
        </h1>
		<div className="container">

			<About 
			image3="/images/jsCub.jpeg"
			image1="https://i.ibb.co/gFb3ns6/image-1.jpg"
			image2=" https://i.ibb.co/rfHFq15/image-2.jpgs"
			// image3="https://i.ibb.co/9y7nYCD/image-3.jpgs"
			subtitle="Worked Us"
			title="Web Developer And Software Engineer"
			// description="It is a long established fact that a reader will be distracted by the readable content."
			// buttonText="Get Started"
			/>
			
		</div>

	</div>
  )
}

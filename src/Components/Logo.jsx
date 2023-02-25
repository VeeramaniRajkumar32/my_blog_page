import { Avatar,Typography } from "@material-tailwind/react";
 
export default function Logo() {
  return (
    <div className="flex gap-2">
      {/* <Avatar src="/images/veera.jpg" alt="avatar" /> */}
      <Avatar src="/images/veera.jpg" alt="avatar" variant="circular" />
      <Typography
					as="a"
					href="#"
					variant="small"
					className="mr-4 cursor-pointer py-1.5 text-2xl font-bold hover:text-white"
					>
					<span>
						Veeramani Rajkumar</span>
					</Typography>
    </div>
  );
}
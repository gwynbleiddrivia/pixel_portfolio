import Marquee from "react-marquee-slider";
import { NavLink } from 'react-router-dom'

const Header = () => {
        const items= ['Full-Stack Web Development (MERN)', 'Custom Web Development (MERN)', 'Data Analysis & Visualization ', 'Machine Learning/ Deep Learning Development','API Integration and Development','Database Management']
	return (
<div className="flex flex-col">
  <div className="flex justify-between align-items">

	{/*Profile Photo*/}
    <div className="relative w-28 h-28 m-auto">
      <img className="w-full h-full rounded-lg shadow-pixel grayscale absolute z-10" src="https://i.ibb.co/2gmD38q/ProPic.jpg" alt=""/>
      <div className="absolute top-5 left-5 rounded-lg bg-[#f2e0bc] z-0 w-full h-full"></div>
    </div>





	{/*Title*/}
    <div className="ml-4 text-[#245371] m-auto">
      <p className="text-3xl tektur-font text-end">Md Yasin Arafat Khondoker</p>
      <p className="text-xl tektur-font text-end">Full Stack Developer (MERN) |<br/> Machine Learning Researcher |</p>
      <p className="text-3xl text-end"></p>
    </div>

 	{/*Services*/}
			<div className="effect-logo rounded-lg m-auto" style={{ width: '500px'}}>
				<p className="text-start text-[#245371]">Services I offer:</p>
				<div className="border border-dashed border-[#245371] mx-auto">
	
				<Marquee velocity={20} minScale={0.7} resetAfterTries={200}>
					{items.map(item=>{
						return <div className="text-sm w-fit bg-[#f3b29c] border border-ghost border-8 p-2">
							{item}
						</div>
					})}
				</Marquee>



			</div>
		</div>

  </div>

	{/*Router Links*/}
		<div className="m-auto w-fit">
			<NavLink className={({isActive})=>isActive?"effect-after my-auto text-emerald-900 rounded-lg text-sm p-2":"effect-before text-sm p-2 rounded-lg my-auto"} to="/mytechstack">My Tech Stack</     NavLink>
			<NavLink className={({isActive})=>isActive?"effect-after my-auto text-emerald-900 rounded-lg text-sm p-2":"effect-before text-sm p-2 rounded-lg my-auto"} to="/projects">Projects</     NavLink>
			<NavLink className={({isActive})=>isActive?"effect-after my-auto text-emerald-900 rounded-lg text-sm p-2":"effect-before text-sm p-2 rounded-lg my-auto"} to="/publications">Publications</     NavLink>
			<NavLink className={({isActive})=>isActive?"effect-after my-auto text-emerald-900 rounded-lg text-sm p-2":"effect-before text-sm p-2 rounded-lg my-auto"} to="/problemsolving">Problem Solving</     NavLink>
			<NavLink className={({isActive})=>isActive?"effect-after my-auto text-emerald-900 rounded-lg text-sm p-2":"effect-before text-sm p-2 rounded-lg my-auto"} to="/contact">Contact</     NavLink>
			<NavLink className={({isActive})=>isActive?"effect-after my-auto text-emerald-900 rounded-lg text-sm p-2":"effect-before text-sm p-2 rounded-lg my-auto"} to="/">Download Resume</     NavLink>
		</div>


</div>



	);
};

export default Header;

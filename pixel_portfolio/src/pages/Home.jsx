import Marquee from "react-marquee-slider";

const Home = () => {
        const items= ['Full-Stack Web Development (MERN)', 'Custom Web Development (MERN)', 'Data Analysis & Visualization ', 'Machine Learning/ Deep Learning Development','API Integration and Development','Database Management']
	return (
<div className="">
  <div className="flex mx-auto justify-around">
    <div className="relative w-52 h-52">
      <img className="w-full h-full rounded-lg shadow-pixel grayscale absolute z-10" src="https://i.ibb.co/2gmD38q/ProPic.jpg" alt=""/>
      <div className="absolute top-5 left-5 rounded-lg bg-[#f2e0bc] z-0 w-full h-full"></div>
    </div>

    <div className="ml-4 text-[#245371]">
      <p className="text-7xl tektur-font text-end">Md Yasin Arafat Khondoker</p>
      <p className="text-3xl tektur-font text-end">Full Stack Developer (MERN) |<br/> Machine Learning Researcher |</p>
      <p className="text-3xl text-end"></p>
    </div>
  </div>
 
	<div className="effect-logo rounded-lg mx-auto mt-10" style={{ width: '1000px', height: '30px'}}>
		<p className="right-0">Services:</p>
		<div className="border border-dashed border-[#245371] mx-auto">
	
		<Marquee velocity={30} minScale={0.7} resetAfterTries={200}>
			{items.map(item=>{
				return <div className="text-sm w-fit bg-[#f3b29c] border border-ghost border-8 p-2">
					{item}
				</div>
			})}
		</Marquee>



		</div>
		</div>

 <p></p>

</div>



	);
};

export default Home;

import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-green-900 w-full">
      <div className="flex sm:flex-col items-center justify-between max-w-6xl mx-auto py-4">
        <div className="w-28">
          <img
            src="https://n.foxdsgn.com/twilo/wp-content/uploads/2020/10/Group-52-1.png"
            alt=""
          />
        </div>
        <div className="flex items-center gap-10 text-white md:hidden">
          <ul className="flex gap-10 items-center text-white font-bold tracking-wider">
            {["Home", "Pages", "Portfolio", "Blog", "Shop", "Contact"].map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
          <div>
            <button className="bg-orange-600 py-3 px-8 rounded text-white font-bold tracking-wider">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 md:px-6 max-w-6xl mx-auto py-4 items-center">
        <div className="text-white flex flex-col gap-y-6 md:order-2">
          <h1 className="font-bold text-7xl">Your website, reimagined</h1>
          <p>
            We’ve spent the last 5 years helping over 25,000 teams just like
            yourself create and sustain a successful online support.
          </p>
          <div className="flex gap-7 items-center">
          <button className="bg-orange-600 py-3 px-8 rounded text-white">
              Get Started
            </button>
            <button>Watch Video</button>
          </div>
        </div>
        <div className="md:order-1">
          <img
            src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/08/Group-2325-2.png"
            alt=""
          />
        </div>
      </div>
     
      <div className="grid grid-cols-5 md:grid-cols-1 gap-20 md:px-6 md:items-center max-w-5xl mx-auto pb-24 items-center">
        {
          [1,,3,4,5].map((e, i)=>{
            return(
              <img key={i} src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/04/Mask-group-1-1.png" alt="" />

            )
          })
        }
      </div>
    </div>
    
  );
};

export default Navbar;

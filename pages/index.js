// import Hero from "../components/Sections/Hero";
// import News from "../components/Sections/News";

export default function Home() {
  return (
    <>
      {/* <Hero />
   <News /> */}
      {/* SECTION 2 */}
      <div className="mt-10">
        <div className="max-w-5xl mx-auto py-4 items-center">
          <div className="grid grid-cols-2 gap-40 md:grid-cols-1 md:px-6">
            <div className="space-y-5">
              <h1>STRUCTURE</h1>
              <h2>Discover all our features</h2>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus temporibus
                autem.
              </p>
              <div className="grid grid-cols-2">
                {[1, 2, 3, 4].map((e, index) => {
                  return <p key={index}>Trends Tracking</p>;
                })}
              </div>
              <div>
                <p>All categories</p>
              </div>
            </div>

            <div>
              <img
                src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/08/Group-2335.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION THREE */}

      <div className="my-10">
        <div className="max-w-6xl mx-auto flex items-center gap-10 md:flex-col md:px-6">
          {[
            {
              title: "STRUCTURE",
              subtitle: "Discover all our features",
              description:
                " am libero tempore, cum soluta nobis est eligendi optiocumque nihil impedit quo minus id quod maxime placeat facerepossimu.",
                tag:"All categories"
            },
            {
              title: "STRUCTURE",
              subtitle: "Discover all our features",
              description:
                " am libero tempore, cum soluta nobis est eligendi optiocumque nihil impedit quo minus id quod maxime placeat facerepossimu.",
                tag:"All categories"
            },
            {
              title: "STRUCTURE",
              subtitle: "Discover all our features",
              description:
                " am libero tempore, cum soluta nobis est eligendi optiocumque nihil impedit quo minus id quod maxime placeat facerepossimu.",
                tag:"All categories"
            },
          ].map((e, i) => {
            return (
              <div
                key={i}
                className="bg-gray-100 border-b-2 border-b-orange-600 p-10"
              >
                <div className="space-y-5">
                  <h1 className="text-green-300 font-bold">{e.title}</h1>
                  <h2 className="font-bold text-sm">{e.subtitle}</h2>
                  <p>{e.description}</p>
                  <div className="text-orange-500">
                    <p>{e.tag}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SETION FOUR */}

      <div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-40 items-center">
          <div>
            <img
              src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/08/Group-2334.png"
              alt=""
            />
          </div>
          <div className="space-y-10">
            <p className="text-[#68b06e] font-bold tracking-widest">
              DATA ANALIZE
            </p>
            <h1 className="text-5xl font-extrabold leading-[57.6px]">
              Increase your <span className="text-[#ff8945]">performance</span>{" "}
            </h1>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus temporibus
              autem.
            </p>
            <div className="border-l-2 border-l-black pl-6">
              <p>
                &quot;It is really refreshing to work with this software which
                is truly helpful in the client&quot;s needs and
                preferences.&quot;
              </p>
              <div className="flex items-center gap-2 mt-8">
                <div className="w-16">
                  <img
                    src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/08/Group-2339.png"
                    alt=""
                  />
                </div>
                <div className="-space-y-2">
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm">Lead designer, Apple</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION FIVE */}
      <div className="bg-[#10393B]">
        <div className="max-w-6xl mx-auto grid grid-cols-6 gap-16 items-center py-32">
          <div className="col-span-2 space-y-10">
            <p className="text-white text-2xl font-bold">Features</p>
            {[1, 2, 3].map((e, i) => {
              return (
                <div key={i} className="flex">
                  <div className="w-40">
                    <img
                      src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/04/Group-29.png"
                      alt=""
                    />
                  </div>
                  <div className="text-white space-y-3">
                    <h1 className="font-bold text-xl">Integrations</h1>
                    <p className="font-extralight">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="">
            <p className="text-white text-2xl font-bold">Capabilities</p>
            <ul className="col-span-2">
              {[1, 2, 3, 4, 5, 6, 7].map((e, i) => {
                return (
                  <li key={i} className="flex text-white space-y-3">
                    Customer functions
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-white col-span-3">
            <h1 className="font-extrabold text-5xl leading-[57.6px] ">
              Get all the metrics
            </h1>
            <p className="leading-6 font-medium">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat
            </p>
            <img
              src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/08/Frame-2321-1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* SECTION PRICING */}
      <div className="bg-[#F8F9F9] mt-20">
        <div className="max-w-6xl mx-auto mt-20 py-20">
          <div className="text-center mb-10">
            <p className="text-[17px] font-bold leading-[21.25px] tacking-[2px] text-[#68b06e]">
              PRICING PLANS
            </p>
            <h1 className="text-5xl font-extrabold leading-[57.6px]">
              Choose the option that{" "}
              <span className="text-[#ff8945]">suit every team</span>
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {[1, 2, 3].map((e, i) => {
              return (
                <div key={i} className="bg-white p-10 space-y-8">
                  <p>Starter</p>
                  <h3>For small team just getting started.</h3>
                  <hr className="my-8" />
                  <h1>$50</h1>
                  <ul>
                    {[1, 2, 3, 4].map((e, i) => {
                      return <li key={i}>Email</li>;
                    })}
                  </ul>
                  <div className="inline-block">
                    <button className="bg-orange-600 py-3 px-8 rounded text-white font-bold tracking-wider">
                      Get Started
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION UPP */}
      <div>
        <div className="max-w-6xl mx-auto mt-20 py-20">
          <div className="text-center mb-10">
            <p className="text-[17px] font-bold leading-[21.25px] tacking-[2px] text-[#68b06e]">
              BLOG
            </p>
            <h1 className="text-5xl font-extrabold leading-[57.6px]">
              Learn new <span className="text-[#ff8945]">with us</span>
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[{
              image:"https://n.foxdsgn.com/twilo/wp-content/uploads/2021/03/shutterstock_1025348617_copy.jpg",
              title:"Software as a Service (SaaS): A cheat sheet",
              paragraph:"Cloud DB, Support"
            },
            {
              image:"https://n.foxdsgn.com/twilo/wp-content/uploads/2021/03/shutterstock_1025348617_copy.jpg",
              title:"Software as a Service (SaaS): A cheat sheet",
              paragraph:"Cloud DB, Support"
            },
            {
              image:"https://n.foxdsgn.com/twilo/wp-content/uploads/2021/03/shutterstock_1025348617_copy.jpg",
              title:"Software as a Service (SaaS): A cheat sheet",
              paragraph:"Cloud DB, Support"
            },].map((e, i) => {
              return (
                <div key={i}>
                  <div>
                    <img
                      src={e.image}
                      alt=""
                    />
                  </div>
                  <div className="mt-5">
                    <h1 className="text-2xl font-extrabold leading-[30px] text-[#0b363d]">
                      {e.title}
                    </h1>
                    <p className="text-sm font-medium leading-6 mt-2">
                      {e.paragraph}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION UP */}

      <div className="bg-[#10393B]">
        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-20 py-32 mt-20">
          <h1 className="text-5xl font-extrabold leading-[57.6px] text-center">
            <span className="text-[#ff8945]">Connect with us.</span>
            <span className="text-white">
              We&apos;re ready to talk about opportunities{" "}
            </span>
          </h1>
          <button className="bg-orange-600 py-3 px-8 rounded text-white font-bold tracking-wider">
            Get Started
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div>
        <div className="max-w-5xl mx-auto flex gap-40 py-20 ">
          <div className="">
            <div className="w-32 mb-7">
              <img
                src="https://n.foxdsgn.com/twilo/wp-content/uploads/2020/10/Group-113258899.png"
                alt=""
              />
            </div>
            <ul className="space-y-4">
              {[1, 2, 3, 4, 5].map((e, i) => {
                return <li key={i}>Instagram</li>;
              })}
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-20">
            <div>
              <p className="text-[#3c6c70] text-[20px] font-extrabold leading-[26px] mb-7">
                Homepages
              </p>
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5].map((e, i) => {
                  return <li key={i}>Main Home</li>;
                })}
              </ul>
            </div>
            <div>
              <p className="text-[#3c6c70] text-[20px] font-extrabold leading-[26px] mb-7">
                Homepages
              </p>
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5].map((e, i) => {
                  return <li key={i}>Main Home</li>;
                })}
              </ul>
            </div>
            <div>
              <p className="text-[#3c6c70] text-[20px] font-extrabold leading-[26px] mb-7">
                Homepages
              </p>
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5].map((e, i) => {
                  return <li key={i}>Main Home</li>;
                })}
              </ul>
            </div>
            <div>
              <p className="text-[#3c6c70] text-[20px] font-extrabold leading-[26px] mb-7">
                Homepages
              </p>
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5].map((e, i) => {
                  return <li key={i}>Main Home</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Button from "../ui/Button";
import NewsCard from "../ui/NewsCard";
import Camel from "../../public/assets/images/camel.webp"

const News = () => {
  return (
    <div className="bg-white text mt-12">
      <div className="max-w-104 mx-auto container px-6">
        <div className="flex flex-col gap-y-6">
          <div>
            <h1 className="text-[2rem] font-RobotoBold leading-[2.4rem] tracking-[0.0125rem]">
              News from TUM
            </h1>
            <p className="mt-6 text-xl tracking-[0.0125rem] leading-[2.0313rem]">
              News, research results and events: everything that enthuses people
              at our university.
            </p>
            <Button style="font-bold font-RobotoBold leading-[1.625rem] tracking-[0.0125rem] uppercase bg-[#3070b3] w-[6.3325rem] h-[3.625rem] text-white mt-6">
              SEE ALL
            </Button>
          </div>
          <div className="flex flex-col gap-y-8">
            <NewsCard
              image={Camel}
              koryo="Campus news"
              label="Season's greetings"
              title="Happy Holidays and a Happy New Year"
              paragrapg="We wish all students, staff, alumni and friends of our university a Merry Christmas and a Happy New Year. At the same time,..."
              date="12/23/2022"
              tag="Reading time 2min"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

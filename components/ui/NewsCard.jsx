import Image from "next/image";

const NewsCard = ({ image, label, title, paragraph, date, tag, koryo }) => {
  return (
    <div className="flex flex-col">
      <div className="relative z-0">
        <Image src={image} style={{ height: "auto" }} alt="" />
        <span className="absolute bottom-0 left-0 inline-block bg-[#e8ecef] py-0.5 px-2 text-sm z-10">
          {koryo}
        </span>
      </div>
      <div>
        <p>{label}</p>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
      <div className="flex items-center justify-between">
        <span>{date}</span>
        <span>{tag}</span>
      </div>
    </div>
  );
};

export default NewsCard;

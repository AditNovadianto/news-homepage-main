import retroPcs from "../images/image-retro-pcs.jpg";
import topLaptops from "../images/image-top-laptops.jpg";
import gamingGrowth from "../images/image-gaming-growth.jpg";

const values = [
  {
    image: retroPcs,
    number: "01",
    h3: "Reviving Retro PCs",
    p: "What happens when old PCs are given modern upgrades?",
  },
  {
    image: topLaptops,
    number: "02",
    h3: "Top 10 Laptops of 2022",
    p: "Our best picks for various needs and budgets.",
    margin: "mt-5 md:mt-0",
  },
  {
    image: gamingGrowth,
    number: "03",
    h3: "The Growth of Gaming",
    p: "How the pandemic has sparked fresh opportunities.",
    margin: "mt-5 md:mt-0",
  },
];

const Content = () => {
  return (
    <div className="mt-10 md:mt-36 md:flex items-start gap-10">
      {values.map((value, index) => (
        <div
          key={index}
          className={`${value.margin} flex items-center md:items-start gap-8`}
        >
          <img className="w-[100px]" src={value.image} alt={value.h3} />

          <div className="flex gap-3 flex-col">
            <p className="font-Inter text-3xl font-bold text-Grayish-blue">
              {value.number}
            </p>
            <h3 className="hover:text-Soft-red transition-all cursor-pointer font-Inter text-lg font-extrabold text-Very-dark-blue">
              {value.h3}
            </h3>
            <p className="font-Inter text-sm text-Dark-grayish-blue">
              {value.p}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;

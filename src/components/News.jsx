const values = [
  {
    h3: "Hydrogen VS Electric Cars",
    p: "Will hydrogen-fueled cars ever catch up to EVs?",
    border: "border-b-2 pb-5 border-Grayish-blue",
  },
  {
    h3: "The Downsides of AI Artistry",
    p: "What are the possible adverse effects of on-demand AI image generation?",
    border: "border-b-2 py-5 border-Grayish-blue",
  },
  {
    h3: "Is VC Funding Drying Up?",
    p: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    border: "pt-5",
  },
];

const News = () => {
  return (
    <div className="mt-14 bg-Very-dark-blue">
      <h2 className="font-Inter p-5 text-Soft-orange text-3xl font-semibold tracking-[1px]">
        New
      </h2>

      <div className="p-5">
        {values.map((value, index) => (
          <div key={index} className={value.border}>
            <h3 className="hover:text-Soft-orange transition-all cursor-pointer font-Inter text-Off-white text-lg font-semibold">
              {value.h3}
            </h3>
            <p className="font-Inter text-Grayish-blue text-[15px] mt-3">
              {value.p}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

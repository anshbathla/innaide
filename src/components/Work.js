import Image from "next/image";

const WorkCard = ({ num, title }) => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
      {/* <p className="leading-loose">
        Upon wearing INNAIDE, its smart system automatically identifies the specific areas of your pelvic floor that need support. By delivering gentle, therapeutic electrical impulses, it directly stimulates these muscles, encouraging strength and resilience without any conscious effort from you.
      </p> */}
    </div>
  );
};

const Work = () => {
  return (
    <section className="w-full bg-blue-500 text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div>
          <span className="uppercase block font-semibold text-sm tracking-widest text-center text-rose-200">
            WHATS THE FUNCTION
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold my-3 text-center ">
            Let&apos;s see how it works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
          <div className="relative">
            <WorkCard num="01" title="Precision Targeting" />
            <Image
              src={"/work/arrow.svg"}
              width={210}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.5rem] xl:block"
            />
            <p className="leading-loose">
        Upon wearing INNAIDE, its smart system automatically identifies the specific areas of your pelvic floor that need support. By delivering gentle, therapeutic electrical impulses, it directly stimulates these muscles, encouraging strength and resilience without any conscious effort from you.
      </p>
          </div>

          <div className="relative">
            <WorkCard
              num="02"
              title="Personalized Adaptation"
            />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
            <p className="leading-loose">
       INNAIDE is intuitive. It not only begins working on its own but also tailors the stimulation intensity and pattern according to your unique condition. This customization ensures the most effective and comfortable muscle strengthening experience, all without you lifting a finger. 
      </p>
          </div>
          <div className="relative">
            <WorkCard num="03" title="Automatic Strengthening" />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.7rem] xl:block"
            />
            <p className="leading-loose">
        Once you put on INNAIDE, it takes over the task of pelvic floor muscle training. There’s no need for manual exercises or reminders; INNAIDE’s automated sessions quietly work in the background, allowing you to carry on with your day, focus on work, or relax at home. 
 

      </p>
          </div>
          <div className="relative">
          <WorkCard num="04" title="Continuous Improvement" />
          <p className="leading-loose">
        With consistent use, INNAIDE progressively enhances your pelvic floor muscle strength, leading to noticeable improvements in SUI symptoms. This journey towards recovery requires no active input from you—just wear INNAIDE and feel your confidence and control restored over time. 
      </p>
      </div>
        </div>
        
      </div>
    </section>
  );
};

export default Work;

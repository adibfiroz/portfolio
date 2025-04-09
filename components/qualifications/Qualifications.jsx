import React, { Fragment } from "react";
import "./qualifications.scss";
import Card from "../card";

const Qualifications = () => {
  const qualifications = [
    {
      id: 1,
      name: "Bachlor's Degree",
      collage: "Electronics and Telecommunications",
      year: "2019",
      grade: "6.8",
      img: "img/degree.png",
    },
    {
      id: 2,
      name: "Diploma",
      collage: "Electronics and Telecommunications",
      year: "2016",
      grade: "73",
      img: "img/diploma.jpg",
    },
    {
      id: 3,
      name: "SSC standard 10th",
      collage: "At St. Xavier's High School",
      year: "2013",
      grade: "71",
      img: "img/ssc.jpg",
    },
  ];

  return (
    <div className="qualifications my-28" id="qualifications">
      <div className="container max-w-5xl">
        <h2 className="text-white text-3xl md:text-5xl">Qualifications</h2>

        <div className="mt-12 flex overflow-x-clip px-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className=" flex gap-8 pr-8 flex-none animate-move-left [animation-duration:20s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {qualifications.map((qualif) => (
                  <Card
                    key={qualif.id}
                    className="qcard max-w-sm hover:-rotate-3 transition duration-300"
                  >
                    <div className="qcardl">
                      <img
                        src={qualif.img}
                        alt={qualif.name}
                        className=" rounded-xl"
                      />
                    </div>
                    <div className="qcardr flex flex-col justify-between">
                      <div>
                        <div className="qtitle">{qualif.name}</div>
                        <div className="qstudy text-white/60">
                          {qualif.collage}
                        </div>
                      </div>
                      <div className="passYear">{qualif.year} passing Year</div>
                      <span className="percent">{qualif.grade}</span>
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;

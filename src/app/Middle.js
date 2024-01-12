import React from "react";
import Login from "./Login";

export default function Middle() {
  return (
    <div className="ml-5 mt-20 mx-4 md:mx-0">
      <h1 className="text-4xl mx:16 text-left md:text-6xl font-extralight text-blue-600 md:text-center md:mx-48">
        The simplest way to book and schedule meetings
      </h1>

      <Login/>

      <img src="/topbar.PNG" className="mt-32"/>
      <iframe
        src="https://tidycal.com/sumodavid/15-minute-meeting?embed&amp;showAvatar=true"
        id="tidycal-embed-xnzd9"
        className="tidycal-embed shadow-md"
        title="TidyCal"
        scrolling="no"
        style={{
          border: "none",
          width: "100%", 
          height: "779px",
          overflow: "hidden",
          minHeight: "500px",
          position: "relative",
          zIndex: 0,
        }}
      ></iframe>
      <div className="hidden md:flex space-x-4">
        <div className="w-[45%] h-[95%] bg-blue-600 rounded-full absolute top-[90%] -left-20 -z-10"></div>
        <div className="w-[30%] h-[60%] bg-blue-600 rounded-full absolute top-[95%] -right-20 -z-10"></div>
        <div className="w-[45%] h-[95%] bg-blue-600 rounded-full absolute top-[160%] -right-40 -z-10"></div>
      </div>
      <img src="arrow.svg" className="relative -top-4 -right-[70%] "></img>
      <h2 className="text-4xl text-blue-800 text-center">
        People love using TidyCal
      </h2>

      <div className="block mx-5  md:mx-0 md:flex gap-10 text-left mt-24">
        <div className="md:w-80 mb-20 bg-white rounded-2xl p-12">
          <h3 className="font-bold text-md">
            Simple to use, but powerful tool
          </h3>
          <p>
            "This is a simple tool to use, but it has all the functionality I
            need to get people to book a meeting with me. Personally, I use it
            for my guests to schedule their recording for my podcast and my
            YouTube channel, and it works quite well for me."
          </p>
          <img
            src="/rev.svg"
            width={100}
            height={20}
            className="mt-4"
            alt="Review Icon"
          />
          <strong>olmoaxayacatl</strong>
          <p>"AppSumo Review"</p>
        </div>

        <div className="md:w-80 mb-20  bg-white rounded-2xl p-12">
          <h3 className="font-bold text-md">
            This is the best calendar I've tried…
          </h3>
          <p>
            This is the best calendar I've tried and I've tried quite a few.
            It's easy to set up, easy to integrate with Zoom and has very useful
            video 'how tos'. It is fantastic value for money and no subscription
            which is just great.
          </p>
          <img src="/rev2.webp" width={100} h={20} className="mt-4" />
          <strong>info000</strong>
          <p>Trustpilot Review</p>
        </div>
        <div className="md:w-80 bg-white rounded-2xl p-12 relative -top-10">
          <h3 className="font-bold text-md">
            This is the best calendar I've tried…
          </h3>
          <p>
            TidyCal is the ultimate calendar scheduling app that will
            revolutionize the way you approach your day-to-day life. With its
            sleek and user-friendly interface, TidyCal allows you to
            effortlessly plan out your days, weeks, and months ahead with a
            simple well-planned scheduler. This has saved me some much time (and
            money) Thanks.
          </p>
          <img src="/rev.svg" width={100} h={40} className="mt-4" />
          <strong>Annette</strong>
          <p>AppSumo Review</p>
        </div>
      </div>
      <Login />
      <div className="flex md:justify-center mt-5 mb-20">
        <div className="flex h-10 justify-around md:w-80">
          <div className="flex">
            <img
              src="https://assets.tidycal.com/img/icon-forbidden-sm.svg/"
              width={20}
              height={20}
            />
            <p className="pt-2 ml-2 mr-4">No Credit Cards</p>
          </div>
          <div className="flex">
            <img
              src="https://assets.tidycal.com/img/icon-forbidden-sm.svg/"
              width={20}
              height={20}
            />
            <p className="pt-2 ml-2">Forever Free Plan</p>
          </div>
        </div>
      </div>
      <div className="block mx-28 md:mx-0 md:flex gap-10 justify-center">
        <div className="h-48 w-60 text-center">
          <img src="/rev2.webp" width={160} height={100} className="mx-10" />
          <p>Rated: 4.7 - Excelent</p>
          <img className="mx-12 mt-4" src="/trustpoint.svg" />
        </div>

        <div className="h-48 w-60 ml-14 ">
          <img src="/rev.svg" className="mt-4" width={160} height={200} />
          <img src="/appsumo.svg" className="mt-10 ml-5" />
        </div>

        <div className="h-48 w-60  ">
          <img src="/rank.svg" width={400} height={400} />
          <img src="/product.webp" width={150} height={80} className="mt-8 ml-8"  />
        </div>
      </div>
    </div>
  );
}

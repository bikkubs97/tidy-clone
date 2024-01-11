import React from "react";

export default function Table() {
  return (
    <>
      <div className="text-center bg-white">
        <img src="/curve.PNG" />
        <h1 className="text-4xl text-blue-800 mt-18 p-10">
          Why choose TidyCal?
        </h1>
        <p className="text-xl mb-10">
          Get extra features with the TidyCal lifetime deal.
          <br /> See how it stacks up:
        </p>
        <img
          src="https://assets.tidycal.com/img/homepage/b-01/illustra-sticker-red.webp"
          className="absolute top-[570%] right-64 w-48"
        />
        <img
          src="https://assets.tidycal.com/img/homepage/b-01/illustra-sticker-green.webp"
          className="absolute top-[580%] right-[38%] mr-6 w-48"
        />
        <div className="flex justify-center">


        <table className="w-full mx-52 ">
      <thead>
        <tr className="h-20 bg-background border-white border-8 ">
          <td> </td>
          <td className="text-2xl">
            <div className="flex justify-center">
              <img src="tidy.webp" width={25} height={10} />
              Tidy Call
            </div>
          </td>
          <td className="font-bold text-left text-xl text-gray-500">
            Market option #2
          </td>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-background h-14 border-white border-8 ">
          <td className="text-right">Unlimited Booking Types:</td>
          <td>
            <strong>FREE</strong>
          </td>
          <td className="text-left">From $96/year</td>
        </tr>
        <tr className="bg-background h-14 border-white border-8">
          <td className="text-right">Custom Availability:</td>
          <td>
            <strong>FREE</strong>
          </td>
          <td className="text-left">From $96/year</td>
        </tr>
        <tr className="bg-background h-14 border-white border-8">
          <td className="text-right">Add Your Colors:</td>
          <td>
            <strong>FREE</strong>
          </td>
          <td className="text-left"> From $144/year</td>
        </tr>
        <tr className="bg-background h-14 border-white border-8">
          <td className="text-right">Max Calendar Connections:</td>
          <td>
            <strong>10 connections, only $29 </strong>
          </td>
          <td className="text-left">6 connections, plans from $144/year</td>
        </tr>
        <tr className="bg-background h-14 border-white border-8">
          <td className="text-right">Custom Email Reminders:</td>
          <td>
            <strong>Only $29</strong>{" "}
          </td>
          <td className="text-left">From $144/year</td>
        </tr>
        <tr className="bg-background h-14 border-white border-8">
          <td className="text-right">Group Bookings:</td>
          <td>
            <strong>Only $29</strong>{" "}
          </td>
          <td className="text-left">From $96/year</td>
        </tr>
        <tr className="bg-background h-14 border-white border-8">
          <td className="text-right">Auto-Create Meeting URLs:</td>
          <td>
            <strong>Only $29</strong>{" "}
          </td>
          <td className="text-left">From $96/yearr</td>
        </tr>
        <tr className="bg-background h-14 border-white border-8">
          <td className="text-right">Confirmation Redirect:</td>
          <td>
            <strong>Only $29</strong>{" "}
          </td>
          <td className="text-left">From $144/year</td>
        </tr>
        <tr className="bg-background h-14 border-white border-8">
          <td className="text-right">Paid Bookings:</td>
          <td>
            <strong>Only $29</strong>{" "}
          </td>
          <td className="text-left">From $144/year</td>
        </tr>
        <tr className="bg-background h-14 border-white border-8">
          <td className="text-right">Integrations:</td>
          <td>
            <strong>Only $29</strong>{" "}
          </td>
          <td className="text-left">From $144/year</td>
        </tr>
      </tbody>
    </table>

        </div>
      </div>
      <div className="flex justify-center bg-white ">
        <img src="arrow.svg" />
      </div>
      <div className="flex justify-center bg-white">
        <div className="h-16 w-[20%]  bg-customRed hover:text-red-800 hover:bg-red-100 outline-none rounded-full mt-4 shadow-md border-4 border-white text-white">
          <p className="pt-3 text-xl text-center hover:cursor-pointer">
            Get extra features
          </p>
        </div>
        <p className="text-black m-5 p-4 text-xl">Or:</p>
        <div className="h-16 w-[20%] hover:text-blue-800 hover:bg-blue-200 outline-none rounded-full mt-4 shadow-md border-4 border-white">
          <p className="pt-3 text-xl text-center hover:cursor-pointer">
            Create free account
          </p>
        </div>
      </div>
      <footer className="text-center pt-36 pb-5 bg-white">
        <div className="flex justify-center">
          <p>
            BY - <strong>APPSUMO</strong>
          </p>
          |<p className="text-blue-800">ORIGINALS</p>
        </div>
        <p>
          Part of the AppSumo family. © 2024 Sumo Group, Inc. All rights
          reserved. Terms. Privacy.
        </p>
      </footer>
     <img src="/message.png" className="fixed bottom-5 right-4 w-14 h-14 hover:cursor-pointer"/>
    </>
  );
}

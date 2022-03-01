import axios from "axios";
import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";

const getLocalData = () => {
  let list = JSON.parse(localStorage.getItem("lists"));
  if (list) {
    if(list.length>3){
      list.shift()
    }
    if(list){
      list.unshift()
    }
    return list;
  } else {
    return [];
  }
};

const UrlShortener = () => {
  const [shortenLink, setShortenLink] = useState(getLocalData());
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState();
  const [loader, setLoader] = useState(false);
  const copy = () => {
    alert('copied')
  };
  const handleClick = () => {
    setLoader(true);
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
      .then((res) => {
        setShortenLink([...shortenLink, res.data.result.full_short_link]);
        console.log(res);
        setInputValue("");
        setLoader(false);
        getLocalData()
      })
      .catch((err) => {
        setError(err);
        setInputValue("");
        setLoader(false);
        setTimeout(() => {
          setError(null);
        }, 1000);
      });
  };
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(shortenLink));
  }, [shortenLink]);
  return (
    <div
      className="bg-white w-auto md:w-full overflow-x-hidden	
    overflow-y-hidden sm:overflow-x-hidden sm:overflow-y-hidden z-[-1]  "
    >
      <div className="flex place-content-between flex-col items-center md:items-center md:flex-row lg:flex-row xl:flex-row">
        <div className=" w-12/12 md:6/12 mt-20 md:mt-12 ml-10">
          <div className="">
            <h1 className=" text-3xl md:text-6xl text-center md:text-left  font-bold">
              Short links, big results
            </h1>
          </div>
          <div className="">
            <p className="text-2xl md:text-3xl  text-gray-500">
              A URL shortener built with powerful tools to help you grow and{" "}
              protect your brand.
            </p>
          </div>
        </div>
        <div className=" flex mt-20 md:mt-44 mr-12 hover:scale-90 ">
          <div className="">
            <img
              src="https://themaverickspirit.com/wp-content/uploads/2017/04/best-url-shorteners-shortening-tools-to-shorten-long-links-of-your-blog-themaverickspirit.png"
              className="rounded-full w-96 md:w-2/3"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-700 h-18 md:h-24  ml-10 mr-10 flex flex-col md:flex-row place-content-between md:place-content-evenly mt-32 rounded-lg">
        <div className="">
          <p className="text-white text-xl  md:text-2xl xl pt-10">
            Best URL{" "}
            <span className="text-orange-400 hover:underline">shorteners</span>{" "}
            to shorten long page URL's
          </p>
        </div>
        <div className="  font-bold p-5 text-2xl md:text-4xl cursor-pointer hover:scale-90">
          <h1 className=" font-mono text-black mt-8  text-center">
            Url <span className="text-orange-400 font-sans">Shortener</span>
          </h1>
        </div>
      </div>
      <div className=" bg-[#3a3054] bg-[url('https://url-shortner-app-react.netlify.app/assets/bg-boost-desktop.05593952.svg')] mt-12   bg-cover bg-no-repeat w-screen md:w-full justify-center h-auto md:h-auto">
        <div className="flex flex-col md:place-content-evenly md:flex-row">
          <div className="w-full p-10 flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="paste your link... "
              className="border-2 w-full  md:full h-16 rounded-lg text-xl md:text-2xl text-center outline-none"
              name="url"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
             <button
              onClick={handleClick}
              className="border-2 bg-red-700 rounded-lg w-44 text-white h-16 text-xl md:text-2xl m-auto mt-12 md:mt-0 md:ml-10 hover:bg-red-500 font-bold"
            >
              {loader ? "loading..." : "shorten"}
            </button>
          </div>
        </div>

        {error && (
          <div className="flex justify-center items-center bg-red-300 md:ml-32  md:mr-12 h-12 border-0 outline-none rounded-sm mb-12">
            <p className="font-bold text-white flex items-center justify-center">
              invalid Url
            </p>
          </div>
        )}
        {shortenLink.map((value,index) => {
          return (
            <div key={index} >
             
              <CopyToClipboard text={value} onCopy={copy}>
              <p className="border-2 bg-white text-black cursor-pointer h-16 rounded-lg text-center p-5 text-base md:text-xl mx-16 my-4" >
                {value}
              </p>
              </CopyToClipboard>
            </div>
          );
        })}
      </div>
      <div>
        <div>
          <div className="mt-10 ">
            <h1 className="font-bold  text-2xl md:text-4xl  text-center ">
              The link shortener that has your brand's back
            </h1>
          </div>
          <div className="mt-4">
            <p className="text-center text-gray-500 text-xl md:text-2xl">
              Your brand wasn'St built to be hidden. Help it stand out with
              branded links that drive more clicks.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center md:flex-row place-content-between md:place-content-evenly">
          <div className="flex flex-col">
            <div className="mt-10 flex justify-center items-center">
              <img
                src="https://docrdsfx76ssb.cloudfront.net/static/1644600763/pages/wp-content/uploads/2019/08/Homepage-Branded-Links-Illustration-1.png"
                className="w-96 flex justify-center items-center"
                alt="url"
              />
            </div>
            <div className="mt-3">
              <h1 className="font-bold text-xl md:text-2xl">Inspire trust</h1>
            </div>
            <div>
              <p className="text-gray-500 text-base md:text-lg">
                With more clicks comes increased brand <br /> recognition and
                consumer trust in your <br /> communications—which in turn
                inspires even <br /> more engagement with your links. (It’s a{" "}
                <br /> wonderful cycle.)
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mt-10 flex justify-center items-center">
              <img
                src="https://docrdsfx76ssb.cloudfront.net/static/1644600763/pages/wp-content/uploads/2019/08/Homepage-Branded-Links-Illustration-2.png"
                className="w-96"
                alt="url"
              />
            </div>
            <div className="mt-3">
              <h1 className="font-bold text-xl md:text-2xl">Boost results</h1>
            </div>
            <div>
              <p className="text-gray-500 text-base md:text-lg">
                On top of better deliverability and click- <br /> through, rich
                link-level data gives you crucial <br /> insight into your link
                engagement so your team <br /> can make smarter decisions around
                its content <br /> and communications.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mt-10 flex justify-center items-center">
              <img
                src="https://docrdsfx76ssb.cloudfront.net/static/1644600763/pages/wp-content/uploads/2021/06/Site_Check-you.png"
                className="w-96"
                alt="url"
              />
            </div>
            <div className="mt-3">
              <h1 className="font-bold text-xl md:text-2xl">Gain control</h1>
            </div>
            <div className="">
              <p className="text-gray-500 text-base  md:text-lg">
                Take credit for your content and learn more <br /> about how
                it’s consumed by enabling auto- <br /> branding—a feature that
                ensures your brand <br /> remains in any link someone shortens
                pointing <br /> to your website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlShortener;

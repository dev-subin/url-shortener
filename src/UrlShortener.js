import React from "react";

const UrlShortener = () => {
  return (
    <div className="bg-white  ">
      <div className="flex place-content-evenly flex-col items-center md:items-center md:flex-row">
        <div className=" w-8/12 mt-72 ml-10">
          <div className="">
            <h1 className=" text-6xl  font-bold">Short links, big results</h1>
          </div>
          <div className="mt-5">
            <p className="text-3xl text-gray-500">
              A URL shortener built with powerful tools to help you grow and{" "}
              <br /> protect your brand.
            </p>
          </div>
        </div>
        <div className=" flex mt-60 mr-12 hover:scale-90 md:items-center">
          <div>
            <img
              src="https://themaverickspirit.com/wp-content/uploads/2017/04/best-url-shorteners-shortening-tools-to-shorten-long-links-of-your-blog-themaverickspirit.png"
              className="rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-700 h-36 ml-10 mr-10 flex place-content-evenly mt-32 rounded-lg">
        <div className=" ">
          <p className="text-white text-2xl pt-12">
            Best URL{" "}
            <span className="text-orange-400 hover:underline">shorteners</span>{" "}
            to shorten long page URL's
          </p>
        </div>
        <div className="  font-bold p-5 text-4xl cursor-pointer hover:scale-90">
          <h1 className="font-mono text-black mt-10 animate-bounce">
            Url <span className="text-orange-400 font-sans">Shortener</span>
          </h1>
        </div>
      </div>
      <div className="bg-[#0b1736] mt-12 flex ">
        <div className="w-4/6 p-10  ml-44 overflow-hidden">
          <input
            type="text"
            placeholder="paste your link... "
            className="border-2 w-8 p md:w-full md:overflow-hidden scroll-m-0 h-16 rounded-lg text-2xl text-center outline-none"
          />
        </div>
        <div className="p-10  ">
          <button className="border-2 bg-red-700 rounded-lg w-44 text-white h-16 text-2xl hover:bg-red-500 font-bold mr-96">
            Shortern
          </button>
        </div>
      </div>
      <div>
        <div className="mt-16">
          <hr className="border-2 w-3/4 border-red-600 ml-56" />
          <div className="text-center">
            <p>scroll to learn more</p>
          </div>
          <div className="text-center">
            <i class="fa-light fa-arrow-down"></i>
          </div>
          <div>
            <div className="mt-10 ">
              <h1 className="font-bold text-4xl  text-center ">
                The link shortener that has your brand's back
              </h1>
            </div>
            <div className="mt-4">
              <p className="text-center text-gray-500 text-2xl">
                Your brand wasn'St built to be hidden. Help it stand out with
                branded links that drive more clicks.
              </p>
            </div>
          </div>
          <div className="flex place-content-evenly">
            <div className="flex flex-col">
              <div className="mt-10">
                <img
                  src="https://docrdsfx76ssb.cloudfront.net/static/1644600763/pages/wp-content/uploads/2019/08/Homepage-Branded-Links-Illustration-1.png"
                  className="w-96"
                  alt="url"
                />
              </div>
              <div className="mt-3">
                <h1 className="font-bold text-2xl">Inspire trust</h1>
              </div>
              <div>
                <p className="text-gray-500 text-lg">
                  With more clicks comes increased brand <br /> recognition and
                  consumer trust in your <br /> communications—which in turn
                  inspires even <br /> more engagement with your links. (It’s a{" "}
                  <br /> wonderful cycle.)
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mt-10">
                <img
                  src="https://docrdsfx76ssb.cloudfront.net/static/1644600763/pages/wp-content/uploads/2019/08/Homepage-Branded-Links-Illustration-2.png"
                  className="w-96"
                  alt="url"
                />
              </div>
              <div className="mt-3">
                <h1 className="font-bold text-2xl">Boost results</h1>
              </div>
              <div>
                <p className="text-gray-500 text-lg">
                  On top of better deliverability and click- <br /> through,
                  rich link-level data gives you crucial <br /> insight into
                  your link engagement so your team <br /> can make smarter
                  decisions around its content <br /> and communications.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mt-10">
                <img
                  src="https://docrdsfx76ssb.cloudfront.net/static/1644600763/pages/wp-content/uploads/2021/06/Site_Check-you.png"
                  className="w-96"
                  alt="url"
                />
              </div>
              <div className="mt-3">
                <h1 className="font-bold text-2xl">Gain control</h1>
              </div>
              <div className="">
                <p className="text-gray-500 text-lg">
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
    </div>
  );
};

export default UrlShortener;

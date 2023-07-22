"use client";
import { useEffect, useState } from "react";

function Gallery() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const [images, setImage] = useState<string[]>([
    "https://www.brides.com/thmb/n6vfdnpG-0lctwOJitGd5tNKWp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-740658be0504413a8a77d501ba133df6.jpg",
    "https://www.brides.com/thmb/n6vfdnpG-0lctwOJitGd5tNKWp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-740658be0504413a8a77d501ba133df6.jpg",
    "https://www.brides.com/thmb/n6vfdnpG-0lctwOJitGd5tNKWp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-740658be0504413a8a77d501ba133df6.jpg",
    "https://www.brides.com/thmb/n6vfdnpG-0lctwOJitGd5tNKWp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-740658be0504413a8a77d501ba133df6.jpg",
    "https://www.brides.com/thmb/n6vfdnpG-0lctwOJitGd5tNKWp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-740658be0504413a8a77d501ba133df6.jpg",
    "https://www.brides.com/thmb/n6vfdnpG-0lctwOJitGd5tNKWp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-740658be0504413a8a77d501ba133df6.jpg",
    "https://www.brides.com/thmb/n6vfdnpG-0lctwOJitGd5tNKWp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-740658be0504413a8a77d501ba133df6.jpg",
    "https://www.brides.com/thmb/n6vfdnpG-0lctwOJitGd5tNKWp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-740658be0504413a8a77d501ba133df6.jpg",
    "https://www.brides.com/thmb/n6vfdnpG-0lctwOJitGd5tNKWp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-740658be0504413a8a77d501ba133df6.jpg",
    "https://www.brides.com/thmb/n6vfdnpG-0lctwOJitGd5tNKWp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-740658be0504413a8a77d501ba133df6.jpg",
  ]);

  useEffect(() => {
    const getImage = async () => {
      let URL = "";
      if (tabIndex === 0) {
        URL = "S3 link";
      } else {
        URL = "Drive link";
      }
      const res = await fetch(URL);

      const data = await res.json();

      if (data?.status === 200) {
        setImage(data.images);
      }
    };

    getImage();
  }, [tabIndex]);

  return (
    <main className="bg-neutral-900 min-h-screen text-white w-full flex flex-col items-center p-8">
      <div className="flex-col flex w-3/4 ">
        {/* Tabbar */}
        <div className="flex flex-row border-b-2 ">
          {["S3", "Google Drive"].map((item: string, index: number) => (
            <div
            key={index}
              onClick={() => setTabIndex(index)}
              className={`flex-1 py-2 text-center cursor-pointer font-bold ${
                index === tabIndex && "bg-white text-neutral-900 rounded-t-full"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        {/* TabViews */}

        <div className="pt-6">
          {
            // Show image here
            <div className="grid grid-cols-3 gap-8 w-full mx-auto ">
              {images.map((image: string) => (
                <img
                  key={image}
                  src={image}
                  className="aspect-square w-72 border-4 border-neutral-700"
                />
              ))}
            </div>
          }
        </div>
      </div>
    </main>
  );
}

export default Gallery;

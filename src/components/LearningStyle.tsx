import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function LearningStyle() {
  return (
    <div className="h-auto bg-slate-200">
      <div className="flex flex-col justify-center items-center bg-slate-200 h-auto w-screen space-y-3 pb-20">
        <h2 className="text-3xl font-bold text-center p-12">
          Learning Style Tailored for You
        </h2>
      </div>

      <div className="relative w-full bg-slate-200 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        <div className="flex gap-4 px-4 py-6 md:justify-center">
          <div className="snap-center shrink-0 pl-10 hover:scale-105 transition-transform duration-100 ease-in-out">
            <div className="w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/home.png"
                alt="Individual Learning"
                width={1000}
                height={1000}
                className="h-40 w-full rounded-t-lg object-cover"
              />
              <div className="p-4 space-y-6 pb-5">
                <h4 className="text-lg font-semibold">Individual Learning</h4>
                <Button className="w-1/2 bg-blue-900 hover:bg-blue-700 active:bg-blue-600">
                  Get started
                </Button>
              </div>
            </div>
          </div>
          <div className="snap-center shrink-0 hover:scale-105 transition-transform duration-100 ease-in-out">
            <div className="w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/home.png"
                alt="Group Learning"
                width={1000}
                height={1000}
                className="h-40 w-full rounded-t-lg object-cover"
              />
              <div className="p-4 space-y-6 pb-5">
                <h4 className="text-lg font-semibold">Group Learning</h4>
                <Button className="w-1/2 bg-blue-900 hover:bg-blue-700 active:bg-blue-600">
                  Get started
                </Button>
              </div>
            </div>
          </div>
          <div className="snap-center shrink-0 pr-10 hover:scale-105 transition-transform duration-100 ease-in-out">
            <div className="w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/home.png"
                alt="Business English"
                width={1000}
                height={1000}
                className="h-40 w-full rounded-t-lg object-cover"
              />
              <div className="p-4 space-y-6 pb-5">
                <h4 className="text-lg font-semibold">Business English</h4>
                <Button className="w-1/2 bg-blue-900 hover:bg-blue-700 active:bg-blue-600">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningStyle;

{
  /* 
//         <div className="flex justify-start md:justify-center items-center h-auto w-auto bg-slate-200 gap-4 overflow-x-scroll px-10 lg:overflow-hidden">
//           <div className="max-w-64 min-h-64 bg-white rounded-lg hover:shadow-inner shrink-0">
//             <Image
//               src="/home.png"
//               alt="learn"
//               width={1000}
//               height={1000}
//               className="h-48 w-64 rounded-t-lg hover:shadow-lg"
//             />
//             <div className="space-y-3 p-3">
//               <h4 className="text-lg font-thin">Individual Learning</h4>
//               <Button className="bg-blue-900 hover:bg-blue-700 active:bg-blue-600 px-8 whitespace-nowrap">
//                 Get started
//               </Button>
//             </div>
//           </div>
//           <div className="max-w-64 min-h-64 bg-white rounded-lg hover:shadow-md shrink-0">
//             <Image
//               src="/home.png"
//               alt="learn"
//               width={1000}
//               height={1000}
//               className="h-48 w-64 rounded-t-lg hover:shadow-lg"
//             />
//             <div className="space-y-3 p-3">
//               <h4 className="text-lg font-thin">Group Learning</h4>
//               <Button className="bg-blue-900 hover:bg-blue-700 active:bg-blue-600 px-8 whitespace-nowrap ">
//                 Get started
//               </Button>
//             </div>
//           </div>
//           <div className="max-w-64 min-h-64 bg-white rounded-lg hover:shadow-md shrink-0">
//             <Image
//               src="/home.png"
//               alt="learn"
//               width={1000}
//               height={1000}
//               className="h-48 w-64 rounded-t-lg hover:shadow-lg"
//             />
//             <div className="space-y-3 p-3">
//               <h4 className="text-lg font-thin">Business English</h4>
//               <div>
//                 <Button className="bg-blue-900 hover:bg-blue-700 active:bg-blue-600 px-8 whitespace-nowrap">
//                   Get started
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// } */
}

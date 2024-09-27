import React from "react";

function CulturalDiversity() {
  return (
    <div className="bg-slate-100 min-h-96 w-full py-10 px-5">
      {/* Keep the heading at the top */}
      <h2 className="text-center text-3xl font-bold mb-8 p-6">
        Immerse Yourself in Cultural Diversity
      </h2>

      {/* Arrange the divs side by side */}
      <div className="flex flex-wrap space-y-3 items-stretch justify-center space-x-4 min-h-20">
        {/* First div */}
        <div className="max-w-xs bg-white shadow p-4 rounded-md hover:bg-slate-100 hover:shadow-slate-500">
          <h3 className="font-semibold text-xl mb-2">Cultural Insight</h3>
          <p>
            Learn about the customs, traditions, and history of English and
            Spanish-speaking countries through engaging videos, documents, and
            interactive activities.
          </p>
        </div>

        {/* Second div */}
        <div className="max-w-xs bg-white shadow p-4 rounded-md hover:bg-slate-100 hover:shadow-slate-500">
          <h3 className="font-semibold text-xl mb-2">Global Connections</h3>
          <p>
            Connect with a diverse community of learners and native speakers
            from around the world through interactive forums, language exchange
            programs, and virtual events.
          </p>
        </div>

        {/* Third div */}
        <div className="max-w-xs bg-white shadow p-4 rounded-md hover:bg-slate-100 hover:shadow-slate-500">
          <h3 className="font-semibold text-xl mb-2">Expand Your Horizons</h3>
          <p>
            Develop cultural sensitivity and understanding, broaden your
            perspectives, and enhance your global communication skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CulturalDiversity;

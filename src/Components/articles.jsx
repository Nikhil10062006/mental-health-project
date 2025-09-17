import React, { useState } from "react";
import { Newspaper } from "lucide-react";
import articles from "../assets/articles/articles.json";

const ArticlesSection = () => {
  const defaultCount = 4; // show first 4
  const [visibleCount, setVisibleCount] = useState(defaultCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4); // show 4 more
  };

  const handleShowLess = () => {
    setVisibleCount(defaultCount);
  };

  return (
    <section className="py-10 px-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Newspaper className="w-6 h-6 text-indigo-600" />
        📰 Articles
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {articles.slice(0, visibleCount).map((article, i) => (
          <a
            key={i}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white hover:bg-indigo-50"
          >
            <h4 className="text-lg font-medium text-indigo-700 hover:underline">
              {article.title}
            </h4>
          </a>
        ))}
      </div>

      <div className="mt-6">
        {visibleCount < articles.length ? (
          <button
            onClick={handleShowMore}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default ArticlesSection;

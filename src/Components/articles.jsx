import React from "react";

const articles = [
  { title: "Managing Exam Stress", link: "#" },
  { title: "The Importance of Sleep", link: "#" },
  { title: "How to Support a Friend", link: "#" }
];

const ArticlesSection = () => {
  return (
    <section className="py-10 px-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">📰 Articles</h3>
      <ul className="space-y-2">
        {articles.map((article, i) => (
          <li key={i}>
            <a href={article.link} className="text-indigo-600 hover:underline">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticlesSection;

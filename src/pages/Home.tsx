import { Link } from "react-router-dom";

const personalInfo = {
  name: "张三",
  intro: "全栈开发者，热爱开源与技术分享"
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* 导航栏 */}
      <nav className="w-full py-4 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-medium hover:text-gray-600">主页</Link>
          <div className="flex space-x-6">
            <Link to="/resume" className="hover:text-gray-600">简历</Link>
            <Link to="/blog" className="hover:text-gray-600">博客</Link>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{personalInfo.name}</h1>
          <p className="text-xl md:text-2xl text-gray-700">{personalInfo.intro}</p>
        </div>
      </main>
    </div>
  );
}
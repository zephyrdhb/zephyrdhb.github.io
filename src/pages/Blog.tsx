import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'prism-react-renderer';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

// 模拟数据
const mockArticles = [
  {
    id: '1',
    title: 'React 18新特性解析',
    summary: '深入探讨React 18带来的并发渲染等新特性',
    date: '2024-05-15',
    tags: ['React', '前端'],
    content: `# React 18新特性解析

React 18带来了许多令人兴奋的新特性，主要包括：

## 并发渲染(Concurrent Rendering)
\`\`\`javascript
import { startTransition } from 'react';

function App() {
  const [input, setInput] = useState('');
  
  const handleChange = (e) => {
    startTransition(() => {
      setInput(e.target.value);
    });
  };
  
  return <input value={input} onChange={handleChange} />;
}
\`\`\`

## 自动批处理
React 18默认启用自动批处理，减少不必要的渲染。`
  },
  {
    id: '2',
    title: 'TypeScript最佳实践',
    summary: '分享TypeScript在大型项目中的使用经验',
    date: '2024-04-20',
    tags: ['TypeScript', '前端'],
    content: `# TypeScript最佳实践

## 类型定义
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): Promise<User> {
  return fetch(\`/api/users/\${id}\`).then(res => res.json());
}
\`\`\`

## 泛型使用
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\``
  },
  {
    id: '3',
    title: 'Tailwind CSS实战技巧',
    summary: '分享Tailwind CSS在项目中的高效使用方法',
    date: '2024-03-10',
    tags: ['CSS', '前端'],
    content: `# Tailwind CSS实战技巧

## 响应式设计
\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
  响应式文本
</div>
\`\`\`

## 自定义配置
在\`tailwind.config.js\`中扩展配置：
\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#3b82f6',
      }
    }
  }
}
\`\`\``
  }
];

export default function Blog() {
  const [articles] = useState(mockArticles);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  // 获取所有标签
  const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));

  // 过滤文章
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === '' || article.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  // 高亮代码块
  useEffect(() => {
    if (selectedArticle) {
      document.querySelectorAll('pre code').forEach(block => {
        hljs.highlightBlock(block);
      });
    }
  }, [selectedArticle]);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* 导航栏 - 与主页一致 */}
      <nav className="w-full py-4 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-medium hover:text-gray-600">主页</Link>
          <div className="flex space-x-6">
            <Link to="/resume" className="hover:text-gray-600">简历</Link>
            <Link to="/blog" className="hover:text-gray-600">博客</Link>
          </div>
        </div>
      </nav>

      {/* 博客内容 */}
      <main className="max-w-6xl mx-auto py-8 px-6 flex-grow">
        {selectedArticle ? (
          // 文章详情视图
          <div className="space-y-6">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="text-blue-600 hover:text-blue-800"
            >
              ← 返回列表
            </button>
            <h1 className="text-3xl font-bold">{selectedArticle.title}</h1>
            <div className="text-gray-500">{selectedArticle.date}</div>
            <div className="flex space-x-2 mb-6">
              {selectedArticle.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="prose max-w-none">
              <ReactMarkdown
                children={selectedArticle.content}
                components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        language={match[1]}
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  }
                }}
              />
            </div>
          </div>
        ) : (
          // 文章列表视图
          <div className="flex flex-col md:flex-row gap-8">
            {/* 左侧文章列表 */}
            <div className="md:w-2/3">
              {/* 搜索框 */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="搜索文章..."
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* 文章列表 */}
              <div className="space-y-8">
                {filteredArticles.map(article => (
                  <article 
                    key={article.id} 
                    className="border-b border-gray-200 pb-6 cursor-pointer hover:bg-gray-50 p-4 rounded-lg"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                    <p className="text-gray-500 mb-2">{article.date}</p>
                    <p className="text-gray-700 mb-3">{article.summary}</p>
                    <div className="flex space-x-2">
                      {article.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* 右侧标签云 */}
            <div className="md:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
                <h3 className="text-xl font-bold mb-4">分类标签</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTag('')}
                    className={`px-3 py-1 rounded-full ${selectedTag === '' ? 'bg-black text-white' : 'bg-gray-200'}`}
                  >
                    全部
                  </button>
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3 py-1 rounded-full ${selectedTag === tag ? 'bg-black text-white' : 'bg-gray-200'}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
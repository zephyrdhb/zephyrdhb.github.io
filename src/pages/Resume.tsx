import { Link } from "react-router-dom";

const resumeData = {
  bio: "全栈开发者，5年工作经验，专注于Web开发和用户体验优化。热爱学习新技术，喜欢开源社区。",
  education: [
    {
      institution: "清华大学",
      degree: "计算机科学与技术 硕士",
      period: "2016-2019"
    },
    {
      institution: "北京大学",
      degree: "软件工程 学士",
      period: "2012-2016"
    }
  ],
  workExperience: [
    {
      company: "字节跳动",
      position: "高级前端工程师",
      period: "2020-至今",
      description: "负责核心产品的前端架构设计和开发，带领团队完成多个重要项目。"
    },
    {
      company: "腾讯",
      position: "前端开发工程师",
      period: "2019-2020",
      description: "参与微信小程序开发，优化用户体验和性能。"
    }
  ],
  skills: [
    {
      category: "前端",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "后端",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
    }
  ],
  projects: [
    {
      name: "个人博客系统",
      description: "基于React和Markdown的全功能博客系统",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "电商平台",
      description: "全栈电商平台开发",
      technologies: ["Next.js", "Node.js", "MongoDB"]
    }
  ],
  certificates: [
    {
      name: "AWS认证解决方案架构师",
      issuer: "Amazon Web Services",
      date: "2021"
    },
    {
      name: "Google认证专业开发者",
      issuer: "Google",
      date: "2020"
    }
  ],
  portfolio: [
    {
      title: "博客系统截图",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=blog%20system%20screenshot&sign=0eece8c16ff1ccf0ae38d0acf5a2ddcf",
      description: "响应式设计的个人博客系统"
    },
    {
      title: "电商平台界面",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=e-commerce%20platform%20interface&sign=1e3e41485da0a9d1bcf1e63af150d377",
      description: "现代化的电商平台用户界面"
    }
  ],
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com",
      icon: "fa-brands fa-github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      icon: "fa-brands fa-linkedin"
    }
  ]
};

export default function Resume() {
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

      {/* 简历内容 */}
      <main className="max-w-4xl mx-auto py-8 px-6">
        {/* 个人简介 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">个人简介</h2>
          <p className="text-lg">{resumeData.bio}</p>
        </section>

        {/* 教育背景 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">教育背景</h2>
          <div className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-black pl-4">
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
                <p className="text-gray-700">{edu.degree}</p>
                <p className="text-gray-500">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 工作经历 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">工作经历</h2>
          <div className="space-y-8">
            {resumeData.workExperience.map((work, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">{work.company}</h3>
                <div className="flex justify-between text-gray-700">
                  <p>{work.position}</p>
                  <p>{work.period}</p>
                </div>
                <p className="mt-2">{work.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 技能列表 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">技能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-2">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 项目经验 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">项目经验</h2>
          <div className="space-y-6">
            {resumeData.projects.map((project, index) => (
              <div key={index} className="border-l-2 border-black pl-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-700">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 证书 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">证书</h2>
          <div className="space-y-4">
            {resumeData.certificates.map((cert, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">{cert.name}</h3>
                <div className="flex justify-between text-gray-700">
                  <p>{cert.issuer}</p>
                  <p>{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 作品集 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">作品集</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.portfolio.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 社交链接 */}
        <section>
          <h2 className="text-3xl font-bold mb-4">联系我</h2>
          <div className="flex space-x-4">
            {resumeData.socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-600"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
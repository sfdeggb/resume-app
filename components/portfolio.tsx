'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Home, FolderKanban, User, Phone, BookOpen, MapPin, Calendar, ExternalLink, Code, ArrowRight, Mail, Building, Cpu, Database, Brain, Eye, Server, PenTool, Target, Sparkles } from 'lucide-react'

export function Portfolio() {
  const [showContact, setShowContact] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  const homeRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const blogRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const educationRef = useRef<HTMLElement>(null) // Added educationRef
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitStatus, setSubmitStatus] = useState('')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitStatus('提交中...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('提交成功！')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('提交失败，请稍后重试。')
      }
    } catch (error) {
      setSubmitStatus('发生错误，请稍后重试。')
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLElement>, callback?: () => void) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    if (callback) {
      setTimeout(callback, 100) // 给一个小延迟，确保滚动已经开始
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false })
  }

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }
    return date.toLocaleDateString('zh-CN', options)
  }

  const projects = [
    { name: "RL_Like_o1", description: "Openai o1强化学习技术复现", link: "https://github.com/sfdeggb/RL_Like_o1", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-CAow1FKHyNjsiov3vQf3SuwixNveY1.jpg" },
    { name: "AI_Renamer_Enginner", description: "AI重命名工具", link: "https://github.com/sfdeggb/AI_Renamer_Enginner", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-P7v8n3ezCAPDRO7UDg3lHwRU0vWe1p.jpg" },
    { name: "Emind", description: "音乐生成与创作Agent", link: "https://github.com/sfdeggb/Emind", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Tu5fPxBGgUqAHnBZzRoVS9N6UQaz17.jpg" },
    { name: "JIAN-Copilot", description: "AI技术问答系统", link: "https://github.com/sfdeggb/JIAN-Copilot", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-6qK9yaJT4WhmfvRERHa2USGGo6JJbf.jpg" },
    { name: "LLM-Roadmap", description: "大语言模型学习路线图", link: "https://github.com/sfdeggb/LLM-Roadmap", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-mtbyEOWSzxQHALYIdTJuPupit8kpnr.jpg" },
    { name: "Face-Version", description: "情感分析与人脸识别系统", link: "https://github.com/sfdeggb/Face-Version", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-sLr3FGnrS41wuGSl84tIHVVMiFJX9r.jpg" }
  ]

  const skills = [
    { name: "机器学习", icon: Brain, color: "text-green-400" },
    { name: "深度学习", icon: Cpu, color: "text-blue-400" },
    { name: "自然语言处理", icon: PenTool, color: "text-yellow-400" },
    { name: "计算机视觉", icon: Eye, color: "text-purple-400" },
    { name: "强化学习", icon: Cpu, color: "text-red-400" },
    { name: "大规模AI系统", icon: Server, color: "text-indigo-400" },
    { name: "python后端", icon: Database, color: "text-pink-400" },
    { name: "推荐系统", icon: Target, color: "text-orange-400" },
    { name: "生成式人工智能AIGC", icon: Sparkles, color: "text-purple-400" },
  ]

  const tools = [
    { name: "VSCode", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vscode-7OZL9DH7f2xsibZFRdmSaHyWTPkRMg.png" },
    { name: "Git", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-MZ7O25a2h1sh64vaVwQsnyp4grWUgd.jpg" },
    { name: "Cursor", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cursor-xXihktpGHnZZTvY9WRzwN3Gv7dwQbx.jpg" },
    { name: "Postman", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/postman-eyBLuGYhCBloDfYkNucjvHL3kjyU54.png" },
    { name: "Typora", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/typora-yrcsfGeHss4d9R850fLFQau9bCGMOq.png" }
  ]

  const partners = [
    { name: "成都文武信息技术有限责任公司", link:"https://ww-it.cn/", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%96%87%E6%AD%A6%E4%BF%A1%E6%81%AF-bqsFtw8P6N2sfgYycHC5VXp6OWQzra.png", aspectRatio: "4/1" },
    { name: "成都移动互联网协会", link:"https://www.isc.org.cn/", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%92%E8%81%94%E7%BD%91%E5%8D%8F%E4%BC%9A-Ej6LdzNgzkf5gmmJEeCFq6LFtwbRGF.png", aspectRatio: "1/1" },
    { name: "智伯乐（成都）科技有限责任公司", link:"https://www.zbl.vip/",logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%99%BA%E4%BC%AF%E4%B9%90-gHWCBnEg1nEj6dH35OLSdCD90discx.png", aspectRatio: "5/1" },
  ]

  const blogPosts = [
    { title: "AI革命：深度学习的未来", link:"https://blog.csdn.net/m0_56022510/article/details/142166751?spm=1001.2014.3001.5501", category: "人工智能", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog1-swgju8go5oYHgSg1Ykink71rZzT37Z.jpg" },
    { title: "从零开始：构建你的第一个神经网络", link:"https://blog.csdn.net/m0_56022510/article/details/141746627?spm=1001.2014.3001.5501", category: "机器学习", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog2-xfVqrlFjswtg6Q8cQjdu5Sm5vnorT8.jpg" },
    { title: "数据科学家的日常：挑战与机遇", link:"https://blog.csdn.net/m0_56022510/article/details/142442751?spm=1001.2014.3001.5501", category: "数据科学", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog3-V95guEg8ODAvIoduXNPOGWrbV7fyFb.jpg" },
  ]

  // 添加一个新的函数来处理"联系我"按钮的点击
  const handleContactClick = () => {
    scrollToSection(contactRef, () => setShowContact(true))
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* 侧边栏 */}
      <nav className="w-64 bg-gray-800 flex flex-col">
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rxNYZVAn4bv1rOFceCtceDQAMsRjUu.png"
              alt="Logo"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="font-bold">STAG</span>
          </div>
          <span className="text-gray-400">{formatTime(currentTime)}</span>
        </div>
        <div className="p-4 bg-gray-700">
          <div className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A4%B4%E5%83%8F-fhyHqyCLslcWja6s4Ny4bMdOYNV9rs.jpg"
              alt="朱建豪的头像"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2 className="font-bold">朱建豪</h2>
              <p className="text-sm text-gray-400">算法工程师</p>
            </div>
          </div>
          <div className="flex items-center mt-2 text-sm text-gray-400">
            <MapPin className="w-4 h-4 mr-1" />
            <span>成都</span>
          </div>
        </div>
        <ul className="flex-1 p-4 space-y-2">
          <li className="flex items-center space-x-3 text-blue-400 cursor-pointer" onClick={() => scrollToSection(homeRef)}>
            <Home className="w-5 h-5" />
            <span>首页</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer" onClick={() => scrollToSection(projectsRef)}>
            <FolderKanban className="w-5 h-5" />
            <span>项目</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer" onClick={() => scrollToSection(aboutRef)}>
            <User className="w-5 h-5" />
            <span>关于</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer" onClick={() => scrollToSection(skillsRef)}>
            <BookOpen className="w-5 h-5" />
            <span>技能</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer" onClick={() => scrollToSection(blogRef)}>
            <BookOpen className="w-5 h-5" />
            <span>博客</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer" onClick={() => scrollToSection(contactRef)}>
            <Phone className="w-5 h-5" />
            <span>联系</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer" onClick={() => scrollToSection(educationRef)}> {/* Added education navigation */}
            <BookOpen className="w-5 h-5" />
            <span>教育</span>
          </li>
        </ul>
      </nav>

      {/* 主要内容 */}
      <main className="flex-1 overflow-y-auto p-8">
        {/* 个人资料部分 */}
        <section ref={homeRef} className="mb-12 bg-gray-800 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm text-green-400">可接受自由职业工作</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{formatDate(currentTime)}</span>
              </div>
              <button 
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm flex items-center"
                onClick={handleContactClick}  // 添加这个点击事件处理函数
              >
                联系我 <ExternalLink className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-gray-400 text-sm mb-1">算法工程师</h2>
            <h1 className="text-3xl font-bold flex items-center">
              朱建豪 <span className="ml-2">👋</span>
            </h1>
          </div>
          <p className="text-gray-400 mb-4">
            我是一名专注于机器学习和人工智能的算法工程师，擅长解决复杂问题并开发创新解决方案。我热衷于探索AI的前沿领域，并将其应用于实际项目中。
          </p>
          <div className="flex justify-between items-end">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%AD%BE%E5%90%8D-KTZlP9gYNIBDg0qdVw60v3HIbQacO2.png"
              alt="个人签名"
              width={100}
              height={50}
              className="opacity-80"
            />
            <div className="text-right">
              <p className="text-sm text-gray-400">成都市高新区天府大道</p>
              <p className="text-sm text-blue-400">中国</p>
            </div>
          </div>
        </section>

        {/* 项目展示 */}
        <section ref={projectsRef} className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">项目</h2>
            <a href="https://github.com/sfdeggb" className="text-blue-400 flex items-center" target="_blank" rel="noopener noreferrer">
              查看全部 <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <a href={project.link} key={index} className="bg-gray-800 rounded-lg overflow-hidden" target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="font-bold">{project.name}</h3>
                  <p className="text-sm  text-gray-400">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 关于（工作经历、教育背景、认证） */}
        <section ref={aboutRef} className="mb-12">
          <h2 className="text-xl font-bold mb-4">关于我</h2>

          {/* 合作伙伴 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">合作伙伴</h3>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold">合作伙伴</h4>
                <p className="text-gray-400">长期合作伙伴将获得优先支持</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <a 
                  key={index} 
                  href={partner.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center bg-gray-700 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <div className="w-full h-24 mb-4 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-full relative" style={{ aspectRatio: partner.aspectRatio }}>
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          layout="fill"
                          objectFit="contain"
                          className="p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm font-medium text-gray-300">{partner.name}</p>
                </a>
              ))}
              </div>
              <div className="grid grid-cols-3 gap-4 text-center mt-8">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-4xl font-bold text-blue-400">1+</p>
                  <p className="text-gray-400">年工作经验</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-4xl font-bold text-green-400">20+</p>
                  <p className="text-gray-400">完成项目</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-4xl font-bold text-yellow-400">95%</p>
                  <p className="text-gray-400">客户满意度</p>
                </div>
              </div>
            </div>
          </div>

          {/* 教育背景 */}
          <div className="mb-8" ref={educationRef}>
            <h3 className="text-2xl font-semibold mb-6">教育背景</h3>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 lg:pr-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/school_logo-l0zz26W1fTaRyKaDnIoZDevihYUry3.jpeg"
                      alt="成都信息工程大学校徽"
                      width={80}
                      height={80}
                      className="rounded-full border-4 border-gray-700 mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-2xl mb-2 text-blue-400">成都信息工程大学</h4>
                      <p className="text-lg text-gray-300">数据科学与大数据技术 本科</p>
                      <p className="text-gray-400">2020 - 2024</p>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">
                    成都信息工程大学是一所以信息科学技术为特色的多科性大学，在大数据、人工智能和信息技术领域拥有强大的教学资源和研究实力。
                  </p>
                </div>
                <div className="flex-1 mt-4 lg:mt-0">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shcool-j3YGpe56Hc9IbMXioAdOaF7cfuHSyk.jpg"
                      alt="成都信息工程大学校园"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 认证 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">认证</h3>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIIT-pubeHra7aVlXRMHm9aBCT2SrrkfUNB.png"
                alt="中国工业与信息化部logo"
                width={60}
                height={60}
                className="mr-4"
              />
              <div>
                <h4 className="font-bold text-lg">高级系统分析师</h4>
                <p className="text-gray-400">中国工业与信息化部（MIIT）</p>
              </div>
            </div>
          </div>
        </section>

        {/* 技能和工具 */}
        <section ref={skillsRef} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">技能与工具</h2>

          {/* 技能 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">技能</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                  <span className="text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 工具 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">工具</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
              {tools.map((tool) => (
                <div key={tool.name} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center space-y-2 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="w-12 h-12 flex items-center justify-center"> {/* Add fixed size container */}
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      width={40}
                      height={40}
                      className="rounded-lg" // Removed mb-2 as it's not needed with the container
                    />
                  </div>
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 博客 */}
        <section ref={blogRef} className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">博客</h2>
            <a href="https://blog.csdn.net/m0_56022510?spm=1000.2115.3001.5343" className="text-blue-400 flex items-center">
              查看全部 <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {blogPosts.map((post, index) => (
               <a key={index} href={post.link} className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105" target="_blank" rel="noopener noreferrer">
               <Image
                 src={post.image}
                 alt={post.title}
                 width={400}
                 height={300}
                 className="object-cover w-full h-48"
               />
               <div className="p-4">
                 <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                 <p className="text-sm text-gray-400">{post.category}</p>
                 <div className="text-blue-400 flex items-center mt-2">
                   阅读更多 <ArrowRight className="w-4 h-4 ml-1" />
                 </div>
               </div>
             </a>
           ))}
          </div>
        </section>

        {/* 评价 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">评价</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="italic">&ldquo;可靠、值得信任、工作中合作愉快。&rdquo;</p>
              <p className="text-right">— 张定���，成都移动互联网协会</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="italic">&ldquo;愿意为自己的想法付出实践和努力。&rdquo;</p>
              <p className="text-right">— 岳远航，智伯乐（成都）科技有限责任公司</p>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
       {/* 联系方式 */}
    <section ref={contactRef} className="mb-12">
      <h2 className="text-xl font-bold mb-4">联系我</h2>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">姓名</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">邮箱</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">留言</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              提交
            </button>
            {submitStatus && <p className="text-center text-sm mt-2">{submitStatus}</p>}
          </form>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">地址</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-medium">访问我</h4>
                    <p className="text-sm text-gray-400">成都市高新区天府大道</p>
                    <p className="text-sm text-gray-400">中国</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-medium">联系方式</h4>
                    <p className="text-sm text-gray-400">+86 191-8098-8426</p>
                    <p className="text-sm text-gray-400">Z19180988426（微信）</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-medium">邮箱</h4>
                    <p className="text-sm text-gray-400">2128449235@qq.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

// 定义内容部分的接口
interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function TaxPromotionPage() {
  const [activeSection, setActiveSection] = useState('cover');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigate = useNavigate();

  // 监听滚动，更新当前激活的部分
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentActiveSection = 'cover';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          currentActiveSection = section.id;
        }
      });

      setActiveSection(currentActiveSection);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 滚动到指定部分
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  // 滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 返回首页
  const goBack = () => {
    navigate(-1);
  };

  // 内容部分数据
  const sections: Section[] = [
    {
      id: 'cover',
      title: '封面',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-white">
          <div className="flex items-center mb-10">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-3">
              <i className="fas fa-landmark text-blue-700"></i>
            </div>
            <h3 className="text-lg">国家税务总局临城县税务局</h3>
          </div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            系列情景剧
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-10 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            "演"活规范执法"视"效
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-blue-300 mb-10"
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ duration: 1, delay: 0.4 }}
          />

          <motion.p
            className="text-lg text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            创新普法形式 提升执法水平
          </motion.p>
        </div>
      ),
    },
    {
      id: 'content',
      title: '目录',
      content: (
        <div className="w-full py-12 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">目录</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-4">
            {[
              { id: 'background', title: '01 活动背景与目标' },
              { id: 'script', title: '02 实景式编剧：源于实践的创作' },
              { id: 'rehearsal', title: '03 体验式彩排：还原真实执法场景' },
              { id: 'performance', title: '04 沉浸式表演：矛盾与规范的碰撞' },
              { id: 'application', title: '05 应用式转化：从舞台到实践' },
              { id: 'achievements', title: '06 活动成效与创新价值' },
              { id: 'future', title: '07 未来展望与总结' }
            ].map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-50 p-5 rounded-lg cursor-pointer transition-all shadow-sm"
                onClick={() => scrollToSection(item.id)}
              >
                <h3 className="text-lg font-semibold text-blue-700">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'background',
      title: '活动背景与目标',
      content: (
        <div className="w-full py-8 px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">一</span>
              活动背景与目标
            </h2>
            <div className="ml-11 w-16 h-1 bg-blue-600"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-history text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold">背景</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                针对基层税收执法现状，临城县税务局通过编演税收执法情景剧以"演"代训，
                帮助税务干部廓清理解偏差和认识误区，准确掌握税费执法流程，规范执法语言与行为。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-bullseye text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold">目标</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                通过"以演代训"提升干部规范执法意识与水平，有效提高基层人员规范执法意识和水平，
                丰富涉税矛盾处理经验。
              </p>
            </div>

            <div className="mt-8 bg-gray-50 p-4 rounded-lg">
              <div className="aspect-video bg-gray-100 rounded-lg shadow-sm flex items-center justify-center overflow-hidden">
                {/* 模拟微信公众号中的图片样式 */}
                <img
                  src="/src/pic/1.png"
                  alt="第一期片段截取"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">第一期片段截取</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'script',
      title: '实景式编剧',
      content: (
        <div className="w-full py-8 px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">二</span>
              实景式编剧：源于实践的创作
            </h2>
            <div className="ml-11 w-16 h-1 bg-blue-600"></div>
          </div>

          <div className="space-y-8">
            <div className="mt-6">
              <div className="aspect-video bg-gray-100 rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/src/pic/2.png"
                  alt="情景剧片段截取"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">情景剧片段截取</p>
            </div>

            <motion.div
              className="p-5 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-heart text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">核心</h3>
                  <p className="text-gray-700">青年团队自编脚本，素材取自日常执法业务。</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-5 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-bullhorn text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">三大聚焦</h3>
                  <p className="text-gray-700">高业务量、高频过错、高频误区。</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-5 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-book text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">案例</h3>
                  <p className="text-gray-700">《催报催缴的故事》全景呈现执法流程规范。</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      id: 'rehearsal',
      title: '体验式彩排',
      content: (
        <div className="w-full py-8 px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">三</span>
              体验式彩排：还原真实执法场景
            </h2>
            <div className="ml-11 w-16 h-1 bg-blue-600"></div>
          </div>

          <div className="space-y-8">
            <motion.div
              className="p-5 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-masks-theater text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">形式</h3>
                  <p className="text-gray-700">独幕剧为主，"情节复盘"还原"我身上/身边的故事"。</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-5 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-star text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">特点</h3>
                  <p className="text-gray-700">背景直入主题、场景简洁真实、人物贴近现实。</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-5 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-briefcase text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">案例</h3>
                  <p className="text-gray-700">《法拍车交貌风波》再现争议处理全过程。</p>
                </div>
              </div>
            </motion.div>

            <div className="mt-6">
              <div className="aspect-video bg-gray-100 rounded-lg shadow-sm overflow-hidden">
                <img
                  src="../src/pic/3.png"
                  alt="彩排现场"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">彩排现场</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'performance',
      title: '沉浸式表演',
      content: (
        <div className="w-full py-8 px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">四</span>
              沉浸式表演：矛盾与规范的碰撞
            </h2>
            <div className="ml-11 w-16 h-1 bg-blue-600"></div>
          </div>

          <div className="space-y-8">
            <div className="mt-6">
              <div className="aspect-video bg-gray-100 rounded-lg shadow-sm overflow-hidden">
                <img
                  src="../src/pic/4.png"
                  alt="《社保费官司里的官司》"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">《社保费官司里的"官司"》</p>
            </div>

            <motion.div
              className="p-5 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-lightbulb text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">亮点</h3>
                  <p className="text-gray-700">自编自导自演，融合真实性、知识性、趣味性。</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-5 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-project-diagram text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">三大呈现</h3>
                  <p className="text-gray-700">演出矛盾、演出瑕疵、演出规范。</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-5 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-gavel text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">案例</h3>
                  <p className="text-gray-700">《社保费官司里的"官司"》纠错示范执法规范。</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      id: 'application',
      title: '应用式转化',
      content: (
        <div className="w-full py-8 px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">五</span>
              应用式转化：从舞台到实践
            </h2>
            <div className="ml-11 w-16 h-1 bg-blue-600"></div>
          </div>

          <div className="space-y-8">
            <motion.div
              className="p-5 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-road text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">路径</h3>
                  <p className="text-gray-700">"从实践中来，到实践中去"。</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-5 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-hand-holding-usd text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">三大举措</h3>
                  <p className="text-gray-700">找"钥匙"、理"指引"、编"案例"。</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-5 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-car text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">案例</h3>
                  <p className="text-gray-700">《豪车疑云》转化为风险应对实操指引。</p>
                </div>
              </div>
            </motion.div>

            <div className="mt-6">
              <div className="aspect-video bg-gray-100 rounded-lg shadow-sm overflow-hidden">
                <img
                  src="../src/pic/5.png"
                  alt="《豪车疑云》演练现场"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">《豪车疑云》演练现场</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'achievements',
      title: '活动成效与创新价值',
      content: (
        <div className="w-full py-8 px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">六</span>
              活动成效与创新价值
            </h2>
            <div className="ml-11 w-16 h-1 bg-blue-600"></div>
          </div>

          <div className="space-y-8">
            <div className="mt-6">
              <div className="aspect-video bg-gray-100 rounded-lg shadow-sm overflow-hidden">
                <img
                  src="../src/pic/6.png"
                  alt="领导点评"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">领导点评</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-chart-line text-blue-600 mr-2"></i>
                活动成效
              </h3>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  干部规范执法显著提升，执法流程掌握准确率提高，矛盾处理经验丰富。
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-lightbulb text-blue-600 mr-2"></i>
                创新价值
              </h3>
              <div className="space-y-3">
                <motion.div
                  className="p-4 bg-white rounded-lg shadow-sm"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-gray-700">
                    <span className="font-medium text-blue-700">形式创新：</span>以演代训，变被动接受为主动参与。
                  </p>
                </motion.div>

                <motion.div
                  className="p-4 bg-white rounded-lg shadow-sm"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-gray-700">
                    <span className="font-medium text-blue-700">内容创新：</span>我演我事，用身边人、身边事教育大家。
                  </p>
                </motion.div>

                <motion.div
                  className="p-4 bg-white rounded-lg shadow-sm"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-gray-700">
                    <span className="font-medium text-blue-700">成果转化：</span>形成可复制的指引与案例库，推广应用。
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'review',
      title: '活动精彩瞬间回顾',
      content: (
        <div className="w-full py-8 px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm"></span>
              活动精彩瞬间回顾
            </h2>
            <div className="ml-11 w-16 h-1 bg-blue-600"></div>
          </div>
          <div className="mt-10">

            <h3 className="text-xl font-bold mb-6 text-center">活动精彩瞬间回顾</h3>

            <div className="space-y-6">
              {[
                {
                  title: '编剧研讨',
                  desc: '编剧团队深入研讨剧本细节，力求剧情真实、贴近工作。',
                  icon: 'book'
                },
                {
                  title: '角色彩排',
                  desc: '演员们全情投入，在彩排现场进行生动的角色互动与演绎。',
                  icon: 'masks-theater'
                },
                {
                  title: '观众互动',
                  desc: '活动现场设置互动环节，邀请观众点评，气氛热烈。',
                  icon: 'users'
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={`../src/pic/${item.title === '编剧研讨' ? '7.png' : item.title === '角色彩排' ? '8.png' : '9.png'}`}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-semibold mb-2 text-center">{item.title}</h4>
                    <p className="text-gray-700 text-center">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      ),
    },
    {
      id: 'future',
      title: '未来展望与总结',
      content: (
        <div className="w-full py-8 px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center"><span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">七</span>
              未来展望与总结
            </h2>
            <div className="ml-11 w-16 h-1 bg-blue-600"></div>
          </div>

          <div className="space-y-8">
            <motion.div
              className="p-5 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-rocket text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">展望</h3>
                  <p className="text-gray-700 leading-relaxed">
                    持续深化情景喜剧普法形式，拓展应用场景，打造税务普法特色品牌。
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-5 bg-white rounded-lg shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-flag-checkered text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">总结</h3>
                  <p className="text-gray-700 leading-relaxed">
                    以情景剧创新实践，"演"出规范执法新路径，"视"出税务服务新形象，
                    为基层法培训提供可靠借鉴模式。
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg flex items-center justify-center p-8">
              <div className="text-center">
                <motion.div
                  className="w-36 h-36 mx-auto mb-6 relative"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                  <div className="absolute inset-2 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="text-white text-4xl font-bold">LTX</div>
                  </div>
                </motion.div>
                <p className="text-white text-lg font-medium">系列情景剧</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // 阅读进度条的宽度状态
  const [readingProgress, setReadingProgress] = useState(0);
  // 悬浮目录的显示状态
  const [showFloatToc, setShowFloatToc] = useState(false);
  // 内容容器引用
  const contentRef = useRef<HTMLDivElement>(null);

  // 处理滚动事件，更新阅读进度
  useEffect(() => {
    const handleScroll = () => {
      // 计算阅读进度
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);

      // 当滚动到一定距离时显示悬浮目录
      if (window.scrollY > 500) {
        setShowFloatToc(true);
      } else {
        setShowFloatToc(false);
      }

      // 原来的滚动逻辑
      const sections = document.querySelectorAll('section[id]');
      let currentActiveSection = 'cover';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          currentActiveSection = section.id;
        }
      });

      setActiveSection(currentActiveSection);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen" ref={contentRef}>
      {/* 阅读进度条 */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all duration-150 ease-out"
        style={{ width: `${readingProgress}%` }}
      />

      {/* 顶部导航栏 - 微信公众号风格 */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40 border-b border-gray-100" style={{ marginTop: '4px' }}>
        <div className="flex items-center h-14 px-4">
          <button
            onClick={goBack}
            className="w-8 h-8 flex items-center justify-center text-gray-700"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="flex-1 text-center font-medium text-gray-900 truncate">
            系列情景剧
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-8 h-8 flex items-center justify-center text-gray-700"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-ellipsis-h'}`}></i>
          </button>
        </div>

        {/* 移动端菜单 - 从底部弹出 */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold mb-4 text-center">导航菜单</h3>
              <div className="space-y-2 mb-6">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "w-full text-left py-3 px-4 rounded-lg transition-colors duration-200",
                      activeSection === section.id
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-3 bg-gray-100 text-gray-800 font-medium rounded-lg"
              >
                关闭
              </button>
            </motion.div>
          </motion.div>
        )}
      </header>

      {/* 悬浮目录按钮 */}
      <AnimatePresence>
        {showFloatToc && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg z-30"
            onClick={() => setIsMenuOpen(true)}
          >
            <i className="fas fa-list-ul"></i>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 主要内容区域 - 微信公众号风格 */}
      <main className="pt-20 pb-8 bg-white max-w-3xl mx-auto transition-colors duration-300">
        {/* 文章标题区域 - 微信公众号风格 */}
        <div className="px-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">系列情景剧"演"活规范执法"视"效</h1>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <span>国家税务总局临城县税务局</span>
            <span className="mx-2">·</span>
            <span>{new Date().toLocaleDateString('zh-CN')}</span>
            <span className="mx-2">·</span>
            <span>阅读 1.2万+</span>
          </div>
          <div className="w-full h-1 bg-gray-100"></div>
        </div>

        {/* 封面部分 */}
        <section
          id="cover"
          className="min-h-[60vh] bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden rounded-lg mx-4 mb-8"
        >
          {/* 装饰性元素 */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full"></div>
          </div>

          <div className="h-full flex items-center justify-center relative z-10 px-4 py-12">
            {sections.find((s) => s.id === 'cover')?.content}
          </div>

          {/* 向下滚动按钮 */}
          <motion.button
            onClick={() => scrollToSection('content')}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </motion.button>
        </section>

        {/* 其他内容部分 - 优化为微信公众号文章风格 */}
        {sections.slice(1).map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="py-8 px-4 bg-white"
          >
            <div className="prose prose-blue max-w-none">
              {section.content}
            </div>
          </section>
        ))}

        {/* 文章分割线 */}
        <div className="w-full h-px bg-gray-100 my-8 mx-4"></div>

        {/* 文章底部 - 微信公众号风格 */}
        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                onClick={() => {
                  alert('感谢您的点赞！');
                }}
              >
                <i className="fas fa-thumbs-up mr-1"></i>
                <span>点赞</span>
              </motion.button>
              {/* <motion.button
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm font-medium"
                onClick={() => {
                  alert('评论功能即将上线！');
                }}
              >
                <i className="fas fa-comment mr-1"></i>
                <span>评论</span>
              </motion.button> */}
            </div>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow-sm"
              onClick={() => {
                // 分享功能
                if (typeof window !== 'undefined' && navigator.share) {
                  // 使用Web Share API
                  navigator.share({
                    title: '国家税务总局临城县税务局 - 系列情景剧',
                    text: '创新普法形式，提升执法水平',
                    url: window.location.href
                  }).catch(console.error);
                } else {
                  // 复制链接到剪贴板
                  navigator.clipboard.writeText(window.location.href)
                    .then(() => alert('链接已复制到剪贴板，您可以粘贴分享给朋友'))
                    .catch(() => alert('请手动复制网址分享：' + window.location.href));
                }
              }}
            >
              <i className="fas fa-share-alt mr-1"></i>
              <span>分享</span>
            </motion.button> */}
          </div>

          {/* 作者信息卡片 */}
          <div className="bg-gray-50 p-5 rounded-xl mb-6">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-landmark text-blue-600 text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">系列情景剧</h3>
                <p className="text-sm text-gray-500">创新普法形式 提升执法水平</p>
              </div>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-medium shadow-sm"
              >
                关注
              </motion.button> */}
            </div>
          </div>

          {/* 推荐阅读 */}
          {/* <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-100">推荐阅读</h3>
            <div className="space-y-4">
              {[
                { title: "税务执法规范化建设的实践与探索", readCount: "8,562" },
                { title: "基层税务干部培训新模式研究", readCount: "6,321" },
                { title: "税收普法工作的创新与发展", readCount: "9,874" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex-1 mr-4">
                    <h4 className="text-gray-800 line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">阅读 {item.readCount}</p>
                  </div>
                  <div className="w-16 h-16 bg-blue-50 rounded flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-file-alt text-blue-400"></i>
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}

          {/* 版权信息 */}
          {/* <footer className="text-center text-gray-500 text-xs py-4 border-t border-gray-100">
            <p>© {new Date().getFullYear()} 国家税务总局临城县税务局 版权所有</p>
            <p className="mt-1">转载请注明来源</p>
          </footer> */}
        </div>
      </main>

      {/* 返回顶部按钮 - 微信风格 */}
      <motion.button
        className={`fixed bottom-6 right-6 w-12 h-12 bg-white text-blue-600 border border-blue-600 rounded-full flex items-center justify-center shadow-md z-40 ${showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={scrollToTop}
        initial={{ scale: 0.8 }}
        animate={{ scale: showBackToTop ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
      >
        <i className="fas fa-arrow-up"></i>
      </motion.button>
    </div>
  );
}
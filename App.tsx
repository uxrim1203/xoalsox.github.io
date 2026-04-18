import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { 
  Play, 
  Info, 
  ChevronRight, 
  Clapperboard, 
  Film, 
  Users, 
  Database, 
  BrainCircuit, 
  Coffee,
  Instagram,
  Mail,
  Zap,
  GraduationCap
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- Data Structures ---

const PROJECTS = [
  {
    id: 1,
    title: "OTT vs TV 드라마 비교 분석",
    category: "마케팅 데이터 분석",
    description: "OTT 플랫폼과 전통 TV 드라마의 마케팅 전략 차이를 분석하고 사용자 이용행태 인포그래픽 제작.",
    src: "https://picsum.photos/seed/broadcast-data/1200/675",
    tags: ["Data", "Marketing", "Infographic"]
  },
  {
    id: 2,
    title: "시나브로: 1분 영화 제작",
    category: "영상 연출",
    description: "고교 시절 방송 동아리 '시나브로' 부장으로서 5컷 영화 및 1분 영화 제작 총괄 기획 및 연출.",
    src: "https://picsum.photos/seed/camera-lens/1200/675",
    tags: ["PD", "Directing", "Sinaebro"]
  },
  {
    id: 3,
    title: "디지털 마케팅 팀장 프로젝트",
    category: "콘텐츠 마케팅",
    description: "교과융합 탐구 활동 중 '디지털 마케팅' 팀장으로서 데이터 분석 도구 조사 및 성공 사례 발표.",
    src: "https://picsum.photos/seed/production-monitor/1200/675",
    tags: ["Project Lead", "Marketing", "Data"]
  },
  {
    id: 4,
    title: "AI 기반 방송 콘텐츠 연계 탐구",
    category: "미래 기술",
    description: "인공지능 음악 생성 프로그램 및 AI 전환 시대의 맞춤형 마케팅 전략에 관한 심층 연구.",
    src: "https://picsum.photos/seed/ai-broadcast/1200/675",
    tags: ["AI", "R&D", "Media"]
  },
];

const SPECS = [
  { date: "25.03 - 현재", title: "한성대 제40대 총학생회 'WE:RO'", detail: "홍보국원 & 영화 다솜: 단편 영화제작 총무/촬영팀" },
  { date: "24.03 - 24.08", title: "구일고 제3학년 학급 자치회 회장", detail: "소통 중심의 학급 운영 및 대의원 활동" },
  { date: "23.08 - 24.02", title: "구일고 제2학년 학급 자치회 부회장", detail: "스포츠리그 및 학급 자치 기획" },
  { date: "22.03 - 24.12", title: "방송 동아리 '시나브로' 부장", detail: "축제 기획 및 영상 콘텐츠 제작 총괄" },
  { date: "23.05 - 23.11", title: "펀펀 인문학 아카데미", detail: "역사 문화 탐방 및 미술 비평 활동 이수" },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 px-12 py-5 ${isScrolled ? 'bg-black shadow-2xl' : 'nav-gradient'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-12">
          <span className="text-2xl font-black tracking-tighter text-accent uppercase">YOURIM PD</span>
          <div className="hidden space-x-8 text-[14px] font-medium md:flex uppercase tracking-wide">
            <a href="#intro" className="text-white hover:text-accent transition-colors">Home</a>
            <a href="#archive" className="text-text-dim hover:text-white transition-colors">Archive</a>
            <a href="#leadership" className="text-text-dim hover:text-white transition-colors">Career</a>
            <a href="#vision" className="text-text-dim hover:text-white transition-colors">My List</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Instagram className="h-5 w-5 text-text-dim group-hover:text-accent transition-colors" />
            <span className="text-[12px] font-mono text-text-dim group-hover:text-white transition-colors hidden sm:block">@oxyom_</span>
          </div>
          <Mail className="h-5 w-5 cursor-pointer text-text-dim hover:text-accent transition-colors" />
        </div>
      </div>
    </nav>
  );
};

const SlateIntro = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-primary"
    >
      <div className="relative w-64 md:w-80">
        {/* Slate Top (Clapper) */}
        <motion.div 
          initial={{ rotate: -25, originX: "0%", originY: "100%" }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.3, delay: 0.5, ease: "backOut" }}
          className="relative z-10 h-10 w-full border-[4px] border-white bg-white"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 20px, #fff 20px, #fff 40px)' }}
        />
        {/* Slate Bottom */}
        <div className="h-40 w-full bg-bg-card border-[4px] border-white p-4 font-mono text-xs shadow-2xl">
          <div className="grid grid-cols-2 gap-2 border-b border-stone-800 pb-2">
            <div>
              <p className="opacity-50">PROD.</p>
              <p className="truncate text-white">PORTFOLIO.2026</p>
            </div>
            <div>
              <p className="opacity-50">ROLL</p>
              <p className="text-white">A-001</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 border-b border-stone-800 py-2">
            <div>
              <p className="opacity-50">SCENE</p>
              <p className="text-white">01</p>
            </div>
            <div>
              <p className="opacity-50">TAKE</p>
              <p className="text-white">01</p>
            </div>
            <div>
              <p className="opacity-50">DATE</p>
              <p className="text-white uppercase">APR 17</p>
            </div>
          </div>
          <div className="pt-2 text-center text-lg font-bold tracking-widest text-white uppercase">
            YOURIM PD
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-12 text-center"
      >
        <p className="text-xs font-semibold tracking-[0.4em] text-text-dim uppercase">Directing Communication</p>
        <motion.button
          onClick={onComplete}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 rounded-sm border-2 border-white bg-transparent px-10 py-3 text-sm font-bold tracking-widest text-white uppercase transition-all hover:bg-white hover:text-black"
        >
          START PREVIEW
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  return (
    <div ref={containerRef} className="relative overflow-hidden font-sans bg-bg-primary min-h-screen">
      <AnimatePresence>
        {showIntro && (
          <SlateIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <Navbar />

      {/* --- Viewport Grid Equivalent Structure --- */}
      <main className="flex flex-col min-h-screen">
        
        {/* --- Hero Section --- */}
        <section id="intro" className="relative h-[80vh] w-full hero-radial flex items-center pt-20">
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="absolute inset-0 z-0 h-full w-full opacity-40"
          >
            <img 
              src="https://picsum.photos/seed/broadcast-camera/1920/1080?blur=3" 
              alt="Hero Background" 
              className="h-full w-full object-cover grayscale brightness-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-80" />
            
            {/* Camera Overlay Element */}
            <div className="absolute top-10 right-10 flex gap-4 text-[10px] font-mono text-white/40">
              <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" /> REC</span>
              <span>4K 60FPS</span>
              <span>ISO 400</span>
            </div>
          </motion.div>

          <div className="relative z-10 px-12 md:px-24 container mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl border-l-[4px] border-white pl-12 py-8 relative"
            >
              <div className="absolute -top-1 left-0 w-[calc(100%+20px)] h-[4px] bg-white hidden lg:block" />
              <div className="absolute -top-8 left-0">
                 <span className="text-accent text-[18px] font-semibold uppercase tracking-[2px]">On Air: Broadcasting & Communication</span>
              </div>
              
              <h1 className="mb-4 text-4xl font-extrabold leading-[1.1] md:text-5xl lg:text-7xl">
                앞장서서 이끌고 <br />
                곁에서 경청하는, <br />
                <span className="text-accent">'소통'을 연출하는 PD</span>
              </h1>
              <p className="mt-6 text-[14px] text-text-dim font-medium font-mono uppercase tracking-widest">
                YOURIM | 2006.12.03 | Drama PD & Content Marketer
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Archive Section --- */}
        <section id="archive" className="relative z-20 px-12 md:px-24 py-16 container mx-auto">
          <h2 className="mb-8 text-[18px] font-semibold text-text-dim uppercase tracking-wider">
            My Archive: Latest Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group cursor-pointer overflow-hidden rounded-sm bg-bg-card border-b-[3px] border-transparent hover:border-accent transition-all duration-300 shadow-2xl"
              >
                <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-[#333] to-[#111] flex items-center justify-center">
                  <img 
                    src={project.src} 
                    alt={project.title} 
                    className="h-full w-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                     <span className="text-match-green font-bold text-[12px]">98% Match</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-[14px] font-bold tracking-tight">{project.title}</h3>
                  </div>
                  <p className="text-[11px] text-text-dim uppercase tracking-wide font-medium">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- On-Set Leadership Section --- */}
        <section id="leadership" className="bg-[#0a0a0a] py-24 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="mx-auto max-w-7xl px-12 md:px-24 relative z-10">
            <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl border border-white/10"
              >
                <img 
                  src="https://picsum.photos/seed/director-set/800/1000" 
                  alt="Director on Set" 
                  className="h-full w-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 left-6 flex flex-col gap-1 border-l-2 border-accent pl-4">
                  <p className="text-[10px] font-mono text-white/40 tracking-[3px] uppercase">Monitor_01</p>
                  <p className="text-[14px] font-bold text-white tracking-widest uppercase">Live View</p>
                </div>
                <div className="absolute bottom-10 left-10">
                  <p className="text-6xl font-black text-white/10 tracking-tighter italic">DIRECTOR</p>
                  <p className="text-xl font-bold text-accent tracking-widest">ON AIR EXPERIENCE</p>
                </div>
              </motion.div>

              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-12 bg-accent" />
                    <span className="text-accent text-[12px] font-bold uppercase tracking-[4px]">Leadership Profile</span>
                  </div>
                  <h2 className="text-4xl font-extrabold md:text-5xl uppercase tracking-tighter leading-tight">
                    On-Set <br /><span className="text-accent">Communication</span> Expert
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed text-text-dim">
                  <p>
                    고교 시절 방송 동아리 '시나브로'의 부장을 역임하며 축제 기획과 1분 영화 제작을 총괄했습니다. 
                    단순히 지시하는 리더가 아닌, 카메라 앵글 하나하나에 팀원의 목소리를 담아내며 최선의 결과물을 만들어내는 '소통의 연출가'입니다.
                  </p>
                  <p>
                    한성대학교 <strong>'영화 다솜: 단편 영화제작'</strong> 촬영팀 및 총무로서 다져진 전문적인 현장 감각과 꼼꼼한 정보 관리 능력은 저의 가장 큰 무기입니다.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="border-t border-white/10 pt-4">
                    <h5 className="text-[11px] font-mono text-accent uppercase mb-2">Psychology</h5>
                    <p className="text-xl font-bold text-white">ENFJ Type</p>
                    <p className="text-xs text-text-dim mt-1">밝고 에너제틱한 시너지</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <h5 className="text-[11px] font-mono text-accent uppercase mb-2">Management</h5>
                    <p className="text-xl font-bold text-white">Detail Oriented</p>
                    <p className="text-xs text-text-dim mt-1">데이터 및 자산 정밀 관리</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Bottom Split: Leadership & Vision --- */}
        <section className="bg-[#141414]/50 border-t border-white/10 py-16">
          <div className="px-12 md:px-24 container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-[12px] font-bold text-accent uppercase tracking-[1px]">Leadership & Competency</h3>
                <p className="text-[13px] leading-relaxed text-white max-w-2xl">
                  한성대학교 총학생회 'WE:RO' 홍보국원 및 <strong>영화 다솜: 단편 영화제작</strong> 촬영팀/총무 역임. <br />
                  ENFJ형의 밝은 에너지와 학급 리더십을 바탕으로 꼼꼼한 정보 관리 및 방송 현장 실무에 능숙합니다.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-white/10 rounded-sm text-[10px] font-medium text-text-dim">#Soft_Leadership</span>
                  <span className="px-3 py-1 bg-white/10 rounded-sm text-[10px] font-medium text-text-dim">#ENFJ</span>
                  <span className="px-3 py-1 bg-white/10 rounded-sm text-[10px] font-medium text-text-dim">#PR_Expert</span>
                  <span className="px-3 py-1 bg-white/10 rounded-sm text-[10px] font-medium text-text-dim">#Organized</span>
                </div>
              </div>

              <div id="vision" className="space-y-4">
                <h3 className="text-[12px] font-bold text-accent uppercase tracking-[1px]">Vision</h3>
                <p className="text-[15px] italic leading-relaxed text-text-dim">
                  "단순히 보여주는 드라마를 넘어, 대중의 마음을 읽고 그들과 끊임없이 대화하는 콘텐츠 생태계를 연출하겠습니다."
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* --- Footer --- */}
      <footer className="py-16 text-center bg-bg-primary border-t border-white/5">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5">
            <Instagram className="h-4 w-4 text-accent" />
            <span className="text-xs font-mono text-white tracking-widest">@oxyom_</span>
          </div>
          <p className="text-[13px] text-text-dim font-medium">문의사항 및 협업 제안은 인스타그램 DM으로 연락 부탁드립니다.</p>
        </div>
        <div className="flex justify-center gap-8 mb-8">
          <Instagram className="h-5 w-5 text-text-dim hover:text-white cursor-pointer transition-colors" />
          <Mail className="h-5 w-5 text-text-dim hover:text-white cursor-pointer transition-colors" />
        </div>
        <p className="text-[11px] text-text-dim uppercase tracking-[3px]">YOURIM PD Portfolio</p>
      </footer>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

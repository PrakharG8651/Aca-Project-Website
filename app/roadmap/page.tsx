import RoadmapGraph from "@/components/RoadmapGraph";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-mono text-sm uppercase tracking-wider"
        >
          <FaArrowLeft /> Back to Dashboard
        </Link>
        
        <div className="mb-12 stagger-children">
          <span className="hero__tag text-ring">RAS.DEVCAMP Curriculum</span>
          <h1 className="hero__title text-5xl md:text-7xl mt-4 mb-6">
            Knowledge Graph
          </h1>
          <p className="hero__sub text-lg max-w-2xl text-muted-foreground leading-relaxed">
            An interactive visualization of our 10-week journey. We've covered everything from modern frontend systems to scalable backend architecture and DevOps pipelines.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <RoadmapGraph />
        </div>
      </div>
    </div>
  );
}

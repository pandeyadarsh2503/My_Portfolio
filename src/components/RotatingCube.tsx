import { FaAws, FaDocker, FaPython, FaReact } from 'react-icons/fa';
import { SiMysql, SiMongodb } from 'react-icons/si';

export default function RotatingCube() {
  return (
    <div className="w-full lg:w-[40%] flex items-center justify-center z-50 relative pointer-events-auto h-[300px] lg:h-auto py-10 lg:py-0">
      <div className="cube-scene">
        <div className="cube">
          <div className="cube-face face-front">
            <FaAws className="text-7xl text-[#FF9900]" />
          </div>
          <div className="cube-face face-back">
            <FaDocker className="text-7xl text-[#2496ED]" />
          </div>
          <div className="cube-face face-right">
            <FaPython className="text-7xl text-[#3776AB]" />
          </div>
          <div className="cube-face face-left">
            <SiMysql className="text-7xl text-[#4479A1]" />
          </div>
          <div className="cube-face face-top">
            <FaReact className="text-7xl text-[#61DAFB]" />
          </div>
          <div className="cube-face face-bottom">
            <SiMongodb className="text-7xl text-[#47A248]" />
          </div>
        </div>
      </div>
    </div>
  );
}

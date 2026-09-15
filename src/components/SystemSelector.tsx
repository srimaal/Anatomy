import React from 'react';
import { OrganSystemId, Language, EducationLevel, SystemInfo } from '../types';
import { 
  Heart, 
  Wind, 
  Brain, 
  Bone, 
  Utensils, 
  Droplet,
  User
} from 'lucide-react';

interface SystemSelectorProps {
  systems: SystemInfo[];
  activeSystemId: OrganSystemId;
  onSelectSystem: (systemId: OrganSystemId) => void;
  language: Language;
  educationLevel: EducationLevel;
}

export const SystemSelector: React.FC<SystemSelectorProps> = ({
  systems,
  activeSystemId,
  onSelectSystem,
  language,
  educationLevel
}) => {
  const getIcon = (id: OrganSystemId) => {
    switch (id) {
      case 'fullbody':
        return <User className="w-4 h-4" />;
      case 'circulatory':
        return <Heart className="w-4 h-4" />;
      case 'respiratory':
        return <Wind className="w-4 h-4" />;
      case 'nervous':
        return <Brain className="w-4 h-4" />;
      case 'skeletal':
        return <Bone className="w-4 h-4" />;
      case 'digestive':
        return <Utensils className="w-4 h-4" />;
      case 'urinary':
        return <Droplet className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full">
      {/* Scrollable System Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {systems.map((system) => {
          const isActive = system.id === activeSystemId;
          return (
            <button
              key={system.id}
              id={`tab-system-${system.id}`}
              onClick={() => onSelectSystem(system.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                isActive
                  ? 'bg-slate-800 text-white border-cyan-500/80 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/40'
                  : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 border-slate-800'
              }`}
            >
              <span
                className="p-1 rounded-lg"
                style={{
                  backgroundColor: isActive ? `${system.accentColor}25` : '#1e293b',
                  color: system.accentColor
                }}
              >
                {getIcon(system.id)}
              </span>
              <span>{system.name[language]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

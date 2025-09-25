import React from 'react';

interface IconProps {
    className?: string;
}

export const ScienceIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="sciGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
        </defs>
        <path d="M9 3H15" stroke="#a7f3d0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3V9" stroke="#a7f3d0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 21C15.3137 21 18 18.3137 18 15V9H6V15C6 18.3137 8.68629 21 12 21Z" fill="url(#sciGrad)" fillOpacity="0.3" stroke="url(#sciGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 14h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 15h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 17h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

export const HistoryIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="histGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
        </defs>
        <path d="M8 3H16" stroke="url(#histGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 21H16" stroke="url(#histGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 3C8 3 6 3 6 7C6 11 8 11 8 11" stroke="url(#histGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3C16 3 18 3 18 7C18 11 16 11 16 11" stroke="url(#histGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 21C8 21 6 21 6 17C6 13 8 13 8 13" stroke="url(#histGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 21C16 21 18 21 18 17C18 13 16 13 16 13" stroke="url(#histGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 7H18" stroke="#fef3c7" strokeWidth="1.5"/>
        <path d="M6 17H18" stroke="#fef3c7" strokeWidth="1.5"/>
        <path d="M10 11h4" stroke="#fef3c7" strokeWidth="1" strokeLinecap="round"/>
    </svg>
);

export const MathIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="mathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="4" fill="url(#mathGrad)" fillOpacity="0.2" stroke="url(#mathGrad)" strokeWidth="2"/>
        <path d="M9 12h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 9v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 8l-8 8" stroke="#e0f2fe" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 16l-8-8" stroke="#e0f2fe" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export const LiteratureIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="litGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f9a8d4" />
                <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
        </defs>
        <path d="M12 3.25C12 3.25 4 2 4 11.25C4 20.5 12 21.25 12 21.25" fill="white" fillOpacity="0.1" stroke="url(#litGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3.25C12 3.25 20 2 20 11.25C20 20.5 12 21.25 12 21.25" fill="white" fillOpacity="0.1" stroke="url(#litGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 9h3m-3 4h3" stroke="#e9d5ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 9h3m-3 4h3" stroke="#e9d5ff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const GeographyIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="geoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="10" fill="url(#geoGrad)" fillOpacity="0.8"/>
        <path d="M8 15C8.91667 15.3333 10.5 16.5 11 16C12.4 14.2 13.5 10 14.5 9C15.5 8 16.5 8.5 16 9.5C15.5 10.5 13.5 12 12.5 13C11.5 14 10.5 15.5 11 16" stroke="#dcfce7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 10C8.5 9 9.5 7.5 9 7C8.5 6.5 7.5 6.5 7 7.5C6.5 8.5 6 9.5 7.5 10Z" stroke="#dcfce7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ArtIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="artGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fca5a5" />
                <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
        </defs>
        <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="url(#artGrad)" fillOpacity="0.7"/>
        <path d="M16 8C16.5523 8 17 7.55228 17 7C17 6.44772 16.5523 6 16 6C15.4477 6 15 6.44772 15 7C15 7.55228 15.4477 8 16 8Z" fill="#22c55e"/>
        <path d="M9 9C9.55228 9 10 8.55228 10 8C10 7.44772 9.55228 7 9 7C8.44772 7 8 7.44772 8 8C8 8.55228 8.44772 9 9 9Z" fill="#3b82f6"/>
        <path d="M8 15C8.55228 15 9 14.5523 9 14C9 13.4477 8.55228 13 8 13C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15Z" fill="#facc15"/>
        <path d="M15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14C14 14.5523 14.4477 15 15 15Z" fill="#a855f7"/>
    </svg>
);

export const BiologyIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6ee7b7" />
                <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
        </defs>
        <path d="M9 4.11C9 4.11 4 7.23 4 12C4 16.77 9 19.89 9 19.89" stroke="url(#bioGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 4.11C15 4.11 20 7.23 20 12C20 16.77 15 19.89 15 19.89" stroke="url(#bioGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.08984 8H17.9098" stroke="#a7f3d0" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6.08984 16H17.9098" stroke="#a7f3d0" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8.27051 12H15.7305" stroke="#a7f3d0" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export const ChemistryIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="chemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5eead4" />
                <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
        </defs>
        <path d="M9 3h6" stroke="#a7f3d0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 3v6l-4 9h12l-4-9V3" stroke="url(#chemGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12h8" stroke="#99f6e4" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export const ForeignLanguageIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="langGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
        </defs>
        <path d="M8.5 11H15.5" stroke="url(#langGrad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8.5V15.5" stroke="url(#langGrad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white" fillOpacity="0.1" stroke="url(#langGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12H22" stroke="url(#langGrad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2C14.5013 4.46161 15.912 8.05191 16 12C15.912 15.9481 14.5013 19.5384 12 22C9.49872 19.5384 8.08796 15.9481 8 12C8.08796 8.05191 9.49872 4.46161 12 2Z" fill="white" fillOpacity="0.1" stroke="url(#langGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const PhysicsIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="phyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="2" fill="url(#phyGrad)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="url(#phyGrad)" strokeWidth="2"/>
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#c4b5fd" strokeWidth="1.5" strokeDasharray="3 3"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#ddd6fe" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)" stroke="#ddd6fe" strokeWidth="1.5"/>
    </svg>
);

export const SocialSciencesIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="socGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <linearGradient id="socGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fdba74" />
                <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
        </defs>
        <circle cx="12" cy="7" r="4" fill="url(#socGrad)" />
        <path d="M5.5 21V19C5.5 16.5147 7.51472 14.5 10 14.5H14C16.4853 14.5 18.5 16.5147 18.5 19V21" fill="url(#socGrad)"/>
        <circle cx="6" cy="11" r="3" fill="url(#socGrad2)" />
        <path d="M1.5 21V19.5C1.5 17.567 3.067 16 5 16H7" stroke="url(#socGrad2)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="11" r="3" fill="url(#socGrad2)" />
        <path d="M22.5 21V19.5C22.5 17.567 20.933 16 19 16H17" stroke="url(#socGrad2)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

export const ValuesIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="valGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fcd34d" />
                <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
        </defs>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="url(#valGrad)" stroke="#fef3c7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15V12C12 10.8954 12.8954 10 14 10C15.1046 10 16 10.8954 16 12" stroke="#4d7c0f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15C10.5 15 9 16 8 17" stroke="#4d7c0f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const EduBotIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18C11.45 18 11 17.55 11 17V16C11 15.45 11.45 15 12 15C12.55 15 13 15.45 13 16V17C13 17.55 12.55 18 12 18ZM13 13.5C13 14.33 12.33 15 11.5 15H10V13H12V11H10V9H11.5C12.33 9 13 9.67 13 10.5V11.5C13 12.33 12.33 13 11.5 13H11V13.5H13ZM10 7C10 6.45 9.55 6 9 6C8.45 6 8 6.45 8 7V8C8 8.55 8.45 9 9 9C9.55 9 10 8.55 10 8V7ZM16 7C16 6.45 15.55 6 15 6C14.45 6 14 6.45 14 7V8C14 8.55 14.45 9 15 9C15.55 9 16 8.55 16 8V7Z" fill="url(#paint0_linear_1_2)"/>
        <defs>
            <linearGradient id="paint0_linear_1_2" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#818cf8"/>
                <stop offset="1" stopColor="#38bdf8"/>
            </linearGradient>
        </defs>
    </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M18 21a6 6 0 0 0-12 0" />
    </svg>
);


export const SendIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
);

export const BackArrowIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={`w-8 h-8 ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
);

export const ResetIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-4.991-2.696L19.015 5.182a8.25 8.25 0 00-11.664 0L2.985 9.855z" />
    </svg>
);

export const HomeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.5 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
    </svg>
);

export const SubjectsIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25v2.25A2.25 2.25 0 018.25 20.25H6a2.25 2.25 0 01-2.25-2.25v-2.25zM13.5 6A2.25 2.25 0 0115.75 3.75h2.25A2.25 2.25 0 0120.25 6v2.25a2.25 2.25 0 01-2.25 2.25h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75A2.25 2.25 0 0115.75 13.5h2.25a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
    </svg>
);

export const RocketIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a6 6 0 01-2.56 5.84m-2.56-5.84a6 6 0 017.38-5.84m-7.38 5.84L5.93 19.81m9.66-5.44L19.81 5.93m0 0L21.23 2.19l-3.74 1.42-2.56 2.56-1.42 3.74z" />
    </svg>
);

export const GameControllerIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h.01M12 12h.01M18 12h.01M7 15h.01M11 15h2M17 15h.01M4 12a8 8 0 018-8v0a8 8 0 018 8v0a8 8 0 01-8 8v0a8 8 0 01-8-8v0z" />
    </svg>
);


// Grade Icons
export const Grade1Icon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#A5B4FC"/><stop offset="100%" stopColor="#6366F1"/></linearGradient></defs>
    <circle cx="32" cy="32" r="28" fill="url(#g1)" fillOpacity="0.2"/>
    <text x="32" y="42" textAnchor="middle" fontSize="32" fontWeight="bold" fill="url(#g1)" style={{filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))'}}>1</text>
  </svg>
);
export const Grade2Icon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7DD3FC"/><stop offset="100%" stopColor="#0EA5E9"/></linearGradient></defs>
    <circle cx="32" cy="32" r="28" fill="url(#g2)" fillOpacity="0.2"/>
    <text x="32" y="42" textAnchor="middle" fontSize="32" fontWeight="bold" fill="url(#g2)" style={{filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))'}}>2</text>
  </svg>
);
export const Grade3Icon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#6EE7B7"/><stop offset="100%" stopColor="#10B981"/></linearGradient></defs>
    <circle cx="32" cy="32" r="28" fill="url(#g3)" fillOpacity="0.2"/>
    <text x="32" y="42" textAnchor="middle" fontSize="32" fontWeight="bold" fill="url(#g3)" style={{filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))'}}>3</text>
  </svg>
);
export const Grade4Icon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FCD34D"/><stop offset="100%" stopColor="#FBBF24"/></linearGradient></defs>
    <circle cx="32" cy="32" r="28" fill="url(#g4)" fillOpacity="0.2"/>
    <text x="32" y="42" textAnchor="middle" fontSize="32" fontWeight="bold" fill="url(#g4)" style={{filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))'}}>4</text>
  </svg>
);
export const Grade5Icon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FDBA74"/><stop offset="100%" stopColor="#FB923C"/></linearGradient></defs>
    <circle cx="32" cy="32" r="28" fill="url(#g5)" fillOpacity="0.2"/>
    <text x="32" y="42" textAnchor="middle" fontSize="32" fontWeight="bold" fill="url(#g5)" style={{filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))'}}>5</text>
  </svg>
);
export const Grade6Icon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FCA5A5"/><stop offset="100%" stopColor="#F87171"/></linearGradient></defs>
    <circle cx="32" cy="32" r="28" fill="url(#g6)" fillOpacity="0.2"/>
    <text x="32" y="42" textAnchor="middle" fontSize="32" fontWeight="bold" fill="url(#g6)" style={{filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))'}}>6</text>
  </svg>
);
export const Grade7Icon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#F9A8D4"/><stop offset="100%" stopColor="#F472B6"/></linearGradient></defs>
    <circle cx="32" cy="32" r="28" fill="url(#g7)" fillOpacity="0.2"/>
    <text x="32" y="42" textAnchor="middle" fontSize="32" fontWeight="bold" fill="url(#g7)" style={{filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))'}}>7</text>
  </svg>
);
export const Grade8Icon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g8" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#C4B5FD"/><stop offset="100%" stopColor="#A78BFA"/></linearGradient></defs>
    <circle cx="32" cy="32" r="28" fill="url(#g8)" fillOpacity="0.2"/>
    <text x="32" y="42" textAnchor="middle" fontSize="32" fontWeight="bold" fill="url(#g8)" style={{filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))'}}>8</text>
  </svg>
);
export const Grade9Icon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g9" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#93C5FD"/><stop offset="100%" stopColor="#60A5FA"/></linearGradient></defs>
    <circle cx="32" cy="32" r="28" fill="url(#g9)" fillOpacity="0.2"/>
    <text x="32" y="42" textAnchor="middle" fontSize="32" fontWeight="bold" fill="url(#g9)" style={{filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))'}}>9</text>
  </svg>
);
export const Grade10Icon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g10" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4ADE80"/><stop offset="100%" stopColor="#22C55E"/></linearGradient></defs>
    <circle cx="32" cy="32" r="28" fill="url(#g10)" fillOpacity="0.2"/>
    <text x="32" y="42" textAnchor="middle" fontSize="28" fontWeight="bold" fill="url(#g10)" style={{filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))'}}>10</text>
  </svg>
);
export const Grade11Icon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g11" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#F43F5E"/><stop offset="100%" stopColor="#E11D48"/></linearGradient></defs>
    <circle cx="32" cy="32" r="28" fill="url(#g11)" fillOpacity="0.2"/>
    <text x="32" y="42" textAnchor="middle" fontSize="28" fontWeight="bold" fill="url(#g11)" style={{filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))'}}>11</text>
  </svg>
);
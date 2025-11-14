export default function HandWave() {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Sleeve */}
        <ellipse cx="200" cy="500" rx="80" ry="120" fill="#7BA7B5" />
        <rect x="120" y="400" width="160" height="200" fill="#7BA7B5" rx="80" />
        
        {/* Hand base */}
        <ellipse cx="200" cy="300" rx="70" ry="90" fill="#C08B5C" />
        
        {/* Thumb */}
        <ellipse cx="140" cy="280" rx="28" ry="45" fill="#C08B5C" transform="rotate(-20 140 280)" />
        <ellipse cx="125" cy="240" rx="22" ry="40" fill="#B07A4C" transform="rotate(-25 125 240)" />
        
        {/* Index finger */}
        <ellipse cx="165" cy="180" rx="20" ry="60" fill="#C08B5C" transform="rotate(-10 165 180)" />
        <ellipse cx="160" cy="120" rx="18" ry="45" fill="#B07A4C" transform="rotate(-8 160 120)" />
        <ellipse cx="158" cy="80" rx="16" ry="35" fill="#A86A3C" transform="rotate(-5 158 80)" />
        
        {/* Middle finger */}
        <ellipse cx="200" cy="160" rx="20" ry="65" fill="#C08B5C" />
        <ellipse cx="200" cy="100" rx="18" ry="50" fill="#B07A4C" />
        <ellipse cx="200" cy="55" rx="16" ry="38" fill="#A86A3C" />
        
        {/* Ring finger */}
        <ellipse cx="235" cy="180" rx="19" ry="62" fill="#C08B5C" transform="rotate(10 235 180)" />
        <ellipse cx="240" cy="120" rx="17" ry="48" fill="#B07A4C" transform="rotate(12 240 120)" />
        <ellipse cx="243" cy="78" rx="15" ry="36" fill="#A86A3C" transform="rotate(15 243 78)" />
        
        {/* Pinky */}
        <ellipse cx="265" cy="210" rx="17" ry="55" fill="#C08B5C" transform="rotate(20 265 210)" />
        <ellipse cx="275" cy="160" rx="15" ry="42" fill="#B07A4C" transform="rotate(22 275 160)" />
        <ellipse cx="282" cy="125" rx="13" ry="32" fill="#A86A3C" transform="rotate(25 282 125)" />
      </svg>
    </div>
  );
}

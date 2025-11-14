export default function HandPoint() {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Sleeve - angled */}
        <ellipse cx="450" cy="280" rx="120" ry="70" fill="#7BA7B5" transform="rotate(-35 450 280)" />
        
        {/* Forearm */}
        <rect x="350" y="200" width="250" height="120" fill="#7BA7B5" rx="60" transform="rotate(-35 475 260)" />
        
        {/* Hand base */}
        <ellipse cx="250" cy="200" rx="80" ry="60" fill="#C08B5C" transform="rotate(-25 250 200)" />
        
        {/* Fingers (curled) */}
        {/* Pinky */}
        <ellipse cx="280" cy="240" rx="18" ry="35" fill="#B07A4C" transform="rotate(45 280 240)" />
        
        {/* Ring */}
        <ellipse cx="260" cy="250" rx="18" ry="38" fill="#B07A4C" transform="rotate(35 260 250)" />
        
        {/* Middle */}
        <ellipse cx="235" cy="255" rx="19" ry="40" fill="#B07A4C" transform="rotate(25 235 255)" />
        
        {/* Index - extended pointing */}
        <ellipse cx="200" cy="220" rx="20" ry="50" fill="#C08B5C" transform="rotate(-30 200 220)" />
        <ellipse cx="170" cy="195" rx="18" ry="42" fill="#B07A4C" transform="rotate(-32 170 195)" />
        <ellipse cx="145" cy="175" rx="16" ry="35" fill="#A86A3C" transform="rotate(-33 145 175)" />
        
        {/* Thumb */}
        <ellipse cx="230" cy="170" rx="25" ry="40" fill="#C08B5C" transform="rotate(-50 230 170)" />
      </svg>
    </div>
  );
}

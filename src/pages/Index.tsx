const parseDate = (d: string) => { const [day, , year] = d.split("."); return parseInt(year) * 100 + parseInt(day); };

const employees = [
  { name: "Соловьева Дарья Сергеевна", date: "06.06.2004" },
  { name: "Лоскутова Любовь Вадимовна", date: "02.06.1995" },
  { name: "Карпова Ольга Васильевна", date: "22.06.1985" },
  { name: "Карпова Наталья Александровна", date: "18.06.1984" },
  { name: "Кононенко Станислав Владимирович", date: "28.06.1978" },
  { name: "Корнев Алексей Николаевич", date: "23.06.1978" },
  { name: "Аликова Наталья Николаевна", date: "01.06.1978" },
  { name: "Роднина Евгения Владиславовна", date: "06.06.1975" },
  { name: "Спыну Алла Владимировна", date: "23.06.1970" },
  { name: "Константинова Светлана Владимировна", date: "14.06.1970" },
  { name: "Гудкова Светлана Вениаминовна", date: "04.06.1968" },
  { name: "Рапопорт Елена Николаевна", date: "10.06.1968" },
  { name: "Двас Семен Михайлович", date: "14.06.1960" },
  { name: "Дремина Елена Дмитриевна", date: "17.06.1958" },
  { name: "Коровин Валерий Владимирович", date: "06.06.1958" },
  { name: "Плискин Марк Яковлевич", date: "08.06.1956" },
  { name: "Битюгова Ирина Эриковна", date: "04.06.1951" },
].sort((a, b) => parseDate(b.date) - parseDate(a.date));

const BADGE_COLORS = [
  "#e63329", "#1a2a6c", "#2e7d32", "#f57c00", "#6a1b9a",
  "#00838f", "#c62828", "#283593", "#4e342e", "#37474f",
];

const SUNBEAM_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

function Sun() {
  return (
    <div style={{
      position: "absolute",
      top: "20px",
      right: "20px",
      pointerEvents: "none",
      zIndex: 1,
    }}>
      <svg width="68" height="68" viewBox="0 0 68 68" fill="none"
        style={{ animation: "spinSun 14s linear infinite" }}>
        {SUNBEAM_ANGLES.map((angle, i) => {
          const r1 = 20, r2 = i % 2 === 0 ? 30 : 27;
          const rad = angle * Math.PI / 180;
          return (
            <line key={i}
              x1={34 + Math.cos(rad) * r1} y1={34 + Math.sin(rad) * r1}
              x2={34 + Math.cos(rad) * r2} y2={34 + Math.sin(rad) * r2}
              stroke="#FFD700" strokeWidth={i % 2 === 0 ? "3" : "1.8"}
              strokeLinecap="round" opacity="0.9"
            />
          );
        })}
        <circle cx="34" cy="34" r="16" fill="#FFD700" />
        <circle cx="34" cy="34" r="12" fill="#FFA500" opacity="0.45" />
        <circle cx="29" cy="30" r="3" fill="white" opacity="0.35" />
      </svg>
    </div>
  );
}

function Cloud({ x, y, scaleC, duration, delay }: { x: number; y: number; scaleC: number; duration: number; delay: number }) {
  return (
    <div style={{
      position: "absolute",
      left: `${x}%`,
      top: `${y}%`,
      transform: `scale(${scaleC})`,
      transformOrigin: "left center",
      animation: `driftCloud ${duration}s linear ${delay}s infinite`,
      pointerEvents: "none",
      opacity: 0.5,
      zIndex: 1,
    }}>
      <svg width="100" height="44" viewBox="0 0 100 44" fill="none">
        <ellipse cx="50" cy="32" rx="44" ry="14" fill="white" />
        <ellipse cx="34" cy="26" rx="22" ry="18" fill="white" />
        <ellipse cx="63" cy="24" rx="20" ry="16" fill="white" />
        <ellipse cx="48" cy="18" rx="18" ry="15" fill="white" />
      </svg>
    </div>
  );
}

function Butterfly({ x, top, delay, scaleB }: { x: number; top: number; delay: number; scaleB: number }) {
  return (
    <div style={{
      position: "absolute",
      left: `${x}%`,
      top: `${top}%`,
      transform: `scale(${scaleB})`,
      animation: `flyButterfly 7s ease-in-out ${delay}s infinite`,
      pointerEvents: "none",
      zIndex: 1,
    }}>
      <svg width="30" height="22" viewBox="0 0 30 22" fill="none">
        <ellipse cx="7" cy="9" rx="6.5" ry="8.5" fill="#FF69B4" opacity="0.8" transform="rotate(-20 7 9)" />
        <ellipse cx="23" cy="9" rx="6.5" ry="8.5" fill="#FF69B4" opacity="0.8" transform="rotate(20 23 9)" />
        <ellipse cx="7" cy="15" rx="4.5" ry="5.5" fill="#FFD700" opacity="0.65" transform="rotate(10 7 15)" />
        <ellipse cx="23" cy="15" rx="4.5" ry="5.5" fill="#FFD700" opacity="0.65" transform="rotate(-10 23 15)" />
        <line x1="15" y1="4" x2="15" y2="21" stroke="#555" strokeWidth="1.2" />
        <path d="M15 4 Q12 1 10 2.5" stroke="#555" strokeWidth="1" fill="none" />
        <path d="M15 4 Q18 1 20 2.5" stroke="#555" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}

function Sunflower({ x, delay, scaleF }: { x: number; delay: number; scaleF: number }) {
  const petalAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <div style={{
      position: "absolute",
      left: `${x}%`,
      bottom: "10px",
      transform: `scale(${scaleF})`,
      transformOrigin: "bottom center",
      animation: `sway 3.5s ease-in-out ${delay}s infinite alternate`,
      pointerEvents: "none",
      zIndex: 1,
    }}>
      <svg width="34" height="54" viewBox="0 0 34 54" fill="none">
        <rect x="15" y="18" width="4" height="36" rx="2" fill="#388e3c" />
        <path d="M17 32 Q9 30 7 24" stroke="#388e3c" strokeWidth="2" fill="none" />
        <ellipse cx="7" cy="22" rx="5.5" ry="3" fill="#43a047" transform="rotate(-25 7 22)" />
        {petalAngles.map((a, i) => {
          const rad = a * Math.PI / 180;
          return (
            <ellipse key={i}
              cx={17 + Math.cos(rad) * 8} cy={13 + Math.sin(rad) * 8}
              rx="3.5" ry="2.2" fill="#FFD700"
              transform={`rotate(${a} ${17 + Math.cos(rad) * 8} ${13 + Math.sin(rad) * 8})`}
            />
          );
        })}
        <circle cx="17" cy="13" r="5.5" fill="#5d4037" />
        <circle cx="17" cy="13" r="3.5" fill="#4e342e" />
        <circle cx="15" cy="11" r="1" fill="rgba(255,255,255,0.2)" />
      </svg>
    </div>
  );
}

function Leaf({ i }: { i: number }) {
  const colors = ["#66BB6A", "#81C784", "#A5D6A7", "#FFD54F", "#8BC34A", "#4CAF50", "#FFCA28"];
  const color = colors[i % colors.length];
  const left = ((i * 61 + 9) % 96) + 1;
  const delay = (i * 0.45) % 6;
  const duration = 5 + (i % 4);
  return (
    <div style={{
      position: "absolute",
      left: `${left}%`,
      top: "-22px",
      animation: `leafFall ${duration}s ease-in ${delay}s infinite`,
      pointerEvents: "none",
      zIndex: 1,
    }}>
      <svg width="13" height="17" viewBox="0 0 13 17" fill="none">
        <path d="M6.5 1 Q12 5 11 11 Q10 16 6.5 17 Q3 16 2 11 Q1 5 6.5 1Z" fill={color} opacity="0.82" />
        <line x1="6.5" y1="2" x2="6.5" y2="16" stroke="rgba(0,80,0,0.18)" strokeWidth="0.7" />
        <path d="M6.5 6 Q9 7.5 10 10" stroke="rgba(0,80,0,0.12)" strokeWidth="0.6" fill="none" />
        <path d="M6.5 10 Q4 11 3 13" stroke="rgba(0,80,0,0.12)" strokeWidth="0.6" fill="none" />
      </svg>
    </div>
  );
}

const CLOUDS = [
  { x: -12, y: 8, scaleC: 1, duration: 30, delay: 0 },
  { x: -20, y: 22, scaleC: 0.65, duration: 24, delay: 8 },
  { x: -8, y: 4, scaleC: 0.5, duration: 38, delay: 14 },
];

const BUTTERFLIES = [
  { x: 6, top: 22, delay: 0, scaleB: 1 },
  { x: 22, top: 35, delay: 1.5, scaleB: 0.75 },
  { x: 68, top: 18, delay: 0.7, scaleB: 0.9 },
  { x: 83, top: 30, delay: 2.1, scaleB: 1.1 },
  { x: 94, top: 14, delay: 0.4, scaleB: 0.8 },
];

const SUNFLOWERS = [
  { x: 1, delay: 0, scaleF: 1 },
  { x: 8, delay: 0.6, scaleF: 0.8 },
  { x: 88, delay: 0.3, scaleF: 0.9 },
  { x: 94, delay: 1.0, scaleF: 1.05 },
];

export default function Index() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #e0f7fa 0%, #fffde7 55%, #f1f8e9 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 16px",
      fontFamily: "'Golos Text', sans-serif",
    }}>
      <style>{`
        @keyframes spinSun {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes driftCloud {
          0% { transform: translateX(0) scale(var(--s,1)); opacity: 0; }
          5% { opacity: 0.5; }
          95% { opacity: 0.5; }
          100% { transform: translateX(900px) scale(var(--s,1)); opacity: 0; }
        }
        @keyframes flyButterfly {
          0%   { transform: translateX(0) translateY(0) scale(1); }
          20%  { transform: translateX(18px) translateY(-14px) scale(1.05); }
          40%  { transform: translateX(8px) translateY(-6px) scale(0.97); }
          60%  { transform: translateX(-14px) translateY(-18px) scale(1.03); }
          80%  { transform: translateX(-6px) translateY(-8px) scale(1); }
          100% { transform: translateX(0) translateY(0) scale(1); }
        }
        @keyframes sway {
          0%   { transform: rotate(-4deg) scale(var(--sf, 1)); }
          100% { transform: rotate(4deg) scale(var(--sf, 1)); }
        }
        @keyframes leafFall {
          0%   { transform: translateY(-10px) rotate(0deg); opacity: 0.9; }
          100% { transform: translateY(1150px) rotate(540deg); opacity: 0; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-elem {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50%       { transform: scale(1.25); opacity: 0.65; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .row-hover:hover {
          background: rgba(46,125,50,0.07) !important;
          transition: background 0.2s;
        }
      `}</style>

      {/* А4 лист */}
      <div style={{
        width: "794px",
        minHeight: "1123px",
        background: "#fff",
        boxShadow: "0 10px 64px rgba(46,125,50,0.14), 0 2px 14px rgba(0,0,0,0.07)",
        borderRadius: "6px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        animation: "fadeInUp 0.65s ease both",
      }}>

        {/* Облака */}
        {CLOUDS.map((c, i) => <Cloud key={i} {...c} />)}

        {/* Бабочки */}
        {BUTTERFLIES.map((b, i) => <Butterfly key={i} {...b} />)}

        {/* Летящие листья */}
        {Array.from({ length: 18 }).map((_, i) => <Leaf key={i} i={i} />)}

        {/* Солнце */}
        <Sun />

        {/* Верхняя полоса — летний градиент */}
        <div style={{
          height: "10px",
          background: "linear-gradient(90deg, #1a2a6c, #2e7d32, #FFD700, #e63329, #2e7d32, #1a2a6c)",
          backgroundSize: "200% auto",
          animation: "shimmer 4s linear infinite",
          flexShrink: 0,
          position: "relative",
          zIndex: 3,
        }} />

        {/* Подсолнухи снизу */}
        <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, height: "80px", zIndex: 2, pointerEvents: "none" }}>
          {SUNFLOWERS.map((f, i) => <Sunflower key={i} {...f} />)}
        </div>

        {/* Контент */}
        <div style={{
          flex: 1,
          padding: "36px 52px 100px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 4,
        }}>

          {/* Логотип */}
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "28px" }}>
            <img
              src="https://cdn.poehali.dev/files/78f7c97c-fddb-4612-8022-43c9e34d60c6.jpg"
              alt="Энерго Технология"
              style={{ height: "64px", objectFit: "contain" }}
            />
          </div>

          {/* Hero-блок */}
          <div style={{
            background: "linear-gradient(135deg, #1a2a6c 0%, #1565c0 50%, #2e7d32 100%)",
            borderRadius: "18px",
            padding: "32px 40px",
            marginBottom: "28px",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}>
            {/* Летние символы слева */}
            {["☀️", "🌻", "🦋", "🌿", "🍀"].map((s, i) => (
              <span key={i} style={{
                position: "absolute",
                fontSize: i % 2 === 0 ? "20px" : "15px",
                top: `${12 + (i * 16) % 62}%`,
                left: `${2 + i * 5}%`,
                animation: `pulse-elem ${1.6 + i * 0.4}s ease-in-out ${i * 0.3}s infinite`,
                opacity: 0.75,
              }}>{s}</span>
            ))}
            {/* Летние символы справа */}
            {["🌺", "🎂", "🌸", "🍃"].map((s, i) => (
              <span key={i} style={{
                position: "absolute",
                fontSize: "17px",
                top: `${18 + (i * 19) % 56}%`,
                right: `${2 + i * 6}%`,
                animation: `pulse-elem ${1.9 + i * 0.3}s ease-in-out ${i * 0.25}s infinite`,
                opacity: 0.7,
              }}>{s}</span>
            ))}

            <div style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.72)",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}>
              Уважаемые коллеги!
            </div>

            <h1 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: "32px",
              color: "#fff",
              lineHeight: 1.15,
              margin: "0 0 8px",
              textShadow: "0 2px 14px rgba(0,0,0,0.3)",
            }}>
              🌻 Поздравляем именинников
            </h1>

            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: "46px",
              background: "linear-gradient(90deg, #FFD700, #FFA500, #FFD700)",
              backgroundSize: "200% auto",
              animation: "shimmer 2.5s linear infinite",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "6px",
            }}>
              ИЮНЯ!
            </div>

            <div style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              fontFamily: "'Golos Text', sans-serif",
              marginTop: "8px",
              letterSpacing: "1px",
            }}>
              Тёплого лета, здоровья и профессиональных успехов! ☀️
            </div>
          </div>

          {/* Таблица */}
          <div style={{
            flex: 1,
            background: "linear-gradient(180deg, #f9fff5 0%, #fffde7 100%)",
            borderRadius: "14px",
            overflow: "hidden",
            border: "2px solid rgba(46,125,50,0.13)",
          }}>
            {/* Шапка */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              background: "linear-gradient(90deg, #2e7d32, #388e3c)",
              padding: "13px 24px",
              gap: "16px",
            }}>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                color: "rgba(255,255,255,0.92)",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}>Сотрудник</div>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                color: "rgba(255,255,255,0.92)",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}>Дата рождения</div>
            </div>

            {/* Строки */}
            {employees.map((emp, i) => (
              <div
                key={i}
                className="row-hover"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  padding: "11px 24px",
                  gap: "16px",
                  borderBottom: i < employees.length - 1
                    ? "1px solid rgba(46,125,50,0.08)"
                    : "none",
                  background: i % 2 === 0 ? "transparent" : "rgba(46,125,50,0.03)",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: `${BADGE_COLORS[i % BADGE_COLORS.length]}18`,
                    border: `2px solid ${BADGE_COLORS[i % BADGE_COLORS.length]}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: BADGE_COLORS[i % BADGE_COLORS.length],
                    flexShrink: 0,
                    fontFamily: "'Montserrat', sans-serif",
                  }}>
                    {i + 1}
                  </span>
                  <span style={{
                    fontFamily: "'Golos Text', sans-serif",
                    fontWeight: 500,
                    fontSize: "13.5px",
                    color: "#1a2a3c",
                  }}>
                    {emp.name}
                  </span>
                </div>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "12.5px",
                  color: "#2e7d32",
                  whiteSpace: "nowrap",
                  background: "rgba(46,125,50,0.10)",
                  padding: "4px 11px",
                  borderRadius: "20px",
                }}>
                  🌻 {emp.date}
                </div>
              </div>
            ))}
          </div>

          {/* Нижняя декорация */}
          <div style={{
            textAlign: "center",
            marginTop: "18px",
            fontSize: "20px",
            letterSpacing: "7px",
          }}>
            ☀️ 🌻 🦋 🌿 🌸 🍃 🌺
          </div>
        </div>

        {/* Нижняя полоса */}
        <div style={{
          height: "10px",
          background: "linear-gradient(90deg, #2e7d32, #1a2a6c, #FFD700, #e63329, #2e7d32)",
          backgroundSize: "200% auto",
          animation: "shimmer 4s linear infinite",
          flexShrink: 0,
          position: "relative",
          zIndex: 5,
        }} />
      </div>
    </div>
  );
}
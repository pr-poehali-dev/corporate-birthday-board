import { useEffect, useRef } from "react";

const employees = [
  { name: "Аликова Наталья Николаевна", date: "01.06.1978" },
  { name: "Гудкова Светлана Вениаминовна", date: "04.06.1968" },
  { name: "Двас Семен Михайлович", date: "14.06.1960" },
  { name: "Дремина Елена Дмитриевна", date: "17.06.1958" },
  { name: "Карпова Наталья Александровна", date: "18.06.1984" },
  { name: "Карпова Ольга Васильевна", date: "22.06.1985" },
  { name: "Кононенко Станислав Владимирович", date: "28.06.1978" },
  { name: "Константинова Светлана Владимировна", date: "14.06.1970" },
  { name: "Корнев Алексей Николаевич", date: "23.06.1978" },
  { name: "Коровин Валерий Владимирович", date: "06.06.1958" },
  { name: "Лоскутова Любовь Вадимовна", date: "02.06.1995" },
  { name: "Плискин Марк Яковлевич", date: "08.06.1956" },
  { name: "Рапопорт Елена Николаевна", date: "10.06.1968" },
  { name: "Роднина Евгения Владиславовна", date: "06.06.1975" },
  { name: "Соловьева Дарья Сергеевна", date: "06.06.2004" },
  { name: "Спыну Алла Владимировна", date: "23.06.1970" },
  { name: "Битюгова Ирина Эриковна", date: "04.06.1951" },
];

const CONFETTI_COLORS = [
  "#e63329", "#1a2a6c", "#FFD700", "#FF69B4", "#00C9A7",
  "#FF6B35", "#A855F7", "#22D3EE", "#F59E0B", "#10B981",
];

const BALLOONS = [
  { color: "#e63329", x: 4, delay: 0 },
  { color: "#FFD700", x: 12, delay: 0.8 },
  { color: "#1a2a6c", x: 82, delay: 0.4 },
  { color: "#FF69B4", x: 90, delay: 1.2 },
  { color: "#00C9A7", x: 96, delay: 0.2 },
  { color: "#e63329", x: 50, delay: 1.5 },
];

function Balloon({ color, x, delay }: { color: string; x: number; delay: number }) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        bottom: "-10px",
        animation: `floatBalloon 4s ease-in-out ${delay}s infinite alternate`,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <svg width="38" height="56" viewBox="0 0 38 56" fill="none">
        <ellipse cx="19" cy="20" rx="16" ry="19" fill={color} opacity="0.88" />
        <path d="M19 39 Q21 44 19 48" stroke={color} strokeWidth="1.5" fill="none" />
        <ellipse cx="13" cy="13" rx="4" ry="6" fill="white" opacity="0.18" />
        <line x1="19" y1="48" x2="16" y2="56" stroke="#999" strokeWidth="1" />
        <line x1="19" y1="48" x2="22" y2="56" stroke="#999" strokeWidth="1" />
      </svg>
    </div>
  );
}

function ConfettiPiece({ i }: { i: number }) {
  const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
  const left = ((i * 37 + 13) % 97) + 1;
  const size = 5 + (i % 5);
  const delay = (i * 0.18) % 4;
  const duration = 3 + (i % 4);
  const shape = i % 3;
  return (
    <div
      style={{
        position: "absolute",
        left: `${left}%`,
        top: `-${size * 2}px`,
        width: `${size}px`,
        height: shape === 2 ? `${size * 2}px` : `${size}px`,
        borderRadius: shape === 0 ? "50%" : shape === 1 ? "2px" : "1px",
        background: color,
        opacity: 0.8,
        animation: `confettiFall ${duration}s linear ${delay}s infinite`,
        transform: `rotate(${i * 23}deg)`,
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}

export default function Index() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e8eeff 0%, #fff8f0 50%, #fff0f5 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
        fontFamily: "'Golos Text', sans-serif",
      }}
    >
      <style>{`
        @keyframes floatBalloon {
          0% { transform: translateY(0px) rotate(-3deg); }
          100% { transform: translateY(-22px) rotate(3deg); }
        }
        @keyframes confettiFall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0.9; }
          100% { transform: translateY(1200px) rotate(720deg); opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-star {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .row-hover:hover {
          background: rgba(230,51,41,0.06) !important;
          transition: background 0.2s;
        }
      `}</style>

      {/* А4 лист */}
      <div
        style={{
          width: "794px",
          minHeight: "1123px",
          background: "#fff",
          boxShadow: "0 8px 60px rgba(26,42,108,0.18), 0 2px 12px rgba(0,0,0,0.08)",
          borderRadius: "4px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          animation: "fadeInUp 0.6s ease both",
        }}
      >
        {/* Конфетти */}
        {Array.from({ length: 40 }).map((_, i) => (
          <ConfettiPiece key={i} i={i} />
        ))}

        {/* Верхняя полоса */}
        <div style={{
          height: "10px",
          background: "linear-gradient(90deg, #1a2a6c, #e63329, #FFD700, #e63329, #1a2a6c)",
          backgroundSize: "200% auto",
          animation: "shimmer 3s linear infinite",
          flexShrink: 0,
        }} />

        {/* Шары снизу */}
        <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, height: "80px", overflow: "hidden", zIndex: 0 }}>
          {BALLOONS.map((b, i) => <Balloon key={i} {...b} />)}
        </div>

        {/* Контент */}
        <div style={{ flex: 1, padding: "36px 52px 96px", display: "flex", flexDirection: "column", position: "relative", zIndex: 2 }}>

          {/* Логотип */}
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "28px" }}>
            <img
              src="https://cdn.poehali.dev/files/78f7c97c-fddb-4612-8022-43c9e34d60c6.jpg"
              alt="Энерго Технология"
              style={{ height: "64px", objectFit: "contain" }}
            />
          </div>

          {/* Заголовочная секция */}
          <div style={{
            background: "linear-gradient(135deg, #1a2a6c 0%, #2d3f8f 60%, #e63329 100%)",
            borderRadius: "16px",
            padding: "32px 40px",
            marginBottom: "28px",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}>
            {/* Декоративные звёзды слева */}
            {["⭐", "🌟", "✨", "🎉", "🎊"].map((s, i) => (
              <span key={i} style={{
                position: "absolute",
                fontSize: i % 2 === 0 ? "22px" : "16px",
                top: `${10 + (i * 17) % 60}%`,
                left: `${3 + i * 5}%`,
                animation: `pulse-star ${1.5 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                opacity: 0.7,
              }}>{s}</span>
            ))}
            {/* Декоративные звёзды справа */}
            {["🎈", "🎁", "🎂", "🎀"].map((s, i) => (
              <span key={i} style={{
                position: "absolute",
                fontSize: "18px",
                top: `${15 + (i * 21) % 55}%`,
                right: `${3 + i * 6}%`,
                animation: `pulse-star ${1.8 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                opacity: 0.65,
              }}>{s}</span>
            ))}

            <div style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.75)",
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
              fontSize: "34px",
              color: "#fff",
              lineHeight: 1.1,
              margin: "0 0 8px",
              textShadow: "0 2px 12px rgba(0,0,0,0.25)",
            }}>
              🎂 Поздравляем именинников
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
              Счастья, здоровья и профессиональных успехов! 🌟
            </div>
          </div>

          {/* Таблица */}
          <div style={{
            flex: 1,
            background: "linear-gradient(180deg, #f8f9ff 0%, #fff8f0 100%)",
            borderRadius: "12px",
            overflow: "hidden",
            border: "2px solid rgba(26,42,108,0.1)",
          }}>
            {/* Шапка таблицы */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              background: "linear-gradient(90deg, #1a2a6c, #2d3f8f)",
              padding: "12px 24px",
              gap: "16px",
            }}>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}>Сотрудник</div>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "2px",
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
                    ? "1px solid rgba(26,42,108,0.07)"
                    : "none",
                  background: i % 2 === 0 ? "transparent" : "rgba(26,42,108,0.025)",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: `${CONFETTI_COLORS[i % CONFETTI_COLORS.length]}22`,
                    border: `2px solid ${CONFETTI_COLORS[i % CONFETTI_COLORS.length]}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
                    flexShrink: 0,
                    fontFamily: "'Montserrat', sans-serif",
                  }}>
                    {i + 1}
                  </span>
                  <span style={{
                    fontFamily: "'Golos Text', sans-serif",
                    fontWeight: 500,
                    fontSize: "13.5px",
                    color: "#1a2a6c",
                  }}>
                    {emp.name}
                  </span>
                </div>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#e63329",
                  whiteSpace: "nowrap",
                  background: "rgba(230,51,41,0.08)",
                  padding: "4px 10px",
                  borderRadius: "20px",
                }}>
                  🎂 {emp.date}
                </div>
              </div>
            ))}
          </div>

          {/* Нижняя декорация */}
          <div style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "22px",
            letterSpacing: "8px",
          }}>
            🎈 🎉 🎊 🌟 🎁 🎀 🎈
          </div>
        </div>

        {/* Нижняя полоса */}
        <div style={{
          height: "10px",
          background: "linear-gradient(90deg, #e63329, #1a2a6c, #FFD700, #1a2a6c, #e63329)",
          backgroundSize: "200% auto",
          animation: "shimmer 3s linear infinite",
          flexShrink: 0,
          position: "relative",
          zIndex: 3,
        }} />
      </div>
    </div>
  );
}

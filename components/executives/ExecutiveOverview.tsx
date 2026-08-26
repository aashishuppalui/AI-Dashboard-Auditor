import type { ExecutiveIntelligence } from "../../schemas/context/executive-intelligence";
import type { DES } from "../../schemas/des";

interface ExecutiveOverviewProps {
  data: ExecutiveIntelligence;
  des: DES;
}

export default function ExecutiveOverview({
  data,
  des,
}: ExecutiveOverviewProps) {
  return (
    <section
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "12px",
        padding: "24px",
        marginBottom: "32px",
        background: "#ffffff",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          paddingBottom: "20px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          Executive Intelligence
        </h2>

        {/* DES */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            DES
          </span>

          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            {des.score}
          </span>

          <span
            style={{
              padding: "4px 10px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 600,
              background: "#f3f4f6",
            }}
          >
            {des.label}
          </span>
        </div>
      </div>

      {/* Two-column intelligence */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          marginTop: "24px",
        }}
      >
        {/* AI Understanding */}
        <div
          style={{
            paddingRight: "32px",
          }}
        >
          <h3
            style={{
              margin: "0 0 20px",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            AI Understanding
          </h3>

          {/* Interface */}
          <div style={{ marginBottom: "20px" }}>
            <p
              style={{
                margin: "0 0 6px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#6b7280",
              }}
            >
              Interface
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.5,
              }}
            >
              {data.interfaceType}
            </p>
          </div>

          {/* Primary Goal */}
          <div style={{ marginBottom: "20px" }}>
            <p
              style={{
                margin: "0 0 6px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#6b7280",
              }}
            >
              Primary Goal
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.5,
              }}
            >
              {data.primaryGoal}
            </p>
          </div>

          {/* Confidence */}
          <div>
            <p
              style={{
                margin: "0 0 6px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#6b7280",
              }}
            >
              Confidence
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.5,
              }}
            >
              {data.confidence}
            </p>
          </div>
        </div>

        {/* Decision Lens */}
        <div
          style={{
            paddingLeft: "32px",
            borderLeft: "1px solid #e5e7eb",
          }}
        >
          <h3
            style={{
              margin: "0 0 20px",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Decision Lens
          </h3>

          {/* Primary User */}
          <div style={{ marginBottom: "20px" }}>
            <p
              style={{
                margin: "0 0 6px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#6b7280",
              }}
            >
              Primary User
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.5,
              }}
            >
              {data.targetUsers.join(", ")}
            </p>
          </div>

          {/* Primary Decision */}
          <div style={{ marginBottom: "20px" }}>
            <p
              style={{
                margin: "0 0 6px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#6b7280",
              }}
            >
              Primary Decision
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.5,
              }}
            >
              {data.primaryDecision}
            </p>
          </div>

          {/* Decision Focus */}
          <div>
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#6b7280",
              }}
            >
              Decision Focus
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {data.decisionFocus.map((focus) => (
                <span
                  key={focus}
                  style={{
                    padding: "5px 9px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "999px",
                    fontSize: "12px",
                    lineHeight: 1.3,
                    background: "#f9fafb",
                  }}
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

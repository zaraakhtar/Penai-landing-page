const CONIC_GRADIENT = `conic-gradient(
  from 179.91deg at 49.93% 55.43%,
  rgba(27, 20, 29, 0.4)   -0.07deg,
  rgba(67, 33, 85, 0.4)    0.29deg,
  rgba(67, 33, 85, 0.4)    0.56deg,
  rgba(67, 33, 85, 0.4)   16.02deg,
  rgba(34, 21, 39, 0.4)  128.39deg,
  rgba(34, 21, 39, 0.4)  144.61deg,
  rgba(34, 21, 39, 0.4)  157.30deg,
  rgba(34, 21, 39, 0.4)  188.67deg,
  rgba(34, 21, 39, 0.4)  211.58deg,
  rgba(27, 20, 29, 0.4)  222.07deg,
  rgba(27, 20, 29, 0.4)  271.11deg,
  rgba(27, 20, 29, 0.4)  281.12deg,
  rgba(27, 20, 29, 0.4)  287.98deg,
  rgba(27, 20, 29, 0.4)  316.97deg,
  rgba(27, 20, 29, 0.4)  342.50deg,
  rgba(27, 20, 29, 0.4)  359.93deg,
  rgba(67, 33, 85, 0.4)  360.29deg
)`;

export default function AngularGradient() {
  return (
    <div
      id="angular-gradient-composition"
      className="pointer-events-none absolute"
      style={{
        width: "1454px",
        height: "1132px",
        left: "calc(50% - 1454px / 2)",
        top: "20px",
        zIndex: 0,
        isolation: "isolate",
      }}
    >
      {/* left angular */}
      <div
        style={{
          position: "absolute",
          left: "0%",
          right: "50%",
          top: "16.52%",
          bottom: "19.26%",
          background: CONIC_GRADIENT,
          transform: "rotate(-90deg)",
        }}
      />

      {/* right angular */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          right: "0%",
          top: "16.52%",
          bottom: "19.26%",
          background: CONIC_GRADIENT,
          transform: "matrix(0, -1, -1, 0, 0, 0)",
        }}
      />

      {/* blur bottom */}
      <div
        style={{
          position: "absolute",
          left: "-16.37%",
          right: "-15.54%",
          top: "59.89%",
          bottom: "0%",
          background: "rgba(0, 2, 18, 0.02)",
          filter: "blur(50px)",
          backdropFilter: "blur(117px)",
          WebkitBackdropFilter: "blur(117px)",
        }}
      />

      {/* blur top */}
      <div
        style={{
          position: "absolute",
          left: "-10.32%",
          right: "-9.35%",
          top: "3.98%",
          bottom: "51.94%",
          background: "rgba(0, 2, 18, 0.07)",
          filter: "blur(50px)",
          backdropFilter: "blur(123.95px)",
          WebkitBackdropFilter: "blur(123.95px)",
        }}
      />

      {/* extra glow */}
      <div
        style={{
          position: "absolute",
          left: "30.47%",
          right: "29.5%",
          top: "56.54%",
          bottom: "30.04%",
          background: "#505050",
          filter: "blur(105.5px)",
        }}
      />
    </div>
  );
}

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
    <>
      <div
        className="pointer-events-none absolute z-0"
        style={{
          width: "auto",
          height: "auto",
          top: "0",
          bottom: "0",
          left: "49.2%",
          right: "0",
          transform: "rotate(90deg) scaleX(-1)",
          background: CONIC_GRADIENT,
        }}
      />

      <div
        className="pointer-events-none absolute z-0"
        style={{
          width: "auto",
          height: "auto",
          top: "0",
          bottom: "0",
          left: "0",
          right: "49.2%",
          transform: "rotate(90deg) scaleX(-1) scaleY(-1)",
          background: CONIC_GRADIENT,
        }}
      />
    </>
  );
}

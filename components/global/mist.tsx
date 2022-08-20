export interface MistProps {}

const Mist: React.FC<MistProps> = (props) => {
  return (
    <div
      className="mist"
      style={{
        pointerEvents: "none",
        background:
          "linear-gradient(359.51deg, #000000 0.4%, rgba(0, 0, 0, 0) 28.56%);",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 20,
        bottom: 0,
        transition: "none",
      }}
    ></div>
  );
};

export default Mist;

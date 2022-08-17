import options from "../../templateConfig";

const DynamicBanner = () => {
  return (
    <div
      className="flex relative justify-center items-center p-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-6xl font-black bg-transparent">
        THE <br />
        EMULATION <br />
        AUTHORITY
      </h1>
      <img
        className="absolute z-10 top-0 right-0 p-6 bg-transparent"
        src={options?.community?.logo}
        alt="logo"
      />
    </div>
  );
};

export default DynamicBanner;

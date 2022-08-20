import { colorMap } from "../../templateConfig";

const ColorMap = () => {
  return (
    <div className="flex fixed bottom-0">
      {Object.keys(colorMap).map((key: string) => {
        return (
          <div
            key={key}
            className="flex justify-between p-5"
            style={{ backgroundColor: colorMap[key] }}
          >
            <h1 className="text-white font-bold uppercase">{key}</h1>
            {/* <h1 className="text-white font-bold uppercase">{colorMap.{Key}}</h1> */}
          </div>
        );
      })}
    </div>
  );
};

export default ColorMap;

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type Direction = "ltr" | "rtl";

type DirectionContextType = {
  direction: Direction;
  setDirection: (value: Direction) => void;
};

const DirectionContext = createContext<DirectionContextType | undefined>(
  undefined
);

export const DirectionProvider = ({ children }: { children: ReactNode }) => {
  const [direction, setDirectionState] = useState<Direction>("ltr");

  useEffect(() => {
    const saved = localStorage.getItem("direction") as Direction | null;
    if (saved) {
      setDirectionState(saved);
      document.documentElement.setAttribute("dir", saved);
      document.documentElement.setAttribute("data-dir", saved);
    }
  }, []);

  const setDirection = (value: Direction) => {
    localStorage.setItem("direction", value);
    document.documentElement.setAttribute("dir", value);
    document.documentElement.setAttribute("data-dir", value);
    setDirectionState(value);
  };

  return (
    <DirectionContext.Provider value={{ direction, setDirection }}>
      {children}
    </DirectionContext.Provider>
  );
};

export const useDirection = (): DirectionContextType => {
  const ctx = useContext(DirectionContext);
  if (!ctx)
    throw new Error("useDirection must be used within DirectionProvider");
  return ctx;
};

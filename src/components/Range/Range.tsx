import { useEffect, useState } from "react";
import Budget from "../../assets/icons/budget.svg?react";
import styles from "./range.module.css";

type Props = {
  min: number;
  max: number;
  step?: number;
  value: { from: number; to: number };
  onChange: (value: { from: number; to: number }) => void;
  direction?: "ltr" | "rtl";
};

export default function RangeSlider({
  min,
  max,
  step = 1,
  value,
  onChange,
  direction,
}: Props) {
  const [from, setFrom] = useState(value.from);
  const [to, setTo] = useState(value.to);

  useEffect(() => {
    setFrom(value.from);
    setTo(value.to);
  }, [value]);

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.min(+e.target.value, to - step);
    setFrom(val);
    onChange({ from: val, to });
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(+e.target.value, from + step);
    setTo(val);
    onChange({ from, to: val });
  };

  const handleRangeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "from" | "to"
  ) => {
    const val = +e.target.value;
    if (type === "from") {
      const newFrom = Math.min(val, to - step);
      setFrom(newFrom);
      onChange({ from: newFrom, to });
    } else {
      const newTo = Math.max(val, from + step);
      setTo(newTo);
      onChange({ from, to: newTo });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputs}>
        <div className={styles.label}>Budget</div>
        <div className={styles.container}>
          <div className={styles.wrapperInput}>
            <div className={styles.inputContainer}>
              <div className={styles.icon}>
                <Budget />
              </div>
              <input
                value={from}
                onChange={handleFromChange}
                placeholder={to.toString()}
                className={styles.input}
                type="number"
                min={min}
                max={to - step}
              />
            </div>
          </div>
          <div className={styles.line} />
          <div className={styles.wrapperInput}>
            <div className={styles.inputContainer}>
              <div className={styles.icon}>
                <Budget />
              </div>
              <input
                value={to}
                onChange={handleToChange}
                placeholder={to.toString()}
                className={styles.input}
                type="number"
                min={from + step}
                max={max}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sliderWrapper}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={from}
          onChange={(e) => handleRangeChange(e, "from")}
          className={styles.thumbLeft}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={to}
          onChange={(e) => handleRangeChange(e, "to")}
          className={styles.thumbRight}
        />
        <div className={styles.sliderTrack}>
          <div
            className={styles.sliderRange}
            // style={{
            //   left: `${((from - min) / (max - min)) * 100}%`,
            //   width: `${((to - from) / (max - min)) * 100}%`,
            // }}
            style={
              direction === "rtl"
                ? {
                    right: `${((from - min) / (max - min)) * 100}%`,
                    width: `${((to - from) / (max - min)) * 100}%`,
                    left: "unset",
                  }
                : {
                    left: `${((from - min) / (max - min)) * 100}%`,
                    width: `${((to - from) / (max - min)) * 100}%`,
                    right: "unset",
                  }
            }
          />
        </div>
      </div>
    </div>
  );
}

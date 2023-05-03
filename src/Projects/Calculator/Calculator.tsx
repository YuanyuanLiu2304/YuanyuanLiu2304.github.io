import "./calculator.css";
import { useState } from "react";
import Decimal from "decimal.js";

interface CalcButtonProps {
  value: string;
  className?: string;
  onClick: (value: string) => void;
}

function CalcButton(props: CalcButtonProps) {
  return (
    <button
      className={props.className}
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </button>
  );
}

export function Calculator() {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "",
  });

  function handleNum(value: string) {
    let newValue = value;
    if (!calc.isInitial) {
      newValue = calc.current + value;
    }
    setCalc({
      current: newValue,
      total: calc.total,
      isInitial: false,
      preOp: calc.preOp,
    });
  }

  function handleOper(value: string) {
    const total = doCalc();
    setCalc({
      current: total,
      total: total,
      isInitial: true,
      preOp: value,
    });
  }

  function doCalc() {
    let total = new Decimal(parseFloat(calc.total));
    if (calc.current !== calc.total) {
      switch (calc.preOp) {
        case "+":
          total = total.plus(parseFloat(calc.current));
          break;
        case "-":
          total = total.minus(parseFloat(calc.current));
          break;
        case "×":
          total = total.times(parseFloat(calc.current));
          break;
        case "÷":
          total = total.dividedBy(parseFloat(calc.current));
          break;
        default:
          total = new Decimal(parseFloat(calc.current));
          break;
      }
    }

    return total.toString();
  }

  function handleReverse() {
    let reverseValue = -parseFloat(calc.current);
    setCalc({
      current: reverseValue.toString(),
      total: "0",
      isInitial: true,
      preOp: "",
    });
  }

  function handlePercentage() {
    let newValue = new Decimal(parseFloat(calc.current)).dividedBy(100);
    setCalc({
      current: newValue.toString(),
      total: "0",
      isInitial: true,
      preOp: "",
    });
  }

  function handClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: "",
    });
  }

  return (
    <div className="calculator">
      <div className="title_container bg-secondary ">
        <h1>Basic Calculator</h1>
        <p>Calculator App &nbsp; | &nbsp; REACT &nbsp; TYPESCRIPT</p>
        <div className="alert alert-primary mt-5 fs-5">
          This Calculator is designed with a responsive layout that works on all
          screen sizes, it allows users to perform basic arithmetic operations
          such as addition, subtraction, multiplication, and division. It also
          includes additional features such as percentage calculation and the
          ability to clear the calculator screen.
        </div>
      </div>

      <div className="calculator_container ">
        <h2 className="caption">Welcome to the Calculator App</h2>
        <div className="display"> {calc.current} </div>

        <div className="calculator_wrapper">
          <CalcButton className="bg_color" onClick={handClear} value="C" />
          <CalcButton
            className="operator_small bg_color"
            onClick={handleReverse}
            value="+/-"
          />
          <CalcButton
            className="bg_color"
            onClick={handlePercentage}
            value="%"
          />
          <CalcButton className="operator" onClick={handleOper} value="÷" />

          <CalcButton value="7" onClick={handleNum} />
          <CalcButton value="8" onClick={handleNum} />
          <CalcButton value="9" onClick={handleNum} />
          <CalcButton className="operator" onClick={handleOper} value="×" />

          <CalcButton value="4" onClick={handleNum} />
          <CalcButton value="5" onClick={handleNum} />
          <CalcButton value="6" onClick={handleNum} />
          <CalcButton className="operator" onClick={handleOper} value="-" />

          <CalcButton value="1" onClick={handleNum} />
          <CalcButton value="2" onClick={handleNum} />
          <CalcButton value="3" onClick={handleNum} />
          <CalcButton className="operator" onClick={handleOper} value="+" />

          <CalcButton value="0" className="element" onClick={handleNum} />
          <CalcButton className="fw-bold" value="." onClick={handleNum} />
          <CalcButton className="equals" onClick={handleOper} value="=" />
        </div>
      </div>
    </div>
  );
}

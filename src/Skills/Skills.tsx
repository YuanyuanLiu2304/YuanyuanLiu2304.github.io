import { useEffect, useState } from "react";

interface SkillProps {
  percent: number;
  skill: string;
  strokeWidth?: number;
  className?: string;
}

function Skills({ percent, skill, strokeWidth = 18, className }: SkillProps) {
  const [offset, setOffset] = useState(0);
  const [percentAnimated, setPercentAnimated] = useState(0);

  const radius = 100 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let intervalId: any;
    if (percentAnimated < percent) {
      intervalId = setInterval(() => {
        setPercentAnimated((prev) => prev + 1);
      }, 18);
    }
    return () => clearInterval(intervalId);
  }, [percent, percentAnimated]);

  useEffect(() => {
    setOffset(circumference);
  }, [skill]);

  useEffect(() => {
    if (percentAnimated >= percent) {
      setPercentAnimated(0);
    }
    const newOffset = circumference - (circumference * percentAnimated) / 100;
    setOffset(newOffset);
    const circle = document.getElementById(
      "progress-circle-" + skill.toLowerCase()
    );
    if (circle) {
      circle.style.transition = "stroke-dashoffset 0.5s ease-in-out";
      circle.style.strokeDashoffset = newOffset.toString();
    }
  }, [circumference, percentAnimated, skill]);

  return (
    <div className={className}>
      <svg className="progress-circle" width="200" height="200">
        <circle
          className="progress-circle-background"
          stroke="#ddd"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx="100"
          cy="100"
        />
        <circle
          id="progress-circle"
          className="progress-circle-progress"
          stroke="#007bff"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx="100"
          cy="100"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset.toString()}
        />
        <text
          className="fs-5 fw-semibold"
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.3em"
          style={{ fill: "#f8f9fa" }}
        >
          {percent}%
        </text>
      </svg>

      <h3 className="text-center mt-4">{skill}</h3>
    </div>
  );
}

export default Skills;

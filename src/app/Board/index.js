"use client";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
const Board = () => {
  const canvasRef = useRef(null);
  const shouldDraw = useRef(false);
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);
  console.log(color, size);

  useEffect(() => {
    if (!canvasRef) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const changeConfig = () => {
      context.strokeStyle = color;
      context.lineWidth = size;
    };
    changeConfig();
  }, [color, size]);

  useEffect(() => {
    if (!canvasRef) {
      return;
    }
    const canvasCurrent = canvasRef.current;
    const context = canvasCurrent.getContext("2d");

    canvasCurrent.width = window.innerWidth;
    canvasCurrent.height = window.innerHeight;
    const handleMoudDown = (e) => {
      shouldDraw.current = true;
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    };
    const handleMoudUp = (e) => {
      shouldDraw.current = false;
    };
    const handleMoudMove = (e) => {
      console.log(shouldDraw.current);

      if (!shouldDraw.current) return;
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
    };
    canvasCurrent.addEventListener("mousedown", handleMoudDown);
    canvasCurrent.addEventListener("mousemove", handleMoudMove);
    canvasCurrent.addEventListener("mouseup", handleMoudUp);
    return () => {
      canvasCurrent.removeEventListener("mousedown", handleMoudDown);
      canvasCurrent.removeEventListener("mousemove", handleMoudMove);
      canvasCurrent.removeEventListener("mouseup", handleMoudUp);
    };
  }, []);
  return <canvas ref={canvasRef}></canvas>;
};

export default Board;

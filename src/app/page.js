import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./Menu";
import ToolBox from "./Toolbox";
import Board from "./Board";

export default function Home() {
  return (
    <>
      <Board />
      <Menu />
      <ToolBox />
    </>
  );
}

import "@/assets/styles.css";
import { useState } from "react";
import Modal from "@/components/modal";
export default function Home() {
  const[isOpen, setIsOpen]= useState(false);
  function toggleIsOpen(value){
    setIsOpen(value)
  };
  return (
    <main>
      <button className="link-account" onClick={() => toggleIsOpen(true)}>Link Account</button>
      <Modal isOpen={isOpen} toggleIsOpen={toggleIsOpen}></Modal>
    </main>
  );
}

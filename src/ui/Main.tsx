import style from "@/style/main_header.module.css";
import Button from "./Button";
import { useEffect } from "react";

function Main() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: "New User" }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Button name='sdsdsddad' size='small' isDisable='disable'></Button>
    </>
  );
}

export default Main;

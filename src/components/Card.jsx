import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Card = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`container w-[500px] h-[400px] m-5 p-5 rounded-xl shadow-lg transition-all duration-300 ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <h2 className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nisi
        cumque molestiae debitis dignissimos, consectetur voluptas. Quod et
        consequatur ipsa hic nesciunt, iste blanditiis quae eaque sit vel
        incidunt? Nesciunt aperiam autem obcaecati, minima, quod tempore eveniet
        sequi aliquid fugiat cupiditate iste repudiandae deserunt omnis esse
        incidunt vitae veniam expedita quam eligendi repellat impedit? Ratione
        culpa maiores sit debitis voluptatum, cum labore dicta laboriosam
        eveniet, similique voluptatibus maxime nobis tempora quas repudiandae
        saepe consequatur obcaecati rerum sequi numquam sapiente. Suscipit
        placeat esse minima consequuntur consectetur delectus non? Suscipit ex
        cum molestiae, dolorem molestias incidunt dolores eveniet nesciunt
        pariatur, vel voluptate.
      </h2>
    </div>
  );
};

export default Card;

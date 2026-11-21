import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [books, setBooks] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const saveBooks = JSON.parse(localStorage.getItem("data")) || [];
    const selectBooks = saveBooks.find(
      (item) => item.key.split("/").pop() === id,
    );
    setBooks(selectBooks);
  }, [id]);

  return (
    <div>
      <img
        src={`https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg`}
        alt={books.title}
      />
      <h2>{books.title}</h2>
      <button
        onClick={() => navigate("/")}
        className="border border-2 border-black px-4 py-2 bg-amber-300 cursor-pointer"
      >
        Back to home
      </button>
    </div>
  );
};

export default DetailPage;

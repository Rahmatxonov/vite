import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [books, setBooks] = useState("");

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
    </div>
  );
};

export default DetailPage;

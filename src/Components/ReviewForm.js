import React, { useState, useEffect } from "react";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { useParams, useNavigate } from "react-router-dom";

export default function ReviewForm() {
  const { id } = useParams();
  const cid = parseInt(id, 10);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState([]);
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const q = query(
        collection(db, "reviews"),
        where("counsellorId", "==", cid)
      );
      const querySnapshot = await getDocs(q);
      setReview(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchReviews();
  }, [cid]);

  async function handleSubmitform(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await addDoc(collection(db, "reviews"), {
        studentName: name,
        comment: comments,
        rating: rating,
        counsellorId: cid,
        createdAt: new Date(),
      });

      setStatus("submitted");
      setTimeout(() => {
        navigate(`/counsellorDetail/${cid}`);
      }, 2000); // go back to detail page
    } catch (err) {
      setError(err);
      setStatus("typing");
    }
  }
  return (
    <div>
      {status === "submitted" && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ✅ Review submitted successfully! Redirecting...
        </p>
      )}
      <h2>Submit your review</h2>
      <form onSubmit={handleSubmitform}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Review"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                cursor: "pointer",
                fontSize: "24px",
                color: star <= rating ? "gold" : "gray",
              }}
            >
              ★
            </span>
          ))}
        </div>
        <button
          type="submit"
          disabled={
            status === "submitting" ||
            name === "" ||
            comments === "" ||
            rating === 0
          }
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}

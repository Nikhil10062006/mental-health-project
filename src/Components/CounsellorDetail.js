import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import counsellors from "../Data/counsellors";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";

export default function CounsellorDetail() {
  const { id } = useParams();
  const cid = parseInt(id, 10);
  const counsellor = counsellors.find((c) => c.id === cid);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "reviews"),
      where("counsellorId", "==", cid),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsubscribe();
  }, [cid]);

  return (
    <div>
      <h2>{counsellor.name}</h2>
      <p>{counsellor.specialization}</p>
      <p>{counsellor.position}</p>
      <p>{counsellor.email}</p>
      <p>{counsellor.timings}</p>
      <p>{counsellor.location}</p>

      <Link to={`/counsellorDetail/${cid}/review`}>
        <button>Add your review</button>
      </Link>

      <h3>Reviews</h3>
      {reviews.map((r) => (
        <div key={r.id}>
          <strong>{r.studentName}</strong>: {r.comment}
          <div>{"⭐".repeat(r.rating)}</div>
        </div>
      ))}
    </div>
  );
}
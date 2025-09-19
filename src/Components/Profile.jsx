import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { logOut } from "../Services/Auth";
import "./Profile.css";
export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!auth.currentUser) return;
      const ref = doc(db, "users", auth.currentUser.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setUserData(snap.data());
      }
    };
    fetchUserData();
  }, []);

  const handleMoodChange = async (newMood) => {
    if (!auth.currentUser) return;
    const ref = doc(db, "users", auth.currentUser.uid);
    await updateDoc(ref, { mood: newMood });
    setUserData({ ...userData, mood: newMood });
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  const handleSignOut = async () => {
    await logOut();
    window.location.href = "/login";
  };

  if (!userData) return <p>Loading profile...</p>;

  return (
    <div className={`profile-page ${darkMode ? "dark" : ""}`}>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {userData.fullname}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Mood:</strong> {userData.mood || "Not set"}</p>
      
      <button onClick={() => handleMoodChange("Happy")}>😊 Happy</button>
      <button onClick={() => handleMoodChange("Sad")}>😔 Sad</button>
      <button onClick={() => handleMoodChange("Stressed")}>😵 Stressed</button>

      <h3>Saved Messages</h3>
      <ul>
        {userData.savedMessages?.map((msg, i) => (
          <li key={i}>{msg}</li>
        )) || <p>No saved messages</p>}
      </ul>

      <h3>Saved Audios</h3>
      <ul>
        {userData.savedAudios?.map((audio, i) => (
          <li key={i}><audio controls src={audio}></audio></li>
        ))}
      </ul>

      <h3>Saved Videos</h3>
      <ul>
        {userData.savedVideos?.map((video, i) => (
          <li key={i}><video controls width="250" src={video}></video></li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <button onClick={toggleTheme}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleSignOut}>🚪 Sign Out</button>
      </div>
    </div>
  );
}

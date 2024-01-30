"use client";

import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import FirebaseConfig from "@/app/FirebaseConfig/FirebaseConfig";
import { useRouter } from 'next/navigation';

const SingleUserPage = () => {
  const [user, setUser] = useState(null);
  const database = FirebaseConfig();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          // If id is not available yet, return early or set default behavior
          return;
        }

        const dbRef = ref(database, "users");

        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();

          if (data) {
            const selectedUser = data[id];

            if (selectedUser) {
              setUser(selectedUser);
            } else {
              setUser(null);
            }
          } else {
            setUser(null);
          }
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [database, id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Name: {user.name}</h1>
      {/* Display other user details as needed */}
    </div>
  );
};

export default SingleUserPage;
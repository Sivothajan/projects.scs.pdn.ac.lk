import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Instructors.module.css";
import getInstructors from "../../scripts/getInstructors";

function Instructors() {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const instructorsData = await getInstructors();
        if (instructorsData) {
          setInstructors(instructorsData);
        }
      } catch (error) {
        console.error("Error fetching instructors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInstructors();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.instructorsContainer}>
      <h1 className={styles.title}>Our Instructors</h1>
      <div className={styles.instructorsGrid}>
        {instructors.map((instructor) => (
          <Link
            to={`/instructor/${instructor.username}`}
            key={instructor.id}
            className={styles.instructorCard}
          >
            <div className={styles.profileImageContainer}>
              <img
                src={`https://i.pravatar.cc/300?u=${instructor.username}`}
                alt={`${instructor.name}'s profile`}
                className={styles.profileImage}
              />
            </div>
            <h2 className={styles.instructorName}>{instructor.name}</h2>
            <p className={styles.instructorUsername}>@{instructor.username}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Instructors;

export const getInstructorDetails = async (instructorUsername) => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/instructor/${instructorUsername.toLowerCase()}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching instructort details:", error);
    return null;
  }
};

export default getInstructorDetails;

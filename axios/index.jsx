//

import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";

function axiosInstance() {}

export async function getSurvey() {
  const data = await axios.get(baseURL + "/api/survey");
  return data.data;
}

export async function updateSurvey() {}

export async function getQuestions() {
  const data = await axios.get(baseURL + "/api/questions");
  return data.data;
}

export async function DeleteQuestion(id) {
  const data = await axios.delete(baseURL + "/api/question/" + id);

  return data.data;
}

export default axiosInstance;

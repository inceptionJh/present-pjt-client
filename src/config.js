import dotenv from "dotenv";
dotenv.config();

export default function() {
  console.log("[+] NODE_ENV =", process.env.REACT_APP_NODE_ENV);

  switch (process.env.REACT_APP_NODE_ENV) {
    case "develop":
      return { SERVER_URL: "http://localhost:5000" };
    case "product":
      return { SERVER_URL: "http://13.209.146.165:5000" };
    default:
      return;
  }
};

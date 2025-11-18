import express from "express";
import usersRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";
import protectedRoutes from "./routes/protected.routes.js";

const app = express();

app.use(express.json());


app.use("/users", usersRoutes);
app.use("/signin", authRoutes);
app.use("/protected", protectedRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API funcionando correctamente" });
});

export default app;

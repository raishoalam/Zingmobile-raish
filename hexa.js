function canAccessStudent(req, res, next) {
  const { role, section } = req.user;
  const { studentSection } = req.params;

  if (role === "teacher" && section === studentSection) {
    next();
  } else {
    res
      .status(403)
      .json({ error: "You don't have permission to access this data." });
  }
}

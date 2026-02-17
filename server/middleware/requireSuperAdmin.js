export const requireSuperAdmin = (req, res, next) => {
  if (req.user.role !== "SUPERADMIN") {
    return res.status(403).json({
      message: "SuperAdmin access required",
    });
  }

  next();
};

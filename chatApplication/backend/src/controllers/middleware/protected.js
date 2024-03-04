const protected = (req, res, next) => {
    const token = req.cookies.jwtToken;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          console.log(err);
          res.redirect("/login");
        }
        console.log(decoded);
        next();
      });
    } else {
      res.redirect("/login");
    }
  };
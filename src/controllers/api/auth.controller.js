const authService = require("@/services/auth.service");

const login = async (req, res) => {
  try {
    const tokenData = await authService.login(
      req.body.email,
      req.body.password
    );
    res.success(200, tokenData);
  } catch (error) {
    res.error(401, error.message);
  }
};

const register = async (req, res) => {
  try {
    const tokenData = await authService.register(
      req.body.email,
      req.body.password
    );
    res.success(201, tokenData);
  } catch (error) {
    res.error(400, error.message);
  }
};

const me = async (req, res) => {
  res.success(200, req.user);
};

const refreshToken = async (req, res) => {
  try {
    const tokenData = await authService.refreshAccessToken(
      req.body.refreshToken
    );
    res.success(200, tokenData);
  } catch (error) {
    res.error(403, error.message);
  }
};

// exports.sendForgotEmail = async (req, res) => {
//   const message = {
//     from: process.env.MAIL_SENDER_FROM,
//     to: req.body.email,
//     subject: "Reset Link",
//     html: `
//     <div>
//       <p style = "color: red"> Bye </p>
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgVqPfCA2AvKZIYM_vcKxX0ZSxJBeb7YUDQ&s"/>
//     </div>
//     `,
//   };
//   await transporter.sendMail(message);
// };

// exports.logout = async (req, res) => {
//   delete req.session.userId;
//   return res.redirect("/admin/login");
// };

// exports.verifyEmail = async (req, res) => {
//   const token = req.query.token;
//   const result = verifyToken(token);
//   if (result.success) {
//     const userId = result.data.userId;
//     const user = await usersService.getById(userId);
//     if (user.verified_at) {
//       req.flash("info", "Verification link is expired or invalid");
//       console.log(req.flash);
//       return res.redirect("/admin/login");
//     }
//     await usersService.update(userId, {
//       verified_at: new Date(),
//     });
//     req.flash("success", "Verify success");
//     return res.redirect("/admin/login");
//   }
//   req.flash("error", "Verify failed");
//   res.redirect("/admin/login");
// };
module.exports = { register, login, me, refreshToken };

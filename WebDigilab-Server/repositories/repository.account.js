const bcrypt = require("bcrypt");
const { Aslab, Praktikan } = require("../models/AccountModel");

async function validateUser(password, hashedPassword) {
    const result = await bcrypt.compare(password, hashedPassword);
    return result;
}

async function hashPassword(password){
    //console.log("Password to hash:", password);
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

async function createAccountAslab(req,res) {
    //console.log("Request body:", req.body);
    const {aslab_name, aslab_npm, aslab_profile_picture, aslab_bio, aslab_email, aslab_password} = req.body;
    const hashed_password = await hashPassword(aslab_password);
    const aslab = new Aslab({ 
      aslab_name: aslab_name,
      aslab_npm: aslab_npm,
      aslab_profile_picture: aslab_profile_picture,
      aslab_bio: aslab_bio,
      aslab_email: aslab_email,
      aslab_password: hashed_password,
    })

    try {
        const check = await Aslab.findOne({ aslab_npm: aslab_npm });
        if (check) {
            return res.status(400).json({
                error: "NPM sudah terdaftar"
            });
        }

        const check2 = await Aslab.findOne({ aslab_email: aslab_email });
        if (check2) {
            return res.status(401).json({
                error: "Email sudah dipakai"
            });
        }

        await aslab.save();
        res.status(200).json(aslab);
    }
    catch (err) {
        res.status(500).json({
            error: err
        });
    }
}

async function createAccountPraktikan(req, res){
    try {
        const { praktikan_name, praktikan_npm, praktikan_bio, praktikan_profile_picture, praktikan_email, praktikan_password } = req.body;
        const hashedPassword = await hashPassword(praktikan_password);
        const praktikan = new Praktikan({ 
          praktikan_name: praktikan_name,
          praktikan_npm: praktikan_npm,
          praktikan_profile_picture: praktikan_profile_picture,
          praktikan_bio: praktikan_bio,
          praktikan_email: praktikan_email,
          praktikan_password: hashedPassword,
        })
        const checkNpm = await Praktikan.findOne({ praktikan_npm: praktikan_npm });
        if(checkNpm) {
            return res.status(400).json({
                error: "NPM sudah terdaftar"
            });
        }
        const checkEmail = await Praktikan.findOne({ praktikan_email: praktikan_email });
        if(checkEmail) {
            return res.status(401).json({
                error: "Email sudah terdaftar"
            });
        }
        await praktikan.save();
        res.status(201).json(praktikan);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

async function loginAccountAslab(req, res) {
    const { aslab_email, aslab_password } = req.body;
    if (!aslab_email || !aslab_password) {
      res
        .status(400)
        .json({message: "Missing field"});
      return;
    }

    try {
      const aslab = await Aslab.findOne({ aslab_email: aslab_email });
      if (!aslab) {
        res
          .status(401)
          .json({message: "User not found"});
        return;
      }

      const match = await validateUser(aslab_password, aslab.aslab_password);
      if (!match) {
        res
          .status(402)
          .json({message: "Incorrect Password"});
        return;
      }

      res.status(200).json(aslab);
    } catch (err) {
      console.error(err.message);
      res.status(500).json(err);
      return;
    }
}

async function loginAccountPraktikan(req, res) {
    const { praktikan_email, praktikan_password } = req.body;
    if (!praktikan_email || !praktikan_password) {
      res
        .status(400)
        .json({message: "Missing field"});
      return;
    }

    try {
      const praktikan = await Praktikan.findOne({ praktikan_email: praktikan_email });
      if (!praktikan) {
        res
          .status(401)
          .json({message: "User not found"});
        return;
      }

      const match = await validateUser(praktikan_password, praktikan.praktikan_password);
      if (!match) {
        res
          .status(402)
          .json({message: "Incorrect Password"});
        return;
      }

      res.status(200).json(praktikan);
    } catch (err) {
      console.error(err.message);
      res.status(500).json(err);
      return;
    }
}

async function updateAccountPraktikan (req, res) {
  try {
      const { praktikan_id, praktikan_name, praktikan_npm, praktikan_bio, praktikan_profile_picture, praktikan_email, praktikan_password } = req.body;
      const hashedPassword = await hashPassword(praktikan_password);
      
      if (!praktikan_password) {
          const result = await Praktikan.findOneAndUpdate({ praktikan_id: praktikan_id }, {
            praktikan_name: praktikan_name,
            praktikan_npm: praktikan_npm,
            praktikan_bio: praktikan_bio,
            praktikan_profile_picture: praktikan_profile_picture,
            praktikan_email: praktikan_email,
          }, { new: true });
          res.status(201).json(result);
      }
      else {
          const result = await Praktikan.findOneAndUpdate({ praktikan_id: praktikan_id }, {
            praktikan_name: praktikan_name,
            praktikan_npm: praktikan_npm,
            praktikan_bio: praktikan_bio,
            praktikan_profile_picture: praktikan_profile_picture,
            praktikan_email: praktikan_email,
            praktikan_password: hashedPassword,
          }, { new: true });
          res.status(201).json(result);
      }
      
  } catch (error) {
      console.log(error);
      res.status(500).json(error);
  }
}

async function updateAccountAslab (req, res) {
  try {
      const { aslab_id, aslab_name, aslab_npm, aslab_bio, aslab_profile_picture, aslab_email, aslab_password } = req.body;
      const hashedPassword = await hashPassword(aslab_password);
      
      if (!aslab_password) {
          const result = await Aslab.findOneAndUpdate({ aslab_id: aslab_id }, {
            aslab_name: aslab_name,
            aslab_npm: aslab_npm,
            aslab_bio: aslab_bio,
            aslab_profile_picture: aslab_profile_picture,
            aslab_email: aslab_email,
          }, { new: true });
          res.status(201).json(result);
      }
      else {
          const result = await Aslab.findOneAndUpdate({ aslab_id: aslab_id }, {
            aslab_name: aslab_name,
            aslab_npm: aslab_npm,
            aslab_bio: aslab_bio,
            aslab_profile_picture: aslab_profile_picture,
            aslab_email: aslab_email,
            aslab_password: hashedPassword,
          }, { new: true });
          res.status(201).json(result.rows[0]);
      }
      
  } catch (error) {
      console.log(error);
      res.status(500).json(error);
  }
}

async function deleteAccountAslab(req, res) {
  const {aslab_id} = req.body;

  try {
      const result = await Aslab.findOneAndDelete({ aslab_id: aslab_id });
      res.status(200).json(result);
  } catch (err) {
      res.status(500).json({
          error: err
      })
  }
}

async function deleteAccountPraktikan(req, res) {
  const {praktikan_id} = req.body;

  try {
      const result = await Praktikan.findOneAndDelete({ praktikan_id: praktikan_id });
      res.status(200).json(result);
  } catch (err) {
      res.status(500).json({
          error: err
      })
  }
}

module.exports = {
    createAccountAslab,
    createAccountPraktikan,
    loginAccountAslab,
    loginAccountPraktikan,
    updateAccountPraktikan,
    updateAccountAslab,
    deleteAccountAslab,
    deleteAccountPraktikan
}
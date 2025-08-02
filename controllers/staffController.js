import StaffProfile from "../models/staffProfile.js";

// Create staff profile
export const createStaff = async (req, res) => {
  try {
    const staff = new StaffProfile(req.body);
    await staff.save();
    res.status(201).json(staff);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all staff
export const getAllStaff = async (req, res) => {
  const all = await StaffProfile.find();
  res.json(all);
};

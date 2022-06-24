const paintService = require('../services/paint');

const calculate = async (req, res, next) => {
  try {
    const { areas } = req.body;
    const { error, result } = await paintService.calculate(areas);
    return error ? next(error) : res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { calculate };

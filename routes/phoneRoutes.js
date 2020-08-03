const mongoose = require('mongoose');
const Phone = mongoose.model('phone');

module.exports = (app) => {
  /**
   * Get all phones
   */
  app.get(`/api/phone`, async (req, res) => {
    let phones = await Phone.find();
    return res.status(200).send(phones);
  });

  /**
   * Create phone
   */
  app.post(`/api/phone`, async (req, res) => {
    let phone = await Phone.create(req.body);
    return res.status(201).send({
      error: false,
      phone,
    });
  });

  /**
   * Update phone
   */
  app.put(`/api/phone/:id`, async (req, res) => {
    const { id } = req.params;

    let phone = await Phone.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      phone,
    });
  });

  /**
   * Delete phone
   */
  app.delete(`/api/phone/:id`, async (req, res) => {
    const { id } = req.params;

    let phone = await Phone.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      phone,
    });
  });
};

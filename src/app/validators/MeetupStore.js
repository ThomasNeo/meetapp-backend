import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      date_and_hour: Yup.date().required(),
      localization: Yup.string().required(),
      user_id: Yup.number().required(),
      banner_id: Yup.number(),
    });

    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.inner });
  }
};
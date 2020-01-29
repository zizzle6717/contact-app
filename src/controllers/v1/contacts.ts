export const parseData = (req, res) => {
  const { data } = req.body;

  try {
    const parsedDataArray = data.match(/.*?0+|.*/g);
    const parsedData = {
      firstName: parsedDataArray[0],
      lastName: parsedDataArray[1],
      clientId: parsedDataArray[2],
    };

    return res.status(200).send({
      statusCode: 200,
      data: parsedData,
    });
  } catch (err) {
    return res.status(500).send({
      message: 'Failed to parse data.',
      error: err.message,
    });
  }
};

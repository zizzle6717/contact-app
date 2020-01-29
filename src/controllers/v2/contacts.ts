export const parseData = (req, res) => {
  const { data } = req.body;

  try {
    const parsedDataArray = data.split('0').filter((str) => str.length);
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

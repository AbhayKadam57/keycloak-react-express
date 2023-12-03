const data = {
  "kadamabhay40@gmail.com": ["corn", "wheat", "rice", "beetls", "pumpkins"],
  "dadev62281@cumzle.com": ["mongo", "apple", "banana", "grapes", "kiwi"],
};

export const getDocuments = async (req, res) => {
  const { email, name } = req.user;

  const userDetails = {
    name: name,
    userData: data[email],
  };

  try {
    res.status(200).json(userDetails);
  } catch (e) {
    res.status(500).json("Something went wrong");
  }
};

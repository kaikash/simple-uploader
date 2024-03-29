const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// default options
app.use(fileUpload());

app.post('/upload', function(req, res) {
  // if (Object.keys(req.files).length == 0) {
    // return res.status(400).send('No files were uploaded.');
  // }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  res.json(req.files);

  // Use the mv() method to place the file somewhere on your server
  // sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
  //   if (err)
  //     return res.status(500).send(err);

  //   res.send('File uploaded!');
  // });
});

app.listen(3000, () => {
  console.log('app is running on 3000 port');
});

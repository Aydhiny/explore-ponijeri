import multer from "multer";
import nextConnect from "next-connect";

const upload = multer({ dest: "./public/uploads/" });

const handler = nextConnect({
  onError(err, req, res) {
    res.status(501).json({ error: `Upload failed: ${err.message}` });
  },
});

handler.use(upload.single("image"));

handler.post((req, res) => {
  res.status(200).json({ filePath: `/uploads/${req.file.filename}` });
});

export { handler as POST };

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const uploadFile = async (req, res) => {
  try {
    const { fileName, contentType, category } = req.body;
    const userId = req?.user?.id;

    if (!fileName || !contentType || !category) {
      return res
        .status(400)
        .send({ success: false, message: "Missing parameters" });
    }

    const uniqueId = uuidv4();
    const key = `uploads/${category}/${
      userId ?? "User"
    }/${uniqueId}-${fileName}`;

    // Generate signed upload URL
    const uploadUrl = await getUploadUrl(key, contentType);

    // Store only the key in DB (not the signed URL)
    await prisma.file.create({
      data: {
        fileKey: key,
        status: "PENDING",
        // userId, // track who uploaded
      },
    });

    // Send signed URL to frontend so it can upload the file
    return res.send({
      success: true,
      message: "Signed URL generated successfully",
      uploadUrl, // client uses this to PUT the file
      fileKey: key,
    });
  } catch (error) {
    console.log("[ERROR_UPLOADING_FILE]", error);
    return res
      .status(500)
      .send({ success: false, message: "Something went wrong" });
  }
};

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const getUploadUrl = async (key, contentType) => {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET,
    Key: key, // filename/key in bucket
    ContentType: contentType,
  });

  const url = await getSignedUrl(s3, command, { expiresIn: 60 }); // 1 min
  return url;
};

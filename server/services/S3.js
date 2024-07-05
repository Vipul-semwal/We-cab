const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: "AKIA27LDQNJ47OACEH2Q",
        secretAccessKey: "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",
    }
})

async function getObjecturl(filename) {
    const command = new GetObjectCommand({
        Bucket: "wecab-logics",
        Key: `uploads/admin-uploads/${filename}`
    })

    try {
        const url = await getSignedUrl(s3Client, command)
        return url
    } catch (error) {
        throw error
    }
}

async function putObject(filename, ContentType) {
    const command = new PutObjectCommand({
        Bucket: "wecab-logics",
        Key: `uploads/admin-uploads/${filename}`,
        ContentType: ContentType
    })
    try {
        const url = await getSignedUrl(s3Client, command,);
        return url
    } catch (error) {
        throw error;
    }
}

module.exports = { putObject, getObjecturl }


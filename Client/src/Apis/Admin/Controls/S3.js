import axios from "axios";

class S3 {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    async uploadtoS3(filename, ContentType, file) {
        try {
            const Response = await axios.post(`${this.baseUrl}/getPresignedUrlForPut`, { filename, ContentType }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const { url } = Response.data.data

            // upload the url to s3
            await axios.put(url, file, {
                headers: { 'Content-Type': file.type }
            });

            // getting the presign Get Url
            const GetUrl = await this.PresignedUrlGet(filename);
            return GetUrl
        } catch (error) {
            throw error
        }
    }

    async PresignedUrlGet(filename) {
        try {
            const Response = await axios.post(`${this.baseUrl}/getPresignedUrlForGet`, { filename, ContentType }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const { url } = Response.data.data
            return url
        } catch (error) {
            throw error
        }
    }
}

const uploadFileS3 = new S3(`${import.meta.env.VITE_SERVER_BASE_URL}/admin`)

export { uploadFileS3 }
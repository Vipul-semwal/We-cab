const { putObject, getObjecturl } = require('../../../services/S3')

async function PreSignUrlPut(req, res) {
    const { filename, ContentType } = req.body
    console.log(req.body)
    try {
        const url = await putObject(filename, ContentType)
        return res.status(200).json({ message: 'successfully get PresignUrl', data: { url, }, success: true });
    } catch (error) {
        return res.status(500).json({ message: 'Somethig went wrong', success: false });
    }
}

async function PreSignUrlGet(req, res) {
    const { filename } = req.body
    try {
        const url = await getObjecturl(filename)
        return res.status(200).json({ message: 'successfully get PresignUrl', data: { url, }, success: true });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Somethig went wrong', success: false });
    }
}


module.exports = { PreSignUrlGet, PreSignUrlPut }
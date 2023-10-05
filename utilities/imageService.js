import { v2 as cloudinary } from "cloudinary"

export function uploadImage(buffer) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream((err, result) => {
        if (err) reject(err)
        else resolve(result)
      })
      .end(buffer)
  })
}

export function deleteImage(publicId) {
  return cloudinary.uploader.destroy(publicId)
}

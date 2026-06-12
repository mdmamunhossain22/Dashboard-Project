import envConfig from "./env.config";
import { Client, Storage, ID } from "appwrite";


export class StorageService {
    client = new Client();
    storage;

    constructor() {
        this.client
            .setEndpoint(envConfig.APPWRITE_ENDPOINT)
            .setProject(envConfig.APPWRITE_PROJECT_ID);
        this.storage = new Storage(this.client);
    }

    async upLoadImage(inputId) {
        try {
            const response = await this.storage.createFile({
                bucketId: envConfig.APPWRITE_BUCKET_ID,
                fileId: ID.unique(),
                file: document.getElementById(inputId).files[0]
            });
            return response;
        } catch (error) {
            // throw error;
            console.error("Appwrite service :: upLoadImage :: error:", error);
        }
    }

    async updateImage(imageId, inputId) {
        try {
            const response = await this.upLoadImage(inputId)
            response && await this.deleteImage(imageId)
            return response
        } catch (error) {
            // throw error;
            console.error("Appwrite service :: updateImage :: error:", error);
        }
    }

    async getImageView(id) {
        try {
            const response = await this.storage.getFileView({
                bucketId: envConfig.APPWRITE_BUCKET_ID,
                fileId: id,
            });
            return response;
        } catch (error) {
            // throw error;
            console.error("Appwrite service :: getImageFile :: error:", error);
        }
    }

    async deleteImage(imageId) {
        try {
            const response = await this.storage.deleteFile({
                bucketId: envConfig.APPWRITE_BUCKET_ID,
                fileId: imageId,
            });
            return response;
        } catch (error) {
            // throw error;
            console.error("Appwrite service :: deleteImage :: error:", error);
        }
    }

}

const storageService = new StorageService();

export default storageService;
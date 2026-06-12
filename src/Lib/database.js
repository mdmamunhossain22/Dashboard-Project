import envConfig from "./env.config";
import { Client, TablesDB, Account, ID } from "appwrite";

export class DatabaseService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(envConfig.APPWRITE_ENDPOINT)
            .setProject(envConfig.APPWRITE_PROJECT_ID);
        this.database = new TablesDB(this.client);
    }

    async createUserData({ id, fullname, username, email, role, phone, bio, verified, password, profilepictureid }) {
        try {
            const response = await this.database.createRow({
                databaseId: envConfig.APPWRITE_DATABASE_ID,
                tableId: envConfig.APPWRITE_TABLE_ID,
                rowId: id,
                data: {
                    fullname: fullname,
                    username: username,
                    email: email,
                    role: role,
                    phone: phone || null,
                    bio: bio || null,
                    verified: false,
                    password: password,
                    profilepictureid: profilepictureid || null,
                }
            });
            return response;
        } catch (error) {
            // throw error;
            console.error("Appwrite service :: createUserData :: error:", error);
        }
    }

    async getUserData(id) {
        try {
            const response = await this.database.getRow({
                databaseId: envConfig.APPWRITE_DATABASE_ID,
                tableId: envConfig.APPWRITE_TABLE_ID,
                rowId: id,
            });
            return response;
        } catch (error) {
            // throw error;
            console.error("Appwrite service :: getUserData :: error:", error);
        }
    }

    async updateUserData({ id, fullname, username, email, role, phone, bio, profilepictureid }) {
        try {
            const response = await this.database.updateRow({
                databaseId: envConfig.APPWRITE_DATABASE_ID,
                tableId: envConfig.APPWRITE_TABLE_ID,
                rowId: id,
                data: {
                    fullname: fullname,
                    username: username,
                    email: email,
                    phone: phone,
                    bio: bio,
                    profilepictureid: profilepictureid,
                }
            });
            return response;
        } catch (error) {
            // throw error;
            console.error("Appwrite service :: updateUserData :: error:", error);
        }
    }




}

const databaseService = new DatabaseService();

export default databaseService;
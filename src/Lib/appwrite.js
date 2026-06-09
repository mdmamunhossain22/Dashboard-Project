import envConfig from "./env.config";
import { Client, TablesDB, Account, ID } from "appwrite";


export class AppwriteService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(envConfig.APPWRITE_ENDPOINT)
            .setProject(envConfig.APPWRITE_PROJECT_ID);
        this.account = new Account(this.client);
        this.database = new TablesDB(this.client);
    }

    async signIn(email, password) {
        try {
            const response = await this.account.createEmailPasswordSession(email, password);
            return response;
        } catch (error) {
            // throw error;
            console.error("Appwrite service :: signIn :: error:", error);
        }
    }

    async signUp(email, password, name, userName) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, userName );
            if (userAccount) {
                return this.signIn(email, password);
            } else {
                throw new Error("User account creation failed", userAccount);
                return userAccount;
            }

        } catch (error) {
            // throw error;
            console.error("Appwrite service :: signUp :: error:", error);
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            // throw error;
            console.error("Appwrite service :: getCurrentUser :: error:", error);
        }

        return null;
    }

    async signOut() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            // throw error;
            console.error("Appwrite service :: signOut :: error:", error);
        }

    }
}
const appwriteService = new AppwriteService();

export default appwriteService;
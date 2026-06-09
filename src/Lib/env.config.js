const envConfig = {
    APPWRITE_ENDPOINT: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    APPWRITE_PROJECT_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    APPWRITE_DATABASE_ID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID)
};

export default envConfig;
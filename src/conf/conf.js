const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    emailjsServiceId: String(import.meta.env.EMAILJS_SERVICE_ID),
    emailjsTemplateId: String(import.meta.env.EMAILJS_TEMPLATE_ID),
    emailjsPublicId: String(import.meta.env.EMAILJS_PUBLIC_KEY)
}
// there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video

export default conf

require('dotenv').config();
const webpush = require('web-push');

// ENTER THE KEY FINDINGS IN README.md
const privateKey = process.env.VAPID_PRIVATE_KEY || 'DUMMY KEY';
const publicKey = process.env.VAPID_PUBLIC_KEY || 'DUMMY KEY';

try {
    // Technical step 1: Validate key format locally
    webpush.setVapidDetails(
        'mailto:example@gmail.com', // Your email as identification
        publicKey,
        privateKey
    );
    console.log("Status: Key format is cryptographically valid.");

    // Technical step 2: Simulate sending (without a real target)
    // If this key is 'dummy', the library will usually error during header initialization
    console.log("Attempting to generate Authentication Header...");
    const headers = webpush.getVapidHeaders(
        'https://fcm.googleapis.com',
        'mailto:example@gmail.com',
        publicKey,
        privateKey,
        'aes128gcm'
    );
    
    console.log("RESULT: This key can generate an Authentication Header!");
    console.log("Header Details:", headers.Authorization);

} catch (err) {
    console.error("Failed: Key is invalid or only a dummy.");
    console.error("Error Details:", err.message);
}
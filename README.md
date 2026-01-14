# Credential Leak Identification & Validation (CWE-200)

## Project Overview
This project demonstrates the methodology for identifying, auditing, and validating sensitive data exposure within public source code repositories. The primary focus is on Information Disclosure (CWE-200) involving functional cryptographic keys. This research was conducted ethically and reported through official Bug Bounty channels (YesWeHack).

## Technical Methodology
### 1. Reconnaissance & Discovery
 - **Technique**: Advanced **Google Dorking** to identify potential out-of-scope assets and public repositories.
 - **Automated Scanning**: Utilized **Gitleaks** to perform deep scans on repository commit history.
 - **Finding**: Identified an exposed **VAPID Private Key** within a documentation file (README.md).
### 2. Cryptographic Validation (Proof-of-Concept)
To demonstrate the impact, a controlled validation script was developed using **Node.js** and the official web-push library.
 - **Objective**: Verify if the leaked key pair remained functional for production-level operations.
 - **Result**: Successfully generated a valid **Authorization Header**, confirming the key remained active and fungsional.

## Impact & Risk Assessment
The exposure of a functional VAPID private key poses significant risks:
- **Server Impersonation:** Unauthorized actors could masquerade as the official organization server.
- **Phishing & Social Engineering:** High-integrity browser notifications could be signed and sent to users, leading to potential credential theft.
- **Data Integrity:** Compromises the trust boundary between the service provider and its end-users.

## Tools Used
- **Gitleaks:** For secret detection in git repositories.
- **Node.js & Web-Push Library:** For cryptographic signature validation.
- **Google Dorking:** For asset discovery.

## Disclaimer
This project is for educational and professional portfolio purposes only. All vulnerabilities were reported responsibly to the respective organization. No unauthorized access to private data was performed during this research.

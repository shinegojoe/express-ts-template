# google translate api
https://cloud.google.com/docs/authentication/getting-started
download the json key file
export GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"
ex: export GOOGLE_APPLICATION_CREDENTIALS=/home/user/Downloads/service-account-file.json

export GOOGLE_APPLICATION_CREDENTIALS=/home/taka/apiKeys/vocabulary-trainer-314704-33075cda622a.json

# deploy flow
first time
1. bash deploy/scpContainerSetting.sh in the root folder
2. bash firstBuild.sh
3. in container, npm install and bash start.sh

# CD
4. bash deploy/deploy.sh